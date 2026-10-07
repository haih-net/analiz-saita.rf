import type { MetaFunction } from 'react-router'
import { ContactPage } from '../Custom/pages/ContactPage'
import {
  createSeoMeta,
  unavailableSeoMeta,
  type SeoHandle,
} from '../components/seo/SeoHeaders'

export const handle: SeoHandle = {
  seo: {
    title: 'Обсудить сайт — Николай Ланец',
    description:
      'Связаться с Николаем Ланцом для обсуждения анализа сайта. Пришлите адрес сайта и необязательные пожелания в Telegram, без подготовки технического задания.',
    path: '/contact',
  },
}
export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)
export { ContactPage as default }
