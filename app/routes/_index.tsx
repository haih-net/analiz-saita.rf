import type { MetaFunction } from 'react-router'
import { HomePage } from '../Custom/pages/HomePage'
import {
  createSeoMeta,
  unavailableSeoMeta,
  type SeoHandle,
} from '../components/seo/SeoHeaders'

export const handle: SeoHandle = {
  seo: {
    title: 'Анализ сайта — Николай Ланец',
    description:
      'Анализ сайта: техническое состояние, трафик и путь к обращению. Николай Ланец помогает разобраться в причинах проблем и выбрать дальнейшие изменения.',
    path: '/',
  },
}
export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)
export { HomePage as default }
