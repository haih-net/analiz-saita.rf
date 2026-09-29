import requestChartSmall from './request-chart-small.webp'
import requestFlowSmall from './request-flow-small.webp'
import { Link } from 'react-router'
import requestFlow from './request-flow.webp'
import requestChart from './request-chart.webp'

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
            srcSet={`${requestFlowSmall} 600w, ${requestFlow} 1080w`}
            sizes="(min-width: 72rem) 532px, (min-width: 48rem) calc(50vw - 44px), calc(100vw - 32px)"
            alt="Browser to Traefik to Varnish, branching into a cached response or an origin request."
            width={1080}
            height={720}
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
            srcSet={`${requestChartSmall} 600w, ${requestChart} 1080w`}
            sizes="(min-width: 72rem) 532px, (min-width: 48rem) calc(50vw - 44px), calc(100vw - 32px)"
            alt="Illustrative blue requests and coral origin requests curves; no measured traffic values."
            width={1080}
            height={720}
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
