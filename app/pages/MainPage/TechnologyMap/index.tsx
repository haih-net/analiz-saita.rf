import { Link } from 'react-router'
import technologyMap from './technology-map.png'

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
          alt="Docker Compose surrounds three groups: Build with Node.js, TypeScript and Vite; Browser with React and React Router; Delivery with Traefik, Varnish and sirv."
          width={1536}
          height={1024}
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
