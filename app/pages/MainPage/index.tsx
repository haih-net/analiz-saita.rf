import { Hero } from './Hero'
import { RequestEvidence } from './RequestEvidence'
import { TechnologyMap } from './TechnologyMap'
import { Roadmap } from './Roadmap'
import { ExperimentOutcomes } from './ExperimentOutcomes'
import { MainPageStyled } from './styles'

export default function MainPage() {
  return (
    <MainPageStyled>
      <Hero />
      <RequestEvidence />
      <TechnologyMap />
      <Roadmap />
      <ExperimentOutcomes />
    </MainPageStyled>
  )
}
