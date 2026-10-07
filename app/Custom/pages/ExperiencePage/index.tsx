import type * as React from 'react'
import { Link } from 'react-router'
import {
  LandingPage,
  DetailSection,
  AnalysisSummary,
} from '../../components/LandingPage'
import portrait from './assets/nikolai-lanets.jpg'

export const ExperiencePage: React.FC = () => (
  <LandingPage
    kicker={'Опыт Николая Ланца'}
    title={'Разобраться в чужом проекте.'}
    intro={
      'Я Николай Ланец, Fi1osof. Занимаюсь разработкой с 2007 года. В моей практике — старые сайты, каталоги, магазины и системы с накопленными данными.'
    }
    visual={
      <figure>
        <img src={portrait} alt="Николай Ланец" width={881} height={1024} />
      </figure>
    }
  >
    <DetailSection title={'HappyBaby2000: найти причину'}>
      <p>
        В каталоге пропадала часть изображений товаров. Причина оказалась в
        проверке имени параметра: она допускала только одну цифру. Исправление
        сохранило существующие данные и вернуло изображения.
      </p>
    </DetailSection>
    <DetailSection title={'Pivkarta: сохранить полезное'}>
      <p>
        При обновлении портала сохранялись публичные данные и исторические
        адреса. Для проверенной версии в сентябре 2026 года выполнен обход 73
        760 URL. Авторизация и редактирование не входили в тот этап.
      </p>
    </DetailSection>
    <DetailSection title={'Опыт и ИИ вместе'}>
      <p>
        Использую ИИ для исследования, сопоставления данных и проверки гипотез.
        Инженерные решения и оценку результата беру на себя. Результат
        конкретного проекта не превращаю в обещание такого же срока или эффекта
        для любого сайта.
      </p>
      <p>
        Для вашего проекта можно начать с того,{' '}
        <Link to="/process">как проходит анализ</Link>.
      </p>
    </DetailSection>
    <AnalysisSummary />
  </LandingPage>
)
