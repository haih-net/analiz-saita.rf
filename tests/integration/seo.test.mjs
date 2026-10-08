import { test } from 'vitest'
import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { canonicalUrl } from '../../app/components/seo/site.ts'
import { serializeJsonLd } from '../../app/components/seo/JsonLd/helpers.ts'

const paths = [
  '/',
  '/traffic',
  '/enquiries',
  '/speed',
  '/usability',
  '/technical',
  '/content',
  '/process',
  '/experience',
  '/contact',
]
const origin = 'https://xn----7sbaba3bglns3co.xn--p1ai'
const read = (path) =>
  readFileSync(
    new URL(
      `../../build/client${path === '/' ? '' : path}/index.html`,
      import.meta.url,
    ),
    'utf8',
  )

test('канонические адреса используют домен сайта и убирают варианты URL', () => {
  assert.equal(canonicalUrl('/traffic/?ref=test#details'), `${origin}/traffic`)
  assert.equal(canonicalUrl('/'), `${origin}/`)
  assert.throws(() => canonicalUrl('https://other.example/'))
})
test('JSON-LD безопасно сериализуется без изменения данных', () => {
  const data = { name: '</script><script>alert(1)</script><!--' }
  const serialized = serializeJsonLd(data)
  assert.ok(!serialized.includes('<'))
  assert.deepEqual(JSON.parse(serialized), data)
})
test('все страницы предрендерены с уникальными метаданными, доступными CSS и действующими ссылками', () => {
  const titles = new Set()
  const descriptions = new Set()
  const sitemap = readFileSync(
    new URL('../../build/client/sitemap.xml', import.meta.url),
    'utf8',
  )
  for (const path of paths) {
    const html = read(path)
    const head = html.match(/<head>([\s\S]*?)<\/head>/)[1]
    assert.ok(html.includes('lang="ru"'))
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1)
    assert.equal((head.match(/<title>/g) || []).length, 1)
    titles.add(head.match(/<title>(.*?)<\/title>/)[1])
    descriptions.add(head.match(/name="description" content="([^"]+)"/)[1])
    assert.ok(head.includes(`rel="canonical" href="${canonicalUrl(path)}"`))
    assert.ok(!head.includes('https://haih.site'))
    assert.ok(sitemap.includes(`<loc>${canonicalUrl(path)}</loc>`))
    const styles = [
      ...head.matchAll(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"/g),
    ]
    assert.ok(styles.length > 0)
    for (const [, css] of styles)
      assert.ok(existsSync(new URL(`../../build/client${css}`, import.meta.url)))
    const body = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)[1]
    const links = [...body.matchAll(/<a[^>]*href="([^"]+)"/g)].map(
      (match) => match[1],
    )
    assert.equal((body.match(/id="agent-conversation-title"/g) || []).length, 1)
    const internal = links.filter((url) => url.startsWith('/'))
    if (path === '/') {
      for (const destination of paths.filter((item) => item !== '/'))
        assert.ok(internal.includes(destination), destination)
    } else {
      assert.ok(internal.length <= 3)
    }
    for (const url of internal) assert.ok(paths.includes(url), url)
    assert.deepEqual(
      [...new Set(links.filter((url) => url.startsWith('https://')))],
      path === '/contact' ? ['https://t.me/Fi1osof'] : [],
    )
  }
  assert.equal(titles.size, paths.length)
  assert.equal(descriptions.size, paths.length)
})
test('неизвестные маршруты возвращают 404 без canonical', async () => {
  const { createRequestHandler } = await import('react-router')
  const { createRequire } = await import('node:module')
  const build = createRequire(import.meta.url)('../../build/server/index.js')
  const handler = createRequestHandler(build, 'production')
  for (const path of ['/missing', '/assets/missing.js']) {
    const response = await handler(new Request(origin + path))
    assert.equal(response.status, 404)
    const html = await response.text()
    assert.ok(html.includes('noindex'))
    assert.ok(!html.includes('rel="canonical"'))
  }
})

test('посторонние страницы удалены из роутинга, sitemap и сборки', async () => {
  const { createRequestHandler } = await import('react-router')
  const { createRequire } = await import('node:module')
  const build = createRequire(import.meta.url)('../../build/server/index.js')
  const handler = createRequestHandler(build, 'production')
  for (const path of [
    '/blog',
    '/solutions',
    '/blog/one-server-two-modes-and-an-api',
  ]) {
    const response = await handler(new Request(origin + path))
    assert.equal(response.status, 404)
    assert.ok(!(await response.text()).includes('rel="canonical"'))
    const sitemap = readFileSync(
      new URL('../../build/client/sitemap.xml', import.meta.url),
      'utf8',
    )
    assert.ok(!sitemap.includes(`<loc>${origin}${path}</loc>`))
    assert.ok(
      !existsSync(
        new URL(`../../build/client${path}/index.html`, import.meta.url),
      ),
    )
  }
})
