import type { Post, PostSeo } from '../../interfaces'
import runtime from './assets/runtime.png'

export const post2: Post = {
  path: '/blog/one-server-two-modes-and-an-api',
  title: 'One server. Two modes. An API.',
  description:
    'Why the website needed a shared server runtime, what broke along the way, and why a working GraphQL endpoint is only the beginning of frontend integration.',
  date: '2026-09-28',
  dateLabel: '28 September 2026',
  version: 'v0.2.0',
  commit: 'a83f4993e06c287a0e4e7639ef2b6521d60b3232',
  image: {
    src: runtime,
    alt: 'A paper website pavilion with a compact blue engine inside.',
    width: 1536,
    height: 1024,
  },
  commitUrl:
    'https://github.com/haih-net/haih.site/commit/a83f4993e06c287a0e4e7639ef2b6521d60b3232',
}

export const post2Seo: PostSeo = {
  title: `${post2.title} — HAIH Blog`,
  description: post2.description,
  path: post2.path,
  image: post2.image,
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post2.title, path: post2.path },
  ],
  article: {
    headline: post2.title,
    published: post2.date,
    version: post2.version,
    commitUrl: post2.commitUrl,
  },
}
