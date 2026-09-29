import { Link } from 'react-router'
import { posts } from './index'
import { BlogStyled } from './styles'

export default function BlogPage() {
  return (
    <BlogStyled>
      <header className="journal-intro">
        <p className="journal-kicker">Notes from the build</p>
        <h1 tabIndex={-1}>The work, as we see it.</h1>
        <p>
          Observations, doubts and conclusions from HAIH and the applications
          built from it. A record of what we think now, with a revision to
          return to later.
        </p>
      </header>
      {posts.map((post, index) => (
        <article className="journal-card" key={post.path}>
          <Link
            to={post.path}
            className="journal-cover"
            aria-label={`Read ${post.title}`}
          >
            <img
              src={post.image.src}
              srcSet={post.image.srcSet}
              sizes="(min-width: 72rem) 475px, (min-width: 48rem) calc(45vw - 43px), calc(100vw - 32px)"
              alt={post.image.alt}
              width={post.image.width}
              height={post.image.height}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </Link>
          <div className="journal-card-copy">
            <p className="journal-kicker">
              {String(index + 1).padStart(2, '0')} / Field notes ·{' '}
              <time dateTime={post.date}>{post.dateLabel}</time>
            </p>
            <h2>
              <Link to={post.path}>{post.title}</Link>
            </h2>
            <p>{post.description}</p>
            <p className="journal-revision">
              Project snapshot: {post.version} ·{' '}
              <a href={post.commitUrl}>{post.commit.slice(0, 7)}</a>
            </p>
            <Link to={post.path}>
              Read the observation <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </article>
      ))}
    </BlogStyled>
  )
}
