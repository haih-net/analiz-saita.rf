import type * as React from 'react'
import { Link } from 'react-router'
import {
  LandingPage,
  DetailSection,
  AnalysisSummary,
} from '../../components/LandingPage'

export const UsabilityPage: React.FC = () => (
  <LandingPage
    kicker={'Удобство сайта'}
    title={'Посетителю не нужен квест.'}
    intro={
      'Нужный товар, важный ответ и контакт должны находиться без усилий. Проверяю конкретные сценарии на телефоне и большом экране.'
    }
    visual={
      <div>
        <p className="visual-label">Путь без лишних препятствий</p>
        <ol className="visual-flow">
          <li>
            <div>
              <strong>Найти</strong>
            </div>
          </li>
          <li>
            <div>
              <strong>Разобраться</strong>
            </div>
          </li>
          <li>
            <div>
              <strong>Нажать</strong>
            </div>
          </li>
          <li>
            <div>
              <strong>Продолжить</strong>
            </div>
          </li>
        </ol>
      </div>
    }
  >
    <DetailSection title={'Начать с реального действия'}>
      <p>
        Найти услугу, выбрать товар, уточнить условия, связаться. Для каждого
        сценария смотрю, что человек должен знать и сколько препятствий
        встречает на пути.
      </p>
    </DetailSection>
    <DetailSection title={'Телефон меняет условия'}>
      <p>
        Длинный заголовок, мелкая ссылка, открытая клавиатура и перекрывающий
        экран виджет могут мешать сильнее, чем на десктопе. Проверяю касания,
        переносы, прокрутку и увеличение текста.
      </p>
    </DetailSection>
    <DetailSection title={'Понятный интерфейс отвечает'}>
      <p>
        Ошибка формы должна объяснять следующий шаг. Кнопка — выполнять
        обещанное действие. Возврат назад — сохранять ожидаемый ход работы.
        Красивый экран сам по себе не подтверждает удобство.
      </p>
      <p>
        Удобство связано и с тем,{' '}
        <Link to="/content">насколько понятно содержание</Link>.
      </p>
    </DetailSection>
    <AnalysisSummary />
  </LandingPage>
)
