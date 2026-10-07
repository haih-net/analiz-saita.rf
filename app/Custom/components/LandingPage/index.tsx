import type * as React from 'react'
import { LandingStyled, IntroStyled, SummaryStyled } from './styles'

interface LandingPageProps {
  title: string
  kicker: string
  intro: string
  visual: React.ReactNode
  children: React.ReactNode
  note?: string
}

export const LandingPage: React.FC<LandingPageProps> = ({
  title,
  kicker,
  intro,
  visual,
  children,
  note = 'От наблюдений — к проверенным решениям',
}) => (
  <LandingStyled>
    <IntroStyled aria-labelledby="page-title">
      <div className="intro-grid">
        <div className="intro-copy">
          <p className="eyebrow">{kicker}</p>
          <h1 id="page-title" tabIndex={-1}>
            {title}
          </h1>
          <p className="intro-text">{intro}</p>
          <a href="#page-details" className="intro-action">
            Подробнее <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="intro-visual">{visual}</div>
      </div>
      <div className="intro-foot">
        <span>{note}</span>
        <span>Николай Ланец / Fi1osof</span>
      </div>
    </IntroStyled>
    <div id="page-details" className="page-details">
      {children}
    </div>
  </LandingStyled>
)

interface DetailSectionProps {
  title: string
  children: React.ReactNode
  accent?: boolean
}

export const DetailSection: React.FC<DetailSectionProps> = ({
  title,
  children,
  accent = false,
}) => (
  <section
    className={accent ? 'detail-section detail-accent' : 'detail-section'}
  >
    <h2>{title}</h2>
    <div className="detail-copy">{children}</div>
  </section>
)

export const AnalysisSummary: React.FC = () => (
  <SummaryStyled>
    <p className="eyebrow">Понять состояние сайта</p>
    <h2>Найти причину. Определить следующий шаг.</h2>
    <div className="summary-columns">
      <div>
        <h3>Начнём со ссылки</h3>
        <p>
          Изучаю назначение сайта, важные сценарии и наблюдаемые проблемы. Не
          нужно заранее составлять техническое задание.
        </p>
      </div>
      <div>
        <h3>Опыт и помощь ИИ</h3>
        <p>
          Программирую с 2007 года. ИИ помогает исследовать проект и
          сопоставлять данные; за выводы и проверку отвечаю я.
        </p>
      </div>
      <div>
        <h3>Дальнейшая работа</h3>
        <p>
          Объясняю, что установлено и что ещё нужно проверить. Объём
          самостоятельного анализа и стоимость обсуждаются отдельно. При
          необходимости можно продолжить развитие сайта.
        </p>
      </div>
    </div>
  </SummaryStyled>
)
