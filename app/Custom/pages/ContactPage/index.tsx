import type * as React from 'react'
import { Link } from 'react-router'
import {
  LandingPage,
  DetailSection,
  AnalysisSummary,
} from '../../components/LandingPage'
import { AgentConversation } from '../../components/AgentConversation'

export const ContactPage: React.FC = () => (
  <LandingPage
    kicker={'Обсудить сайт'}
    title={'Начнём с вашего адреса.'}
    intro={
      'Напишите мне в Telegram и пришлите ссылку на сайт. Можно добавить, что вам нравится и что хочется изменить. Я сам начну разбираться в проекте.'
    }
    visual={
      <div className="visual-sheet">
        <p className="visual-label">Личная связь</p>
        <h2>Николай Ланец</h2>
        <p>Fi1osof · веб-разработка с 2007 года</p>
        <a className="contact-link" href="https://t.me/Fi1osof">
          @Fi1osof ↗
        </a>
        <p className="contact-note">Написать в Telegram</p>
      </div>
    }
  >
    <DetailSection title={'Что написать'}>
      <p>
        Достаточно ссылки. Если есть конкретный сбой или неудобный сценарий,
        опишите его своими словами. Не нужно заранее определять причину или
        собирать технический отчёт.
      </p>
    </DetailSection>
    <DetailSection title={'Что будет дальше'}>
      <p>
        Знакомлюсь с сайтом, его назначением и вашей ситуацией. Затем обсуждаем
        дальнейшую работу. Объём самостоятельного анализа и его стоимость
        определяются отдельно; цена сопровождения не является ценой аудита.
      </p>
    </DetailSection>
    <DetailSection title={'Кто отвечает'}>
      <p>
        Со мной можно обсудить состояние сайта и его дальнейшее развитие.
        Продающий ИИ-помощник пока не подключён; сейчас сообщение получает
        Николай Ланец через личный Telegram.
      </p>
      <p>
        Перед знакомством можно подробнее узнать,{' '}
        <Link to="/process">как я работаю</Link>.
      </p>
    </DetailSection>
    <AnalysisSummary />
    <AgentConversation showContactLink={false} />
  </LandingPage>
)
