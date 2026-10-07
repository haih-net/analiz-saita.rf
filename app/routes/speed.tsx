import type { MetaFunction } from 'react-router'
import { SpeedPage } from '../Custom/pages/SpeedPage'
import {
  createSeoMeta,
  unavailableSeoMeta,
  type SeoHandle,
} from '../components/seo/SeoHeaders'

export const handle: SeoHandle = {
  seo: {
    title: 'Скорость сайта — Николай Ланец',
    description:
      'Анализ скорости сайта: загрузка страницы, изображения, выполнение JavaScript и ответ сервера. Причины задержек и проверка изменений в сопоставимых условиях.',
    path: '/speed',
  },
}
export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)
export { SpeedPage as default }
