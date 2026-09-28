import { index, route, type RouteConfig } from '@react-router/dev/routes'
export default [
  index('routes/home.tsx'),
  route('solutions', 'routes/solutions.tsx'),
  route('blog', 'routes/blog/index.tsx'),
  route('blog/a-small-site-and-the-limits-we-found', 'routes/blog/posts/post1.tsx'),
  route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig
