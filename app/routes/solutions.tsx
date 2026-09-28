import type { MetaFunction } from 'react-router'
import { createSeoMeta, unavailableSeoMeta } from '../components/seo/SeoHeaders'
import type { SeoHandle } from '../components/seo/SeoHeaders'
import SolutionsPage from '../pages/SolutionsPage'
import { layers } from '../pages/SolutionsPage/solutions'
import technologyMap from '../pages/MainPage/TechnologyMap/technology-map.png'

export const handle = {
  seo: {
    title: 'Technology choices and their trade-offs — HAIH Solutions',
    description:
      'Explore the React, Vite and Node.js choices behind HAIH: what each provides, what it requires, what has been checked and which decisions remain open.',
    path: '/solutions',
    image: {
      src: technologyMap,
      alt: 'A conceptual map of the HAIH build, browser and delivery layers.',
      width: 1536,
      height: 1024,
    },
    collection: {
      name: 'HAIH solution layers',
      items: layers.map((layer) => ({
        name: layer.name,
        path: `/solutions#${layer.id}`,
        description: layer.summary,
      })),
    },
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Solutions', path: '/solutions' },
    ],
  },
} satisfies SeoHandle

export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)
export default SolutionsPage
