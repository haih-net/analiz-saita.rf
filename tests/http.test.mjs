import test from 'node:test'
import assert from 'node:assert/strict'

const base = process.env.TEST_URL || 'http://localhost:8088'
test('prerendered routes expose content and metadata', async () => {
  for (const [path, title] of [
    ['/', 'HAIH — architecture foundation'],
    ['/solutions', 'Solutions — HAIH'],
    ['/architecture', 'Architecture — HAIH'],
  ]) {
    const response = await fetch(base + path)
    assert.equal(response.status, 200)
    const html = await response.text()
    assert.ok(html.includes(`<title>${title}</title>`))
    assert.match(html, /<h1/)
    assert.match(response.headers.get('cache-control'), /s-maxage=60/)
  }
})
test('missing paths and assets preserve 404; methods are restricted', async () => {
  const document = await fetch(base + '/missing-page', {
    headers: { Accept: 'text/html' },
  })
  assert.equal(document.status, 404)
  assert.match(document.headers.get('content-type'), /text\/html/)
  const asset = await fetch(base + '/assets/missing.js')
  assert.equal(asset.status, 404)
  assert.equal(await asset.text(), 'Not found')
  assert.equal((await fetch(base + '/', { method: 'POST' })).status, 405)
  const head = await fetch(base + '/solutions', { method: 'HEAD' })
  assert.equal(head.status, 200)
  assert.equal(await head.text(), '')
})
test('Varnish caches public responses and hashed assets are immutable', async () => {
  await fetch(base + '/solutions')
  const cached = await fetch(base + '/solutions')
  assert.equal(cached.headers.get('x-cache'), 'HIT')
  const html = await (await fetch(base + '/')).text()
  const asset = html.match(/\/assets\/[^"\s]+\.js/)[0]
  const response = await fetch(base + asset)
  assert.equal(response.status, 200)
  assert.match(response.headers.get('cache-control'), /immutable/)
})
