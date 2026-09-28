import type { MetaFunction } from 'react-router'
import { createSeoMeta, unavailableSeoMeta } from '../components/seo/SeoHeaders'
import type { SeoHandle } from '../components/seo/SeoHeaders'
import { post1Seo } from '../pages/Blog/posts/Post1'

export const handle = {
  seo: post1Seo,
} satisfies SeoHandle

export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)

export { Post1 as default } from '../pages/Blog/posts/Post1'
