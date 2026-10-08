import type * as React from 'react'
import type { MetaFunction } from 'react-router'
import { data } from 'react-router'
import { UnavailableStyled } from '../Custom/components/SiteLayout/styles'
import { unavailableSeoMeta } from '../components/seo/SeoHeaders'
export const meta: MetaFunction = unavailableSeoMeta
export const loader = (): ReturnType<typeof data<{ statusCode: number }>> =>
  data({ statusCode: 404 }, { status: 404 })
const NotFound: React.FC = () => (
  <UnavailableStyled>
    <h1 tabIndex={-1}>Страница не найдена</h1>
    <p>Такого адреса нет.</p>
    <a href="/">На главную</a>
  </UnavailableStyled>
)
export { NotFound as default }
