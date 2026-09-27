import { Hero } from './Hero'
import { RequestEvidence } from './RequestEvidence'
import { TechnologyMap } from './TechnologyMap'
import { Roadmap } from './Roadmap'
import { ExperimentOutcomes } from './ExperimentOutcomes'
import './styles.css'

export default function MainPage() {
  return (
    <div className="main-page">
      <Hero />
      <RequestEvidence />
      <TechnologyMap />
      <Roadmap />
      <ExperimentOutcomes />
    </div>
  )
}
