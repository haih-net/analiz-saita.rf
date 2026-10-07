import type { MetaFunction } from 'react-router'
import { ContentPage } from '../Custom/pages/ContentPage'
import {
  createSeoMeta,
  unavailableSeoMeta,
  type SeoHandle,
} from '../components/seo/SeoHeaders'

export const handle: SeoHandle = {
  seo: {
    title: 'Содержание сайта — Николай Ланец',
    description:
      'Анализ содержания сайта: ясность предложения, актуальность информации и самостоятельность страниц. Как помочь посетителю понять услугу и сделать следующий шаг.',
    path: '/content',
  },
}
export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)
export { ContentPage as default }
