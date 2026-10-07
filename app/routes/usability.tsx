import type { MetaFunction } from 'react-router'
import { UsabilityPage } from '../Custom/pages/UsabilityPage'
import {
  createSeoMeta,
  unavailableSeoMeta,
  type SeoHandle,
} from '../components/seo/SeoHeaders'

export const handle: SeoHandle = {
  seo: {
    title: 'Удобство сайта — Николай Ланец',
    description:
      'Анализ удобства сайта: навигация, мобильные страницы, поиск, формы и доступность контактов. Проверка реальных сценариев вместо оценки только внешнего вида.',
    path: '/usability',
  },
}
export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)
export { UsabilityPage as default }
