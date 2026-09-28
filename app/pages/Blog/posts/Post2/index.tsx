import { Link } from 'react-router'
import { author } from '../../../../components/seo/site'
import { post2 as post } from './data'
import { RuntimePostStyled } from './styles'
import runtime from './assets/runtime.png'
import staleCache from './assets/stale-cache.png'

export const Post2: React.FC = () => (
  <RuntimePostStyled as="article" className="field-note">
    <header className="field-note-header">
      <Link to="/blog" className="journal-back">
        ← All observations
      </Link>
      <p className="journal-kicker">
        Field notes / 02 · <time dateTime={post.date}>{post.dateLabel}</time>
      </p>
      <h1 tabIndex={-1}>
        One server.
        <br />
        <span>Two modes. An API.</span>
      </h1>
      <p className="field-note-deck">
        The next requirement was a server we could actually develop. Getting
        there exposed a gap in our workflow, a misleading 404, and a cache
        running yesterday’s instructions.
      </p>
      <p className="journal-byline">
        By{' '}
        <a href={author.url} rel="author">
          {author.name}
        </a>{' '}
        · <a href={author.sameAs[0]}>ORCID</a>
      </p>
      <aside
        className="journal-snapshot"
        aria-label="Project revision discussed in this article"
      >
        <span>
          Observed project version{' '}
          <strong>
            <a href="https://github.com/haih-net/haih.site/tree/v0.2.0">
              {post.version}
            </a>
          </strong>
        </span>
        <span>
          Commit{' '}
          <a href={post.commitUrl}>
            <code>{post.commit.slice(0, 7)}</code>
          </a>
        </span>
        <p>
          This snapshot predates the article. Its reference stays fixed as the
          website evolves.
        </p>
      </aside>
    </header>
    <figure className="field-note-cover">
      <img
        src={runtime}
        width={1536}
        height={1024}
        fetchPriority="high"
        alt="A miniature paper website pavilion opened to reveal a blue engine with brass gears and a coral flywheel."
      />
      <figcaption>
        A working engine, added when the job calls for one. A conceptual
        illustration, not a diagram of the server.
      </figcaption>
    </figure>
    <div className="field-note-body">
      <section>
        <p className="journal-kicker">01 / The next requirement</p>
        <h2>Start small. Then add what is needed.</h2>
        <p>
          In{' '}
          <Link to="/blog/a-small-site-and-the-limits-we-found">
            our first field note
          </Link>
          , the website could already serve public pages. Static delivery was
          the first sufficient layer. It let us establish routing, HTML, styling
          and a production delivery path before taking on more behavior.
        </p>
        <p>
          A permanently static website was never the goal. If serving
          handwritten HTML had satisfied every requirement, a simple file server
          would have been enough. We are building from the bottom up: keep what
          works, then add the capabilities that a real need makes necessary.
        </p>
        <blockquote>
          Minimalism has to account for the work the system must do.
        </blockquote>
        <p>
          The next need was server logic and a GraphQL API. That immediately
          exposed a mismatch: <code>npm run dev</code> started React Router’s
          development environment, while <code>npm run start</code> started our
          own Node.js server. The frontend had a development loop. The server
          effectively did not.
        </p>
      </section>
      <section>
        <p className="journal-kicker">02 / One application entry point</p>
        <h2>The server needs a development mode too.</h2>
        <p>
          Express now owns the application entry point in both environments.
          GraphQL is mounted there in both modes. In development, Vite runs as
          middleware; in production, sirv serves built files and React Router
          handles requests through its server build.
        </p>
        <div className="runtime-summary">
          <p>
            <strong>Development</strong>Express + GraphQL + Vite middleware.
            Server changes restart through tsx watch; Vite supplies the frontend
            development machinery.
          </p>
          <p>
            <strong>Production</strong>Express + GraphQL + built assets and the
            React Router server bundle. Traefik and Varnish remain in front of
            the application.
          </p>
        </div>
        <p>
          React Router now has <code>ssr: true</code>, alongside prerendering of
          the listed public pages. Request-time rendering is an accepted part of
          this runtime. Cacheable responses can still be served by Varnish
          without reaching Node.js on every request.
        </p>
        <p>
          An early AI-assisted attempt split the work into three processes. That
          added coordination without addressing a requirement we actually had.
          One application entry point was enough. This does not remove the
          separate proxy and cache services; it keeps the application’s own
          development workflow coherent.
        </p>
      </section>
      <section>
        <p className="journal-kicker">03 / The first API</p>
        <h2>A small query, a useful boundary.</h2>
        <p>
          Apollo Server and Pothos now provide a GraphQL endpoint at
          <code> /api</code>, with an embedded explorer for trying queries.
          Pothos builds the typed schema; Apollo handles GraphQL requests. There
          is no Prisma integration or database behind this first step.
        </p>
        <pre className="runtime-example">
          <code>{`query {
  health
}

# Response
{ "data": { "health": "ok" } }`}</code>
        </pre>
        <p>
          This deliberately modest query establishes that the API is reachable
          through the production entry point. The playground is useful for
          inspecting the schema and making requests, but it is not the website’s
          data interface. We have not added the frontend API client yet.
        </p>
      </section>
      <section>
        <p className="journal-kicker">04 / Integration costs</p>
        <h2>The seams are where things break.</h2>
        <p>
          Server compilation brought ESM resolution into view. Our source uses
          extensionless relative imports; the chosen Node-oriented TypeScript
          configuration objected to them. We currently bundle the server with
          esbuild and run TypeScript separately for checking. That resolves the
          immediate build problem without making this arrangement a universal
          recommendation. The production bundle import still has a known TODO.
        </p>
        <p>
          Another small dependency detail mattered: the production start script
          uses <code>cross-env</code>. Keeping it in development dependencies
          meant a production-only install omitted something startup required. It
          now belongs to the runtime dependencies.
        </p>
        <p>
          File-based routing answered a different structural need. Previously,
          the route list used string paths without import-level checks that the
          files existed. Deriving routes from the real file tree removes that
          manually maintained list. The benefit is a closer connection between
          routes and source files, not simply shorter configuration.
        </p>
        <p>
          None of those changes eliminated the need to check HTTP behavior.
          After the server transition, our catch-all page said “Page not found”
          while returning 200. A visitor could see the intended message and a
          cache could still treat it as a successful response. The route now
          explicitly returns 404.
        </p>
      </section>
    </div>
    <figure>
      <img
        src={staleCache}
        width={1536}
        height={1024}
        loading="lazy"
        decoding="async"
        alt="A miniature blue paper dispensing machine still handing out old cards while a fresh coral instruction card waits beside it."
      />
      <figcaption>
        The file had changed. The running cache had not. A conceptual
        illustration of stale configuration.
      </figcaption>
    </figure>
    <div className="field-note-body">
      <section>
        <p className="journal-kicker">05 / A passing build, an old policy</p>
        <h2>The cache had not read the memo.</h2>
        <p>
          We excluded non-200 backend responses from Varnish caching and rebuilt
          the application. One test still failed: a repeated missing-page
          request returned <code>X-Cache: HIT</code> instead of{' '}
          <code>MISS</code>.
        </p>
        <p>
          Inspecting the active VCL explained it. The updated file was on disk,
          but Varnish was still running the old configuration. Restarting the
          cache loaded the new policy. All five HTTP tests then passed.
          Rebuilding the application and applying cache configuration are
          separate operational steps.
        </p>
        <p>
          The current policy gives public HTML up to one hour and matching asset
          URLs up to seven days. That is an interim policy. Cookie handling,
          personalized responses and publication invalidation remain open work;
          this configuration should not be treated as a finished policy for
          authenticated pages.
        </p>
        <p>
          We want to reason about caching from the content and its dependencies.
          Varnish ultimately receives an HTTP response, so component-level needs
          must become a policy for that response, or for separately fetched
          data. How we will compose those policies is still undecided.
        </p>
        <aside className="field-note-margin">
          <strong>Three related questions</strong>
          <p>
            <code>Cache-Control</code> governs storage and reuse. An{' '}
            <code>ETag</code> helps validate whether a representation changed. A
            frontend client cache manages application data in the browser.
            Adding one does not settle the other two.
          </p>
        </aside>
      </section>
      <section>
        <p className="journal-kicker">06 / Evidence at this revision</p>
        <h2>Five checks, with clear limits.</h2>
        <p>
          Type checking passed. After rebuilding the application and restarting
          Varnish, the local production HTTP checks verified:
        </p>
        <ul className="runtime-evidence">
          <li>Public HTML contains the expected titles and headings.</li>
          <li>
            Unknown pages and missing assets return uncached 404 responses.
          </li>
          <li>HEAD works, and an unsupported page POST returns 405.</li>
          <li>
            Repeated page and asset requests hit Varnish under the current TTL
            limits.
          </li>
          <li>A GraphQL POST returns the expected health response.</li>
        </ul>
        <p>
          Those are useful observations, not proof of every browser interaction
          or a complete dynamic caching strategy. We did not repeat the earlier
          release’s load test or Lighthouse measurements for this checkpoint.
          These HTTP tests do not verify hydration or frontend data fetching.
        </p>
        <p>
          The{' '}
          <a href="https://github.com/haih-net/haih.site/blob/v0.2.0/tests/http.test.mjs">
            versioned HTTP tests
          </a>{' '}
          and{' '}
          <a href="https://github.com/haih-net/haih.site/compare/v0.1.0...v0.2.0">
            changes since v0.1.0
          </a>{' '}
          provide the implementation record behind this note.
        </p>
      </section>
      <section className="field-note-ending">
        <p className="journal-kicker">07 / The next piece</p>
        <h2>The browser still needs its connection.</h2>
        <p>
          Next comes the frontend API client and a real data-driven interaction.
          We need to decide how requests, loading states, failures and client
          caching fit into the UI. We also need to keep server-rendered data and
          the initial client render consistent, then check subsequent updates.
        </p>
        <p>
          The runtime and API give us somewhere to connect. They do not finish
          that work for us. The next useful demonstration is a request that
          changes something a visitor can see, with behavior we can explain and
          verify from server to browser.
        </p>
      </section>
      <footer className="field-note-footer">
        <p>
          Written against {post.version}. Illustrations are conceptual;
          technical claims refer to the linked project snapshot.
        </p>
        <Link to="/blog">← Back to the field notes</Link>
      </footer>
    </div>
  </RuntimePostStyled>
)
