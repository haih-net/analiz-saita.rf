import { Link } from 'react-router'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer__content">
        <Link className="site-brand" to="/" aria-label="HAIH home">
          HAIH
        </Link>
        <p>Requirements. Experiments. Evidence.</p>
        <a target="_blank" href="https://fi1osof.ru">
          Technical architecture and development by 𝕱
        </a>
      </div>
    </footer>
  )
}
