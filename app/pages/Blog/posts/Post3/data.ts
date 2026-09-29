import portalSmall from './assets/portal-small.webp'
import type { Post, PostSeo } from '../../interfaces'
import portal from './assets/portal.webp'

export const post3: Post = {
  path: '/blog/eighteen-hours-a-real-portal-in-production',
  title: 'Eighteen hours. A real portal in production.',
  description:
    'Pivkarta takes the HAIH experiment into production: an established beer portal rebuilt in 18 hours, with its existing database, content, and historical links.',
  date: '2026-09-29',
  dateLabel: '29 September 2026',
  version: 'pivkarta.ru-v1.0.0',
  commit: '2f1caf82078c510099e2c2a98c9cf52ee369c65a',
  commitUrl:
    'https://github.com/Pivkarta/pivkarta.ru-3/commit/2f1caf82078c510099e2c2a98c9cf52ee369c65a',
  image: {
    src: portal,
    srcSet: `${portalSmall} 600w, ${portal} 1440w`,
    alt: 'A paper website pavilion grown into a connected miniature town.',
    width: 1440,
    height: 960,
  },
}

export const post3Seo: PostSeo = {
  title: `${post3.title} — HAIH Blog`,
  description: post3.description,
  path: post3.path,
  image: post3.image,
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post3.title, path: post3.path },
  ],
  article: {
    headline: post3.title,
    published: post3.date,
    version: post3.version,
    commitUrl: post3.commitUrl,
  },
}
