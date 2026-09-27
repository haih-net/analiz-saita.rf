import { Link } from 'react-router'
import roadmap from './roadmap.png'

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
          alt="A running public website leads to visible evidence in progress. Dotted branches propose interactive features, APIs with stored data, and access with transactions."
          width={1536}
          height={1024}
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
