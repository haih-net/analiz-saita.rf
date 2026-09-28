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
          Observations, doubts and conclusions from making this website. A
          record of what we think now, with a revision to return to later.
        </p>
      </header>
      {posts.map((post) => (
        <article className="journal-card" key={post.path}>
          <p className="journal-kicker">
            01 / Field notes ·{' '}
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
        </article>
      ))}
    </BlogStyled>
  )
}
