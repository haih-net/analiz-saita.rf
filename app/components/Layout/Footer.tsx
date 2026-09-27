import { Link } from 'react-router'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer__content">
        <Link className="site-brand" to="/" aria-label="HAIH home">
          HAIH
        </Link>
        <p>Requirements. Experiments. Evidence.</p>
        <a href="https://github.com/haih-net/haih.site">Explore the code</a>
      </div>
    </footer>
  )
}
