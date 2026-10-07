import type * as React from 'react'
import { Link } from 'react-router'
import {
  LandingPage,
  DetailSection,
  AnalysisSummary,
} from '../../components/LandingPage'

export const EnquiriesPage: React.FC = () => (
  <LandingPage
    kicker={'Нет заявок с сайта'}
    title={'Где обрывается путь к обращению?'}
    intro={
      'Реклама приводит людей, а заявок мало. Проверяю путь целиком: от понимания предложения до получения сообщения вами.'
    }
    visual={
      <div>
        <p className="visual-label">Проверяем весь сценарий</p>
        <ol className="visual-flow">
          <li>
            <div>
              <strong>Понять</strong>
            </div>
          </li>
          <li>
            <div>
              <strong>Выбрать</strong>
            </div>
          </li>
          <li>
            <div>
              <strong>Отправить</strong>
            </div>
          </li>
          <li>
            <div>
              <strong>Получить</strong>
            </div>
          </li>
        </ol>
      </div>
    }
  >
    <DetailSection title={'Понятно ли предложение'}>
      <p>
        Посетитель должен быстро понять, что вы предлагаете, подходит ли это ему
        и как начать. Рассматриваю страницу входа глазами человека, который
        ничего о вашем бизнесе ещё не знает.
      </p>
    </DetailSection>
    <DetailSection title={'Можно ли выполнить действие'}>
      <p>
        Проверяю выбор товара или услуги, навигацию, поля формы и сообщения об
        ошибках. Особенно важен телефон: клавиатура, маленький экран и неудобная
        кнопка могут прервать путь.
      </p>
    </DetailSection>
    <DetailSection title={'Доходит ли обращение'}>
      <p>
        Надпись «отправлено» не доказывает доставку. При согласованной проверке
        прослеживаю обращение до получателя. Обработка заявки и превращение её в
        сделку — следующий участок, который не следует смешивать с работой
        формы.
      </p>
      <p>
        Отдельно разбираю,{' '}
        <Link to="/usability">что мешает пользоваться сайтом с телефона</Link>.
      </p>
    </DetailSection>
    <AnalysisSummary />
  </LandingPage>
)
