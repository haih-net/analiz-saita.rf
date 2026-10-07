import type { MetaFunction } from 'react-router'
import { TrafficPage } from '../Custom/pages/TrafficPage'
import {
  createSeoMeta,
  unavailableSeoMeta,
  type SeoHandle,
} from '../components/seo/SeoHeaders'

export const handle: SeoHandle = {
  seo: {
    title: 'Трафик сайта — Николай Ланец',
    description:
      'Анализ трафика сайта: источники, посадочные страницы, посетители и роботы. Как связать посещения с задачей бизнеса и не принять отсутствие данных за отсутствие спроса.',
    path: '/traffic',
  },
}
export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)
export { TrafficPage as default }
