import { Link } from 'react-router'
import delivery from './delivery.png'

export function Hero() {
  return (
    <section className="main-page__hero" aria-labelledby="hero-title">
      <div>
        <p className="main-page__eyebrow">Building in public / with AI</p>
        <h1 id="hero-title" tabIndex={-1}>
          A serious website.
          <br />
          Without Next.js?
        </h1>
        <p className="main-page__intro">
          How little do we actually need? We’re finding out, one requirement at
          a time.
        </p>
        <div className="main-page__actions">
          <Link className="main-page__button" to="/solutions#application">
            See what works <span aria-hidden="true">→</span>
          </Link>
          <a
            className="main-page__button main-page__button--secondary"
            href="#roadmap"
          >
            Follow the experiment
          </a>
        </div>
        <p className="main-page__muted">
          This website is the first working example.
        </p>
        <p className="main-page__note">
          Real requirements.
          <br />
          Real results.
          <br />
          Built in public.
        </p>
      </div>
      <figure>
        <img
          src={delivery}
          alt="Concept illustration of a browser, Traefik, Varnish, Node.js with sirv, and build artifacts."
          width={1536}
          height={1024}
          fetchPriority="high"
        />
        <figcaption>
          Delivery concept. Follow the request below for the cache hit and cache
          miss paths.
        </figcaption>
      </figure>
    </section>
  )
}
