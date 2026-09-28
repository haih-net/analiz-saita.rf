import { Link } from 'react-router'
import requestFlow from './request-flow.png'
import requestChart from './request-chart.png'

export function RequestEvidence() {
  return (
    <section
      className="main-page__section"
      aria-labelledby="requests-title"
      id="evidence"
    >
      <div className="main-page__section-heading">
        <div>
          <h2 id="requests-title">How many requests reach the server?</h2>
          <p>Follow the request. See what the cache changes.</p>
        </div>
        <span className="main-page__tag">Illustrative data</span>
      </div>
      <div className="main-page__evidence-grid">
        <figure>
          <img
            src={requestFlow}
            alt="Browser to Traefik to Varnish, branching into a cached response or an origin request."
            width={1536}
            height={1024}
            loading="lazy"
          />
          <figcaption>
            On a cache miss, Node.js + sirv serves files generated during the
            build. It does not generate them per request.
          </figcaption>
        </figure>
        <figure>
          <img
            src={requestChart}
            alt="Illustrative blue requests and coral origin requests curves; no measured traffic values."
            width={1536}
            height={1024}
            loading="lazy"
          />
          <figcaption>
            Measured request statistics are a next step. These curves illustrate
            the idea.
          </figcaption>
        </figure>
      </div>
      <Link className="main-page__section-link" to="/solutions#varnish">
        Explore delivery and caching <span aria-hidden="true">↗</span>
      </Link>
    </section>
  )
}
