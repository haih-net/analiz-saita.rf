import roadmapSmall from './roadmap-small.webp'
import { Link } from 'react-router'
import roadmap from './roadmap.webp'

export function Roadmap() {
  return (
    <section
      className="main-page__section"
      aria-labelledby="roadmap-title"
      id="roadmap"
    >
      <div className="main-page__section-heading">
        <div>
          <h2 id="roadmap-title">What will make this stack grow?</h2>
          <p>Each new requirement is another test.</p>
        </div>
        <span className="main-page__tag">Scope under discussion</span>
      </div>
      <figure>
        <img
          src={roadmap}
          srcSet={`${roadmapSmall} 600w, ${roadmap} 1440w`}
          sizes="(min-width: 72rem) 1088px, (min-width: 48rem) calc(100vw - 64px), calc(100vw - 32px)"
          alt="A running public website leads to visible evidence in progress. Dotted branches propose interactive features, APIs with stored data, and access with transactions."
          width={1440}
          height={960}
          loading="lazy"
        />
        <figcaption>
          Possible next experiments, not a mandatory stack: richer interactions,
          stored data, or accounts and transactions—only when a real need
          justifies them.
        </figcaption>
      </figure>
      <Link className="main-page__section-link" to="/solutions#future">
        Explore planned solutions <span aria-hidden="true">↗</span>
      </Link>
      <p className="main-page__question">
        Can we add the capability without carrying unnecessary complexity?
      </p>
    </section>
  )
}
