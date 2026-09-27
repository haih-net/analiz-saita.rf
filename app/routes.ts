import { index, route, type RouteConfig } from '@react-router/dev/routes'
export default [
  index('routes/home.tsx'),
  route('solutions', 'routes/solutions.tsx'),
  route('architecture', 'routes/architecture.tsx'),
  route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig
