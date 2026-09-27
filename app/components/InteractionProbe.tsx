import { useState } from 'react'
export default function InteractionProbe() {
  const [count, setCount] = useState(0)
  const [broken, setBroken] = useState(false)
  if (broken) throw new Error('Intentional architecture verification error')
  return <section aria-label="Interaction probe"><p>Lazy interaction probe loaded.</p><button onClick={() => setCount(count + 1)}>Count: {count}</button><button onClick={() => setBroken(true)}>Test error boundary</button></section>
}
