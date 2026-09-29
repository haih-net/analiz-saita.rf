import connectionsSmall from './assets/connections-small.webp'
import portalSmall from './assets/portal-small.webp'
import type React from 'react'
import { Link } from 'react-router'
import { author } from '../../../../components/seo/site'
import { post3 as post } from './data'
import { PortalPostStyled } from './styles'
import portal from './assets/portal.webp'
import connections from './assets/connections.webp'

export const Post3: React.FC = () => (
  <PortalPostStyled as="article" className="field-note">
    <header className="field-note-header">
      <Link to="/blog" className="journal-back">
        ← All observations
      </Link>
      <p className="journal-kicker">
        Field notes / 03 · <time dateTime={post.date}>{post.dateLabel}</time>
      </p>
      <h1>
        Eighteen hours.
        <br />
        <span>A real portal in production.</span>
      </h1>
      <p className="field-note-deck">
        We cloned the HAIH website, gave it a different job, and rebuilt
        Pivkarta around its existing database. The next experiment is now a live
        beer discovery portal.
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
            <a href="https://github.com/Pivkarta/pivkarta.ru-3/tree/pivkarta.ru-v1.0.0">
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
          This note follows a separate application built from HAIH. The source
          snapshot stays fixed; the live website will continue to evolve.
        </p>
      </aside>
    </header>
    <figure className="field-note-cover">
      <img
        src={portal}
        srcSet={`${portalSmall} 600w, ${portal} 1440w`}
        sizes="(min-width: 72rem) 1088px, (min-width: 48rem) calc(100vw - 64px), calc(100vw - 32px)"
        width={1440}
        height={960}
        fetchPriority="high"
        alt="A white paper pavilion expanded into a small town of connected shops and an archive, supported by a blue foundation."
      />
      <figcaption>
        The small foundation has a bigger job. An AI-generated editorial
        metaphor, not a screenshot of Pivkarta.
      </figcaption>
    </figure>
    <div className="field-note-body">
      <section>
        <p className="journal-kicker">01 / Out into production</p>
        <h2>The next requirement came with a history.</h2>
        <p>
          Our{' '}
          <Link to="/blog/a-small-site-and-the-limits-we-found">
            first observation
          </Link>{' '}
          examined a small public website. The{' '}
          <Link to="/blog/one-server-two-modes-and-an-api">second</Link> added a
          shared server runtime and a first GraphQL query. The next step was to
          put that foundation to work on an established product.
        </p>
        <p>
          <a href="https://pivkarta.ru">Pivkarta — the Beer Map</a> is a portal
          for discovering beers and the venues connected to them. It already had
          a database, photographs, articles, profiles, comments, and years of
          public addresses. Rebuilding it meant understanding that history as
          well as creating a new interface.
        </p>
        <p>
          We cloned the HAIH site and added the application-specific backend and
          frontend. Eighteen hours later, the rebuilt public experience was in
          production. That is the development window recorded by the project
          owner, across roughly two days, building on the existing HAIH
          foundation and Pivkarta’s content.
        </p>
        <blockquote>
          For this project, 18 hours from an existing foundation to a rebuilt
          portal in production is a very encouraging result.
        </blockquote>
        <p>
          <a href="https://pivkarta.ru" className="portal-visit">
            Visit Pivkarta ↗
          </a>
        </p>
      </section>
      <section>
        <p className="journal-kicker">02 / The scale of the job</p>
        <h2>Thousands of records. One existing database.</h2>
        <p>
          The migration inventory contained 1,636 beers, 3,797 venues, 600
          articles, 64 cities, 3,296 comments, and 26,548 public profiles. These
          are content records, not traffic figures or active-user counts.
          Publication rules still exclude material that should not be public.
        </p>
        <div
          className="portal-facts"
          aria-label="Migration inventory highlights"
        >
          <p>
            <strong>1,636</strong>beers
          </p>
          <p>
            <strong>3,797</strong>venues
          </p>
          <p>
            <strong>73,760</strong>addresses in the compatibility registry
          </p>
        </div>
        <p>
          We kept the existing MySQL database. Knex gives the new backend access
          to its actual tables and relationships. The GraphQL API provides
          lists, filters, counts, pagination, and connections between users,
          venues, beers, and assortment records. Apollo Client and typed
          operations provide the frontend integration that the previous field
          note left open.
        </p>
        <p>
          The public pages also use server loaders. Their initial HTML contains
          useful content and links; the homepage is prerendered, while dynamic
          pages are rendered at request time. The architecture grew to
          accommodate the data instead of requiring the data to fit the original
          demonstration.
        </p>
      </section>
      <section>
        <p className="journal-kicker">03 / What the visitor gets</p>
        <h2>Start with a beer. Follow the connections.</h2>
        <p>
          The new homepage leads with beer search, real product photographs, and
          a small editorial selection. A visitor can read about a beer without
          choosing a city, then follow its connections to venues. Bars, shops,
          breweries, publications, profiles, and comments remain part of the
          same site.
        </p>
        <p>
          That distinction matters with historical data. A relationship between
          a beer and a venue does not prove it is on sale today. The interface
          avoids turning old assortment information into a promise of current
          stock.
        </p>
        <p>
          The shared layout and homepage establish the new visual direction. The
          remaining sections have working public pages; their individual design
          can continue to develop. This release covers reading and discovery.
          Authentication and authoring forms remain outside its scope.
        </p>
      </section>
    </div>
    <figure>
      <img
        src={connections}
        srcSet={`${connectionsSmall} 600w, ${connections} 1440w`}
        sizes="(min-width: 72rem) 1088px, (min-width: 48rem) calc(100vw - 64px), calc(100vw - 32px)"
        width={1440}
        height={960}
        loading="lazy"
        decoding="async"
        alt="Old paper archive cards connected by carefully preserved blue threads to a new paper building."
      />
      <figcaption>
        A new destination, with the old connections preserved. A conceptual
        illustration of URL and content continuity.
      </figcaption>
    </figure>
    <div className="field-note-body">
      <section>
        <p className="journal-kicker">04 / The work behind the redesign</p>
        <h2>An old link is still someone’s entrance.</h2>
        <p>
          Many of the interesting problems were invisible on the homepage. Old
          addresses used numerical IDs, several route shapes, city prefixes, and
          slugs containing quotes, ampersands, Cyrillic characters, or capital
          letters. Regenerating every slug from a title would have been an easy
          way to lose useful links.
        </p>
        <p>
          We built a registry of 73,760 canonical and historical addresses.
          During implementation, a complete HTTP pass against a local production
          build matched the expected status and target for every entry. Old
          routes lead to the corresponding object, with permanent redirects
          where needed. Unknown records retain a real 404 response.
        </p>
        <p>
          That full pass predates the final route and sitemap adjustments, which
          received targeted checks. It is evidence of the migration work, not a
          claim that every external link on the internet has been found or that
          every production request has been tested.
        </p>
        <p>
          Content needed similar care. Draft.js, Markdown, and permitted HTML
          now retain supported links, images, headings, lists, and galleries,
          with server-side HTML sanitization. Authors, venue owners, comments,
          and old section anchors remain connected to their subjects.
        </p>
      </section>
      <section>
        <p className="journal-kicker">
          05 / Small discoveries with real consequences
        </p>
        <h2>The details decided whether it worked.</h2>
        <p>
          <strong>A city ID was not a shared identity.</strong> The old city and
          venue tables did not use matching city identifiers. The new geographic
          selection uses a disclosed 50 km radius around a city center. Reading
          the old schema and behavior mattered more than assuming similarly
          named fields meant the same thing.
        </p>
        <p>
          <strong>
            The first sitemap page could disappear into its own index.
          </strong>{' '}
          A canonicalization rule removed <code>page=1</code>. That is useful
          for an ordinary first page, but wrong when the parameter identifies a
          specific XML batch. The sitemap index now preserves that distinction.
        </p>
        <p>
          <strong>Image preparation paid off immediately.</strong> The five
          homepage images went from about 3.90 MB to 153 KB, a 96.1% reduction
          in file weight. Real beer photographs were retained, and editorial
          illustrations were marked as illustrations. The application also
          gained image resizing through Sharp. We have not converted this
          asset-size result into an unmeasured claim about page speed.
        </p>
        <p>
          <strong>Some broken links were already broken.</strong> The audit
          separated missing source images and dead historical links from
          migration regressions. A redirect to unrelated content would have
          hidden the symptom while losing the meaning.
        </p>
      </section>
      <section>
        <p className="journal-kicker">06 / What this tells us about HAIH</p>
        <h2>A useful foundation can change its job.</h2>
        <p>
          The strongest result is how quickly the existing work could be
          adapted. The shared runtime, routing, styling, and delivery setup
          provided a starting point. The new project then acquired the database
          access, domain relationships, image handling, and compatibility rules
          it needed.
        </p>
        <p>
          This is the direction described in{' '}
          <a href="https://freecode.academy/topics/haih-inzhenernye-znaniya-dlya-ai-agentov-vmesto-eshchyo-odnogo-freymvorka">
            our introduction to HAIH
          </a>
          : giving AI agents useful engineering context about requirements,
          decisions, and verification. Here, that context and a working codebase
          helped turn an established portal into the next concrete experiment.
        </p>
        <p>
          The 18-hour window is one project’s outcome. We already had the
          content, database, a working foundation, and an owner who could make
          scope decisions. It does not establish a universal productivity
          multiplier. It does give us a much more substantial case than another
          demonstration page.
        </p>
      </section>
      <section className="field-note-ending">
        <p className="journal-kicker">
          07 / A live result, and the next questions
        </p>
        <h2>We have something real to build on.</h2>
        <p>
          The approach has now been used to rebuild a portal that is running in
          production at <a href="https://pivkarta.ru">pivkarta.ru</a>. The
          source checkpoint is{' '}
          <a href="https://github.com/Pivkarta/pivkarta.ru-3/tree/pivkarta.ru-v1.0.0">
            pivkarta.ru-v1.0.0
          </a>
          .
        </p>
        <p>
          Implementation checks covered API contracts, URL behavior, content
          links, browser navigation, mobile layouts, and a local production
          proxy-and-cache path. The release preparation reran the API and
          sitemap checks. The public homepage was also inspected while preparing
          this note. These checks are distinct from long-term production
          monitoring; the earlier HAIH load-test results do not measure this
          portal.
        </p>
        <p>
          There is more to do: deeper page design, authoring workflows,
          operational measurement, and further map verification. External map
          tiles were not confirmed in the recorded browser check, although the
          venue list works independently. Those boundaries help define the next
          experiments.
        </p>
        <p>
          Our first notes asked whether the foundation worked and whether it
          could grow a server. This one records what happened when we gave it a
          real product. Eighteen hours, an existing portal rebuilt, and a live
          result we can keep learning from.
        </p>
      </section>
      <footer className="field-note-footer">
        <p>
          Written against {post.version}. The production milestone and 18-hour
          development window are recorded by the project owner. Inventory and
          verification figures refer to the implementation records. Two
          AI-generated editorial illustrations; neither is technical evidence.
        </p>
        <Link to="/blog">← Back to the field notes</Link>
      </footer>
    </div>
  </PortalPostStyled>
)
