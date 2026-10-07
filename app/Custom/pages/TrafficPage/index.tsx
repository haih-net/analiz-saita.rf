import type * as React from 'react'
import { Link } from 'react-router'
import {
  LandingPage,
  DetailSection,
  AnalysisSummary,
} from '../../components/LandingPage'

export const TrafficPage: React.FC = () => (
  <LandingPage
    kicker={'Трафик сайта'}
    title={'Кто приходит. И зачем.'}
    intro={
      'Число посещений не объясняет, почему сайт не получает обращений. Важно понять, кто приходит, на какие страницы и что делает дальше.'
    }
    visual={
      <div>
        <p className="visual-label">Посещение — начало пути</p>
        <ol className="visual-flow">
          <li>
            <div>
              <strong>Источник</strong>
            </div>
          </li>
          <li>
            <div>
              <strong>Страница входа</strong>
            </div>
          </li>
          <li>
            <div>
              <strong>Действие</strong>
            </div>
          </li>
          <li>
            <div>
              <strong>Обращение</strong>
            </div>
          </li>
        </ol>
      </div>
    }
  >
    <DetailSection title={'Посетители из разных источников'}>
      <p>
        Человек по точному запросу и случайный переход из ленты приходят с
        разными ожиданиями. Сопоставляю источник, страницу входа и предложенное
        действие, если эти сведения доступны.
      </p>
    </DetailSection>
    <DetailSection title={'Роботы и люди в одной цифре'}>
      <p>
        Журналы запросов содержат обращения поисковых роботов и сканеров.
        Большое число запросов не равно большому числу потенциальных клиентов.
        Отделение ботов требует проверяемых признаков.
      </p>
    </DetailSection>
    <DetailSection title={'Сначала проверить измерение'}>
      <p>
        Отсутствие события может означать неисправный сбор. Проверяю, что именно
        учитывается, за какой период и на каких страницах. Затем сравниваю
        поведение, а не несопоставимые числа.
      </p>
      <p>
        Если посещения не превращаются в заявки, стоит разобраться,{' '}
        <Link to="/enquiries">почему нет обращений</Link>.
      </p>
    </DetailSection>
    <AnalysisSummary />
  </LandingPage>
)
