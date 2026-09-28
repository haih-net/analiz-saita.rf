import { Link } from 'react-router'
import { author } from '../../../../components/seo/site'
import paperSite from './assets/paper-site.png'
import imageWeight from './assets/image-weight.png'
import { BlogStyled } from '../../styles'
import { Post, PostSeo } from '../../interfaces'

// Publication snapshots are intentionally fixed, not derived from the current build.
export const post1: Post = {
  path: '/blog/a-small-site-and-the-limits-we-found',
  title: 'A small site. And the limits we found.',
  description:
    'A working foundation for a small corporate website, unexpected file-serving failures, and the decisions we are still thinking through.',
  date: '2026-09-28',
  dateLabel: '28 September 2026',
  version: 'v0.1.0-1-gccf201e',
  commit: 'ccf201ec57dcf867e11c2f389ebfd0875a72b8a6',
  commitUrl:
    'https://github.com/haih-net/haih.site/commit/ccf201ec57dcf867e11c2f389ebfd0875a72b8a6',
}

export const post1Seo: PostSeo = {
  title: `${post1.title} — HAIH Blog`,
  description: post1.description,
  path: post1.path,
  image: {
    src: paperSite,
    alt: 'A small office pavilion built from paper website pages.',
    width: 1536,
    height: 1024,
  },
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post1.title, path: post1.path },
  ],
  article: {
    headline: post1.title,
    published: post1.date,
    version: post1.version,
    commitUrl: post1.commitUrl,
  },
}

const post = post1

