import type { Config } from '@react-router/dev/config'
export default {
  ssr: true,
  prerender: [
    '/',
    '/solutions',
    '/blog',
    '/blog/the-tests-passed-which-tests',
    '/blog/eighteen-hours-a-real-portal-in-production',
    '/blog/a-small-site-and-the-limits-we-found',
    '/blog/one-server-two-modes-and-an-api',
  ],
  routeDiscovery: { mode: 'initial' },
} satisfies Config
