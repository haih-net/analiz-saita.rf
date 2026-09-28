import type { MetaFunction } from 'react-router'
import { createSeoMeta, unavailableSeoMeta } from '../components/seo/SeoHeaders'
import type { SeoHandle } from '../components/seo/SeoHeaders'
import { posts } from '../pages/Blog'
import { post1Seo } from '../pages/Blog/posts/Post1/data'

export const handle = {
  seo: {
    title: 'Building HAIH: observations and lessons — HAIH Blog',
    description:
      'Field notes on building a website with AI: working results, unexpected failures and open decisions, with a project version and commit for each story.',
    path: '/blog',
    image: post1Seo.image,
    blog: { posts },
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
    ],
  },
} satisfies SeoHandle

export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)

export { default } from '../pages/Blog/BlogPage'
