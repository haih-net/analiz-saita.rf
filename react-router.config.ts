import type { Config } from '@react-router/dev/config'
export default {
  ssr: true,
  prerender: [
    '/',
    '/solutions',
    '/blog',
    '/blog/a-small-site-and-the-limits-we-found',
  ],
  routeDiscovery: { mode: 'initial' },
} satisfies Config
