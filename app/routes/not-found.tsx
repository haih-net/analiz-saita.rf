export const meta = () => [
  { title: 'Page not found — HAIH' },
  { name: 'robots', content: 'noindex' },
]
export default function NotFound() {
  return (
    <>
      <h1 tabIndex={-1}>Page not found</h1>
      <p>This URL does not exist.</p>
    </>
  )
}
