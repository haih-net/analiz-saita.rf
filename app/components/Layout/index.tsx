import { useEffect, useRef, type ReactNode } from 'react'
import { useLocation, useNavigationType } from 'react-router'
import { Header } from './Header'
import { Footer } from './Footer'
import { LayoutStyled } from './styles'

export function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const action = useNavigationType()
  const previous = useRef(pathname)

  useEffect(() => {
    if (previous.current !== pathname && action !== 'POP') {
      document
        .querySelector<HTMLElement>('#main-content h1')
        ?.focus({ preventScroll: true })
    }
    previous.current = pathname
  }, [pathname, action])

  return (
    <LayoutStyled>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main
        id="main-content"
        className="site-container site-main"
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer />
    </LayoutStyled>
  )
}
