import type * as React from 'react'
import { Link } from 'react-router'
import {
  LandingPage,
  DetailSection,
  AnalysisSummary,
} from '../../components/LandingPage'

export const TechnicalPage: React.FC = () => (
  <LandingPage
    kicker={'Технический анализ'}
    title={'Что сломано. Что требует внимания.'}
    intro={
      'Сайт может открываться и при этом терять важные функции. Изучаю техническое состояние через последствия для посетителя и дальнейшего развития.'
    }
    visual={
      <div>
        <p className="visual-label">От ошибки к её последствиям</p>
        <ol className="visual-flow">
          <li>
            <div>
              <strong>Страницы</strong>
            </div>
          </li>
          <li>
            <div>
              <strong>Сценарии</strong>
            </div>
          </li>
          <li>
            <div>
              <strong>Зависимости</strong>
            </div>
          </li>
          <li>
            <div>
              <strong>Приоритеты</strong>
            </div>
          </li>
        </ol>
      </div>
    }
  >
    <DetailSection title={'Проверить важные адреса'}>
      <p>
        Прямое открытие страниц, переходы, отсутствующие изображения, редиректы
        и ответы сервера влияют на людей и поисковых роботов. Неизвестная
        страница не должна притворяться успешной.
      </p>
    </DetailSection>
    <DetailSection title={'Сохранить накопленное'}>
      <p>
        В старом сайте ценны данные, исторические URL и рабочие процессы. Перед
        изменениями выясняю, что необходимо сохранить и какие зависимости могут
        повлиять на перенос.
      </p>
    </DetailSection>
    <DetailSection title={'Разделить срочность'}>
      <p>
        Неотправляющаяся заявка и неудобный отступ имеют разную цену. Приоритет
        задаётся нарушенным сценарием и последствиями. Внутренние причины,
        недоступные при внешнем осмотре, требуют отдельного изучения проекта.
      </p>
      <p>
        Чтобы перейти от наблюдений к решениям, посмотрите,{' '}
        <Link to="/process">как проходит анализ</Link>.
      </p>
    </DetailSection>
    <AnalysisSummary />
  </LandingPage>
)
