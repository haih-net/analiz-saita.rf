import paperSiteSmall from './assets/paper-site-small.webp'
import type { Post, PostSeo } from '../../interfaces'
import paperSite from './assets/paper-site.webp'

// Publication snapshots are intentionally fixed, not derived from the current build.
export const post1: Post = {
  path: '/blog/a-small-site-and-the-limits-we-found',
  title: 'A small site. And the limits we found.',
  description:
    'A working foundation for a small corporate website, unexpected file-serving failures, and the decisions we are still thinking through.',
  date: '2026-09-28',
  dateLabel: '28 September 2026',
  version: 'v0.1.0-1-gccf201e',
  commit: 'ccf201ec57dcf867e11c2f389ebfd0875a72b8a6',
  image: {
    src: paperSite,
    srcSet: `${paperSiteSmall} 600w, ${paperSite} 1440w`,
    alt: 'A small office pavilion built from paper website pages.',
    width: 1440,
    height: 960,
  },
  commitUrl:
    'https://github.com/haih-net/haih.site/commit/ccf201ec57dcf867e11c2f389ebfd0875a72b8a6',
}

export const post1Seo: PostSeo = {
  title: `${post1.title} — HAIH Blog`,
  description: post1.description,
  path: post1.path,
  image: post1.image,
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post1.title, path: post1.path },
  ],
  article: {
    headline: post1.title,
    published: post1.date,
    version: post1.version,
    commitUrl: post1.commitUrl,
  },
}
