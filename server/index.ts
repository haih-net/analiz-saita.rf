import { createServer, type IncomingMessage, type ServerResponse } from 'node:http'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import sirv from 'sirv'

const root = fileURLToPath(new URL('../client/', import.meta.url))
const fallback = readFileSync(new URL('../client/__spa-fallback.html', import.meta.url))
const files = sirv(root, {
  etag: true, gzip: true, brotli: true,
  setHeaders(res: ServerResponse, path: string) {
    res.setHeader('X-Content-Type-Options', 'nosniff')
    res.setHeader('Cache-Control', /[/\\]assets[/\\]/.test(path) ? 'public, max-age=31536000, immutable' : 'public, max-age=0, s-maxage=60, must-revalidate')
  },
})
const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  if (!['GET', 'HEAD'].includes(req.method ?? '')) {
    res.writeHead(405, { Allow: 'GET, HEAD', 'Cache-Control': 'no-store' }); res.end(); return
  }
  files(req, res, () => {
    const path = new URL(req.url ?? '/', 'http://localhost').pathname
    const html = req.headers.accept?.includes('text/html') && !/\.[^/]+$/.test(path)
    res.writeHead(404, { 'Content-Type': html ? 'text/html; charset=utf-8' : 'text/plain; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' })
    res.end(req.method === 'HEAD' ? undefined : html ? fallback : 'Not found')
  })
})
server.listen(Number(process.env.PORT || 3000), '0.0.0.0', () => console.log('Static server ready'))
for (const signal of ['SIGTERM', 'SIGINT']) process.on(signal, () => {
  server.close(() => process.exit(0))
  setTimeout(() => process.exit(0), 5000).unref()
})
