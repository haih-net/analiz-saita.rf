import technologyMapSmall from './technology-map-small.webp'
import { Link } from 'react-router'
import technologyMap from './technology-map.webp'

export function TechnologyMap() {
  return (
    <section className="main-page__section" aria-labelledby="technology-title">
      <div className="main-page__section-heading">
        <div>
          <h2 id="technology-title">Every dependency needs a reason.</h2>
          <p>The current choices, with their requirements and trade-offs.</p>
        </div>
        <Link to="/solutions#tooling">
          Explore the decisions <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <figure>
        <img
          src={technologyMap}
          srcSet={`${technologyMapSmall} 600w, ${technologyMap} 1440w`}
          sizes="(min-width: 72rem) 1088px, (min-width: 48rem) calc(100vw - 64px), calc(100vw - 32px)"
          alt="Docker Compose surrounds three groups: Build with Node.js, TypeScript and Vite; Browser with React and React Router; Delivery with Traefik, Varnish and sirv."
          width={1440}
          height={960}
          loading="lazy"
        />
        <figcaption>
          Build the artifacts, load the application, deliver public responses. A
          conceptual map of responsibilities; each choice still needs evidence.
        </figcaption>
      </figure>
    </section>
  )
}
