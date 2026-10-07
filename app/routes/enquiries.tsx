import type { MetaFunction } from 'react-router'
import { EnquiriesPage } from '../Custom/pages/EnquiriesPage'
import {
  createSeoMeta,
  unavailableSeoMeta,
  type SeoHandle,
} from '../components/seo/SeoHeaders'

export const handle: SeoHandle = {
  seo: {
    title: 'Нет заявок с сайта — Николай Ланец',
    description:
      'Почему сайт не приносит заявки: анализ предложения, пользовательского пути, формы и доставки обращения. Разделяем посещения, обращения и продажи.',
    path: '/enquiries',
  },
}
export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)
export { EnquiriesPage as default }
