import type { MetaFunction } from 'react-router'
import { HowItWorksPage } from '../Custom/pages/HowItWorksPage'
import {
  createSeoMeta,
  unavailableSeoMeta,
  type SeoHandle,
} from '../components/seo/SeoHeaders'

export const handle: SeoHandle = {
  seo: {
    title: 'Как проходит анализ — Николай Ланец',
    description:
      'Как начать анализ сайта с Николаем Ланцом: адрес, знакомство с назначением, проверка сценариев и обсуждение дальнейшей работы. Без готового технического задания.',
    path: '/process',
  },
}
export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)
export { HowItWorksPage as default }
