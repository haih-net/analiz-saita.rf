import { lazy, Suspense, useState } from 'react'
const Probe = lazy(() => import('../components/InteractionProbe'))
export const meta = () => [{ title: 'Architecture — HAIH' }, { name: 'description', content: 'Verify hydration, lazy loading, and error recovery.' }]
export default function Architecture() {
  const [visible, setVisible] = useState(false)
  return <><h1 tabIndex={-1}>Architecture</h1><p>This route is generated at build time and hydrated in the browser.</p><button onClick={() => setVisible(true)}>Load interaction probe</button>{visible && <Suspense fallback={<p role="status">Loading probe…</p>}><Probe /></Suspense>}</>
}
export function ErrorBoundary() {
  return <><h1 tabIndex={-1}>Interaction could not be rendered</h1><p>The route boundary caught the error. Navigation remains available.</p></>
}