export const Post1: React.FC = () => {
  return (
    <BlogStyled as="article" className="field-note">
      <header className="field-note-header">
        <Link to="/blog" className="journal-back">
          ← All observations
        </Link>
        <p className="journal-kicker">
          Field notes / 01 · <time dateTime={post.date}>{post.dateLabel}</time>
        </p>
        <h1 tabIndex={-1}>
          A small site.
          <br />
          <span>And the limits we found.</span>
        </h1>
        <p className="field-note-deck">
          The foundation works. Looking closely at it made both its usefulness
          and its rough edges easier to see.
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
            Observed project version <strong>{post.version}</strong>
          </span>
          <span>
            Commit{' '}
            <a href={post.commitUrl}>
              <code>{post.commit.slice(0, 7)}</code>
            </a>
          </span>
          <p>
            One commit after v0.1.0, before this blog was added. This reference
            stays fixed even if we replace the implementation.
          </p>
        </aside>
      </header>
      <figure className="field-note-cover">
        <img
          src={paperSite}
          alt="A small office pavilion built from paper website pages, with a few unfinished structural pieces beside it."
          width={1536}
          height={1024}
          fetchPriority="high"
        />
        <figcaption>
          Something usable can still have unfinished edges. A conceptual
          illustration, not an architecture diagram.
        </figcaption>
      </figure>
      <div className="field-note-body">
        <section>
          <p className="journal-kicker">01 / What already works</p>
          <h2>There is a useful website here.</h2>
          <p>
            We set out to build this website from its actual requirements. At
            this revision, React Router and Vite produce public HTML pages,
            client-side navigation and separate route bundles. React handles the
            interactive parts. The production Node process serves the finished
            files; it does not render React on every request.
          </p>
          <p>
            Type checking, linting and the production build passed during this
            review. The build contained HTML for the three public pages and a
            separate interaction-probe chunk. That is tangible progress. It is
            also a narrower statement than saying every browser and deployment
            scenario has been verified.
          </p>
          <p>
            Our current judgment is that this foundation is already a practical
            fit for a small corporate website with no dynamic content, provided
            its images are prepared in advance. A company introduction, service
            pages and a handful of public stories do not inherently need a
            database or a request-time rendering service.
          </p>
          <blockquote>
            For that scope, the approach feels lightweight and easy to maintain.
            That is our assessment of the current structure, not a performance
            benchmark or a claim that every server edge case is solved.
          </blockquote>
          <p>
            This repository is the website itself, not a packaged engine. Its
            value as an example is that we can inspect what those modest
            requirements actually cost.
          </p>
        </section>
        <section>
          <p className="journal-kicker">02 / The most visible weight</p>
          <h2>The pictures need preparation.</h2>
          <p>
            The homepage illustrations alone account for about 6.7 MB of PNG
            files in the build; the hero is roughly 1.27 MB. Those are artifact
            sizes, not a measured first-page transfer. Lower images are
            lazy-loaded, but that does not make an oversized hero smaller.
          </p>
          <p>
            Image resizing and compression are the clearest improvements we see.
            Preparing appropriate dimensions and formats before publication is
            already enough for the small-site use case. An automated image
            pipeline would make that process more convenient, but we do not need
            to mistake convenience for a prerequisite.
          </p>
        </section>
      </div>
      <figure className="field-note-image">
        <img
          src={imageWeight}
          alt="A thick stack of large photographic prints beside two smaller versions and a ruler, illustrating the choice of image dimensions."
          width={1536}
          height={1024}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          Choose the size the page needs. The illustration is conceptual; it
          does not represent measured compression ratios.
        </figcaption>
      </figure>
      <div className="field-note-body">
        <section>
          <p className="journal-kicker">03 / Where simplicity surprised us</p>
          <h2>A short server is still a server.</h2>
          <p>
            sirv was convenient at the start. It kept the file-serving wrapper
            small. A closer look exposed behavior we do not want to carry
            forward unchanged, and it has become our first candidate for
            replacement.
          </p>
          <p>
            In isolated instances of the built server, two requests terminated
            the process: an invalid URL, <code>GET //[</code>, threw in our URL
            parsing; a reversed range, <code>Range: bytes=10-1</code>, threw
            inside sirv 3.0.2. The responsibility is split between our wrapper
            and its dependency. Either way, a bad request should not take the
            service down.
          </p>
          <p>
            The production file index also assumes a stable directory. That is
            reasonable for a build artifact, but surprising for the mounted{' '}
            <code>shared</code> directory: new files are not discovered
            automatically, and replaced files can retain stale size and ETag
            metadata until restart. A directory that does not exist at startup
            is not attached later.
          </p>
          <p>
            Even successful responses deserve scrutiny. A matching ETag produced
            a 304 response without ETag, Cache-Control or Vary headers because
            sirv returned before our header callback. And enabling its gzip and
            Brotli options only selects precompressed files; our build does not
            generate those files. The switches alone do not compress the
            response.
          </p>
          <aside className="field-note-margin">
            <strong>Small does not mean fully understood.</strong>
            <p>
              A dependency can remove code from our repository while leaving its
              assumptions very much inside our system.
            </p>
          </aside>
        </section>
        <section>
          <p className="journal-kicker">04 / Rules that belong to the site</p>
          <h2>Files do not all have the same lifetime.</h2>
          <p>
            Our current rule gives anything under an <code>assets</code> path a
            year of immutable caching. The same rule reaches shared files. That
            is too broad: a stable filename does not prove that its contents
            will never change.
          </p>
          <p>
            A tile-serving use case might justify a long lifetime, although a
            month or a week may be sufficient. Other sections need different
            freshness rules. Browser caching and shared-cache lifetimes also
            need not be identical. These are decisions about the resource, not a
            single switch for the whole server.
          </p>
          <p>
            We have also encountered cases where one requested filename must be
            resolved against several directories. The order of that search
            matters. So does the distinction between “not found” and “found but
            unreadable.” This points toward our own static-file middleware
            policy: where to look and how to cache the result. How much HTTP
            machinery should live beneath it remains a separate decision.
          </p>
          <p>
            The production dependency list has a similar boundary problem.
            React, React DOM, React Router and Linaria are installed alongside
            sirv, although this file-serving process needs only sirv and its
            dependencies. Their browser code is already bundled. The Vite
            configuration also imports mrmime without declaring it directly.
            These are small signs that build-time and runtime responsibilities
            need a more deliberate separation.
          </p>
        </section>
        <section>
          <p className="journal-kicker">05 / Two ways to run</p>
          <h2>The development path is a different path.</h2>
          <p>
            Development runs Vite rather than our production server. We have
            seen a failure after renaming files, but have not isolated its
            cause; attributing that incident to sirv would be wrong when sirv is
            not running. Vite or the React Router integration may be involved.
            That remains an observation to investigate, not a diagnosis.
          </p>
          <p>
            Running development through Varnish can be intentional when testing
            caching. Direct access on the development port serves a different
            purpose. During this review, production HTTP tests were aimed at the
            cached development endpoint and failed. That tells us the target was
            unsuitable for those assertions; it does not establish a
            production-server regression.
          </p>
          <p>
            An always-running application server is convenient when APIs and
            file policies need to handle requests in development too. At the
            same time, we want the possibility of publishing finished static
            files without our Node process. A shared server entry point and an
            independent static output seem compatible, but the integration has
            not been proven here. No hosting-specific deployment is being
            claimed.
          </p>
          <p>
            Other choices are still provisional. Linaria is connected, but its
            styled component is unused and cross-file selectors, dynamic values,
            hydration, HMR and lazy CSS delivery have not received focused
            verification. Automated browser coverage and a documented
            cache-refresh procedure for publication are also missing. The
            README’s broad production-readiness language runs ahead of that
            evidence.
          </p>
        </section>
        <section className="field-note-ending">
          <p className="journal-kicker">The conclusion, for this revision</p>
          <h2>Useful now. Worth revisiting.</h2>
          <p>
            We see a successful foundation for a modest content website, with a
            manageable structure and no need to add a permanent rendering
            service. Preparing the images properly would make that use case more
            convincing immediately.
          </p>
          <p>
            We also see concrete server failures, overly broad cache rules and
            unresolved boundaries between development, build and delivery. Those
            observations qualify the result; they do not erase it. The
            architecture can be a good fit while its current file-serving
            implementation needs hardening or replacement.
          </p>
          <p>
            We are keeping this conclusion attached to{' '}
            <a href={post.commitUrl}>commit {post.commit.slice(0, 7)}</a>. If
            the server, the middleware or even our opinion changes, it will be
            interesting to return here and see which assumptions survived.
          </p>
        </section>
        <footer className="field-note-footer">
          <p>
            Written from the project review and discussion at the recorded
            revision. Two AI-generated editorial illustrations; neither is
            technical evidence.
          </p>
          <Link to="/blog">← Back to the blog</Link>
        </footer>
      </div>
    </BlogStyled>
  )
}
