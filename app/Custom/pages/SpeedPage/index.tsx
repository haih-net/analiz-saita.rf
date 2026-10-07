import type * as React from 'react'
import { Link } from 'react-router'
import {
  LandingPage,
  DetailSection,
  AnalysisSummary,
} from '../../components/LandingPage'

export const SpeedPage: React.FC = () => (
  <LandingPage
    kicker={'Скорость сайта'}
    title={'Быстрее открыть. Проще продолжить.'}
    intro={
      'Медленная страница мешает ещё до знакомства с предложением. Разбираюсь, где уходит время и какие задержки действительно затрагивают посетителя.'
    }
    visual={
      <div>
        <p className="visual-label">От ответа до взаимодействия</p>
        <ol className="visual-flow">
          <li>
            <div>
              <strong>Ответ сервера</strong>
            </div>
          </li>
          <li>
            <div>
              <strong>Содержание</strong>
            </div>
          </li>
          <li>
            <div>
              <strong>Изображения</strong>
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
    <DetailSection title={'Один балл не заменяет наблюдение'}>
      <p>
        Результат зависит от устройства, сети, кеша и выбранной страницы.
        Фиксирую условия проверки и смотрю, когда человек видит содержание и
        может начать действовать.
      </p>
    </DetailSection>
    <DetailSection title={'Разные задержки — разные решения'}>
      <p>
        Долгий ответ сервера, тяжёлое изображение и занятый JavaScript основной
        поток проявляются по-разному. Ищу причину, прежде чем предлагать смену
        платформы или сервера.
      </p>
    </DetailSection>
    <DetailSection title={'Повторить после изменения'}>
      <p>
        Сравнивать нужно одинаковые страницы и условия. Ускорение загрузки —
        технический результат; его влияние на обращения требует отдельного
        наблюдения.
      </p>
      <p>
        Если задержки связаны с устройством проекта, полезно понять,{' '}
        <Link to="/technical">что проверяется в технической части</Link>.
      </p>
    </DetailSection>
    <AnalysisSummary />
  </LandingPage>
)
