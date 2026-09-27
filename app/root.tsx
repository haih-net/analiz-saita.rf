import { useEffect, useRef, type ReactNode } from 'react'
import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useNavigationType,
  isRouteErrorResponse,
  useRouteError,
} from 'react-router'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
export default function App() {
  const { pathname } = useLocation()
  const action = useNavigationType()
  const previous = useRef(pathname)
  useEffect(() => {
    if (previous.current !== pathname && action !== 'POP') {
      document
        .querySelector<HTMLElement>('main h1')
        ?.focus({ preventScroll: true })
    }
    previous.current = pathname
  }, [pathname, action])
  return (
    <>
      <header>
        <nav aria-label="Main">
          <NavLink to="/" end>
            Home
          </NavLink>
          {' | '}
          <NavLink to="/solutions">Solutions</NavLink>
          {' | '}
          <NavLink to="/architecture">Architecture</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
export function ErrorBoundary() {
  const error = useRouteError()
  return (
    <main>
      <h1 tabIndex={-1}>
        {isRouteErrorResponse(error)
          ? `${error.status} ${error.statusText}`
          : 'Something went wrong'}
      </h1>
      <p>Please reload the page to retry.</p>
      <a href="/">Return home</a>
    </main>
  )
}
