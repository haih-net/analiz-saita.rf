import type { MetaFunction } from 'react-router'
import { TechnicalPage } from '../Custom/pages/TechnicalPage'
import {
  createSeoMeta,
  unavailableSeoMeta,
  type SeoHandle,
} from '../components/seo/SeoHeaders'

export const handle: SeoHandle = {
  seo: {
    title: 'Технический анализ — Николай Ланец',
    description:
      'Технический анализ сайта: ошибки страниц, маршруты, формы, индексация и состояние старого проекта. Проверяем причины и сохраняем полезные данные и адреса.',
    path: '/technical',
  },
}
export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)
export { TechnicalPage as default }
