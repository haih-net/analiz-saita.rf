import type * as React from 'react'
import { Link } from 'react-router'
import {
  LandingPage,
  DetailSection,
  AnalysisSummary,
} from '../../components/LandingPage'

export const HowItWorksPage: React.FC = () => (
  <LandingPage
    kicker={'Как проходит анализ'}
    title={'Адрес сайта. Дальше разберусь.'}
    intro={
      'Начнём со знакомства. Пришлите адрес и, если хотите, несколько слов о том, что вас устраивает или беспокоит. Готовый список задач не нужен.'
    }
    visual={
      <div>
        <p className="visual-label">Начинаем с вашего сайта</p>
        <ol className="visual-flow">
          <li>
            <div>
              <strong>Знакомство</strong>
            </div>
          </li>
          <li>
            <div>
              <strong>Изучение</strong>
            </div>
          </li>
          <li>
            <div>
              <strong>Проверка</strong>
            </div>
          </li>
          <li>
            <div>
              <strong>Дальнейшая работа</strong>
            </div>
          </li>
        </ol>
      </div>
    }
  >
    <DetailSection title={'Понять назначение'}>
      <p>
        Сначала изучаю сайт и то, какую работу он должен выполнять для бизнеса и
        посетителя. Уточняю контекст там, где его нельзя достоверно получить из
        самого сайта.
      </p>
    </DetailSection>
    <DetailSection title={'Проверить объяснения'}>
      <p>
        Сопоставляю наблюдения и возможные причины. Внешний осмотр, статистика и
        изучение реализации дают разные сведения. Не выдаю предположение за
        установленную причину.
      </p>
    </DetailSection>
    <DetailSection title={'Определить дальнейшую работу'}>
      <p>
        Объясняю, что обнаружено, что требует дополнительной проверки и с чего
        имеет смысл начинать изменения. Если сайту нужна постоянная забота,
        можно обсудить сопровождение; решение о сотрудничестве остаётся за вами.
      </p>
      <p>
        Оценить мой подход помогут{' '}
        <Link to="/experience">примеры моей работы</Link>.
      </p>
    </DetailSection>
    <AnalysisSummary />
  </LandingPage>
)
