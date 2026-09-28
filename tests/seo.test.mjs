import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { author, canonicalUrl } from '../app/components/seo/site.ts'
import { serializeJsonLd } from '../app/components/seo/JsonLd/helpers.ts'

const paths = [
  '/',
  '/solutions',
  '/blog',
  '/blog/a-small-site-and-the-limits-we-found',
]
const read = (path) =>
  readFileSync(
    new URL(
      `../build/client${path === '/' ? '' : path}/index.html`,
      import.meta.url,
    ),
    'utf8',
  )
const headOf = (html) => html.match(/<head>([\s\S]*?)<\/head>/)[1]
const graphOf = (head) =>
  JSON.parse(
    head.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1],
  )['@graph']

test('canonical URLs are stable across query, hash and trailing slash variants', () => {
  assert.equal(
    canonicalUrl('/blog/?ref=test#article'),
    'https://haih.site/blog',
  )
  assert.equal(canonicalUrl('/'), 'https://haih.site/')
  assert.throws(() => canonicalUrl('https://other.example/article'))
})

test('JSON-LD cannot terminate its script element, and round-trips unchanged', () => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: '</script><script>alert(1)</script><!--',
  }
  const serialized = serializeJsonLd(data)
  assert.ok(!serialized.includes('<'))
  assert.deepEqual(JSON.parse(serialized), data)
})

test('every public page has unique canonical and metadata in prerendered head', () => {
  const descriptions = new Set()
  const sitemap = readFileSync(
    new URL('../build/client/sitemap.xml', import.meta.url),
    'utf8',
  )
  for (const path of paths) {
    const head = headOf(read(path))
    const canonical = canonicalUrl(path)
    assert.equal((head.match(/<title>/g) || []).length, 1)
    assert.equal((head.match(/rel="canonical"/g) || []).length, 1)
    assert.ok(head.includes(`rel="canonical" href="${canonical}"`))
    assert.ok(head.includes(`property="og:url" content="${canonical}"`))
    assert.equal((head.match(/name="description"/g) || []).length, 1)
    assert.equal((head.match(/application\/ld\+json/g) || []).length, 1)
    assert.ok(!head.includes('localhost'))
    const description = head.match(/name="description" content="([^"]+)"/)[1]
    assert.ok(description.length > 60)
    descriptions.add(description)
    assert.ok(
      head.includes(`property="og:description" content="${description}"`),
    )
    assert.ok(
      head.includes(`name="twitter:description" content="${description}"`),
    )
    const image = head.match(/property="og:image" content="([^"]+)"/)[1]
    assert.equal(new URL(image).origin, 'https://haih.site')
    assert.ok(
      existsSync(
        new URL(`../build/client${new URL(image).pathname}`, import.meta.url),
      ),
    )
    assert.ok(head.includes('property="og:image:alt"'))
    assert.ok(
      graphOf(head).some(
        (node) =>
          ['WebPage', 'CollectionPage'].includes(node['@type']) &&
          node.url === canonical,
      ),
    )
    assert.ok(sitemap.includes(`<loc>${canonical}</loc>`))
  }
  assert.equal(descriptions.size, paths.length)
})

test('homepage describes the website, without presenting it as a software product', () => {
  const graph = graphOf(headOf(read('/')))
  const website = graph.find((node) => node['@type'] === 'WebSite')
  assert.equal(website.name, 'HAIH')
  assert.equal(website.url, 'https://haih.site/')
  assert.ok(website.description.includes('requirements'))
  assert.ok(
    !graph.some((node) =>
      ['Product', 'SoftwareApplication', 'BlogPosting'].includes(node['@type']),
    ),
  )
})

test('blog index describes a collection, blog and the same posts visible in HTML', () => {
  const html = read('/blog')
  const head = headOf(html)
  const graph = graphOf(head)
  const page = graph.find((node) => node['@type'] === 'CollectionPage')
  const blog = graph.find((node) => node['@type'] === 'Blog')
  const list = graph.find((node) => node['@type'] === 'ItemList')
  assert.equal(page.mainEntity['@id'], blog['@id'])
  assert.equal(page.hasPart['@id'], list['@id'])
  assert.equal(list.numberOfItems, blog.blogPost.length)
  assert.equal(
    list.numberOfItems,
    (html.match(/class="journal-card"/g) || []).length,
  )
  for (const item of list.itemListElement) {
    assert.ok(html.includes(`href="${new URL(item.url).pathname}"`))
    const post = graph.find((node) => node['@id'] === item.item['@id'])
    assert.equal(post.isPartOf['@id'], blog['@id'])
    assert.ok(blog.blogPost.some((ref) => ref['@id'] === post['@id']))
  }
  assert.ok(head.includes('property="og:type" content="website"'))
  assert.ok(!head.includes('property="article:published_time"'))
})

test('solutions collection points at real visible sections, preserving fragment identifiers', () => {
  const html = read('/solutions')
  const graph = graphOf(headOf(html))
  const page = graph.find((node) => node['@type'] === 'CollectionPage')
  const list = graph.find((node) => node['@type'] === 'ItemList')
  assert.equal(page.mainEntity['@id'], list['@id'])
  for (const item of list.itemListElement) {
    const url = new URL(item.url)
    assert.equal(url.pathname, '/solutions')
    assert.ok(url.hash)
    assert.ok(html.includes(`id="${url.hash.slice(1)}"`))
  }
})

test('article connects visible author, ORCID, image, breadcrumbs and frozen revision', () => {
  const html = read(paths.at(-1))
  const graph = graphOf(headOf(html))
  const article = graph.find((node) => node['@type'] === 'BlogPosting')
  const person = graph.find((node) => node['@type'] === 'Person')
  assert.equal(person['@id'], 'https://fi1osof.ru/about')
  assert.ok(person.sameAs.includes('https://orcid.org/0009-0007-9285-0801'))
  assert.equal(article.author['@id'], person['@id'])
  assert.equal(article.isPartOf['@id'], 'https://haih.site/blog#blog')
  assert.ok(html.includes(author.name))
  assert.ok(html.includes('>ORCID</a>'))
  assert.equal(article.about.version, 'v0.1.0-1-gccf201e')
  assert.equal(
    article.citation,
    'https://github.com/haih-net/haih.site/commit/ccf201ec57dcf867e11c2f389ebfd0875a72b8a6',
  )
  assert.equal(article.datePublished, '2026-09-28')
  assert.equal(article.dateModified, undefined)
  const imagePath = new URL(article.image.url).pathname
  assert.ok(imagePath.startsWith('/assets/'))
  assert.ok(existsSync(new URL(`../build/client${imagePath}`, import.meta.url)))
  assert.equal(
    graph.find((node) => node['@type'] === 'BreadcrumbList').itemListElement
      .length,
    3,
  )
})

test('unknown-route fallback is noindex without a fabricated canonical or article', () => {
  const html = readFileSync(
    new URL('../build/client/__spa-fallback.html', import.meta.url),
    'utf8',
  )
  const head = headOf(html)
  assert.ok(head.includes('noindex'))
  assert.ok(!head.includes('rel="canonical"'))
  assert.ok(!head.includes('BlogPosting'))
})
