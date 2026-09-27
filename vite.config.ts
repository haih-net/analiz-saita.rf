import { defineConfig, loadEnv } from 'vite'
import { reactRouter } from '@react-router/dev/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [reactRouter()],
    server: { port: 3000, strictPort: true, allowedHosts: ['haih.localhost'] },
    define: {
      'import.meta.env.BETTERLYTICS_SITE_ID': JSON.stringify(
        env.BETTERLYTICS_SITE_ID || '',
      ),
    },
  }
})
