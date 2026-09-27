import type { Config } from '@react-router/dev/config'
export default {
  ssr: false,
  prerender: ['/', '/solutions', '/architecture'],
  routeDiscovery: { mode: 'initial' },
} satisfies Config
