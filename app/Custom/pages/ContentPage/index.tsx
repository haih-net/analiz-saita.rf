import type * as React from 'react'
import { Link } from 'react-router'
import {
  LandingPage,
  DetailSection,
  AnalysisSummary,
} from '../../components/LandingPage'

export const ContentPage: React.FC = () => (
  <LandingPage
    kicker={'Содержание сайта'}
    title={'Смысл должен быть виден сразу.'}
    intro={
      'Когда посетителю приходится собирать предложение по разным страницам, часть вопросов так и остаётся без ответа. Проверяю содержание с точки зрения его задачи.'
    }
    visual={
      <div>
        <p className="visual-label">Содержание помогает решению</p>
        <ol className="visual-flow">
          <li>
            <div>
              <strong>Вопрос</strong>
            </div>
          </li>
          <li>
            <div>
              <strong>Ответ</strong>
            </div>
          </li>
          <li>
            <div>
              <strong>Основание</strong>
            </div>
          </li>
          <li>
            <div>
              <strong>Действие</strong>
            </div>
          </li>
        </ol>
      </div>
    }
  >
    <DetailSection title={'Любая страница может быть первой'}>
      <p>
        Человек приходит из поиска сразу на услугу или товар. На странице должны
        быть не только подробности темы, но и необходимые сведения об
        исполнителе, условиях и следующем действии.
      </p>
    </DetailSection>
    <DetailSection title={'Конкретика вместо общих обещаний'}>
      <p>
        Изучаю, понятно ли, что вы делаете и какую ситуацию помогаете изменить.
        Проверяю актуальность контактов, ассортимента и условий; неизвестные
        факты требуют уточнения у владельца.
      </p>
    </DetailSection>
    <DetailSection title={'Структура с учётом истории'}>
      <p>
        Переписывание и перенос страниц затрагивают существующие ссылки и поиск.
        Выбираю изменения с учётом накопленного содержания, а не ради полной
        замены всего сайта.
      </p>
      <p>
        Понятный текст тоже нужно успеть увидеть: разберём,{' '}
        <Link to="/speed">что влияет на скорость загрузки</Link>.
      </p>
    </DetailSection>
    <AnalysisSummary />
  </LandingPage>
)
