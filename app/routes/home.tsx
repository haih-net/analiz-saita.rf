import type { MetaFunction } from 'react-router'
import { createSeoMeta, unavailableSeoMeta } from '../components/seo/SeoHeaders'
import type { SeoHandle } from '../components/seo/SeoHeaders'
import MainPage from '../pages/MainPage'
import delivery from '../pages/MainPage/Hero/delivery.png'
import { site } from '../components/seo/site'

export const handle = {
  seo: {
    title: 'HAIH — Building websites with AI, from requirements',
    description: site.description,
    path: '/',
    image: {
      src: delivery,
      alt: 'A conceptual illustration of the HAIH website delivery architecture.',
      width: 1536,
      height: 1024,
    },
  },
} satisfies SeoHandle

export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)
export default MainPage
