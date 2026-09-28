import type { Config } from '@react-router/dev/config'
export default {
  ssr: true,
  prerender: [
    '/',
    '/solutions',
    '/blog',
    '/blog/a-small-site-and-the-limits-we-found',
    '/blog/one-server-two-modes-and-an-api',
  ],
  routeDiscovery: { mode: 'initial' },
} satisfies Config
