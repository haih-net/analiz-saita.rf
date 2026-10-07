import type { Config } from '@react-router/dev/config'
export default {
  ssr: true,
  prerender: [
    '/contact',
    '/content',
    '/enquiries',
    '/experience',
    '/',
    '/process',
    '/speed',
    '/technical',
    '/traffic',
    '/usability',
  ],
  routeDiscovery: { mode: 'initial' },
} satisfies Config
