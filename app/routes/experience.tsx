import type { MetaFunction } from 'react-router'
import { ExperiencePage } from '../Custom/pages/ExperiencePage'
import {
  createSeoMeta,
  unavailableSeoMeta,
  type SeoHandle,
} from '../components/seo/SeoHeaders'

export const handle: SeoHandle = {
  seo: {
    title: 'Опыт Николая Ланца — Николай Ланец',
    description:
      'Николай Ланец: опыт разработки с 2007 года, исследование старых сайтов и практические примеры HappyBaby2000, Pivkarta и Городских бань.',
    path: '/experience',
  },
}
export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)
export { ExperiencePage as default }
