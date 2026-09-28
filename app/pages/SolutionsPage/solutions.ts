export type Solution = {
  id: string
  name: string
  status: string
  provides: string
  dependsOn: string
  children?: Solution[]
}

export type SolutionLayer = {
  id: string
  name: string
  summary: string
  solutions: Solution[]
}

export const layers: SolutionLayer[] = [
  {
    id: 'application',
    name: 'Application — what runs in the browser',
    summary:
      'The application is built from React components. Infrastructure is outside this layer.',
    solutions: [
      {
        id: 'react',
        name: 'React',
        status: 'In use',
        provides:
          'Reusable components, UI state and hydration of generated HTML.',
        dependsOn:
          'React DOM and a browser for client execution; the build also renders public pages in Node.js.',
        children: [
          {
            id: 'react-router',
            name: 'React Router',
            status: 'In use; also integrates with the build',
            provides:
              'Routes, SPA navigation, metadata integration, lazy route modules, error boundaries and build-time page rendering. Vite alone does not provide this complete integration.',
            dependsOn:
              'React; its Vite integration and Node.js during development/build. A permanent SSR process is not required by the current setup.',
          },
        ],
      },
    ],
  },
  {
    id: 'tooling',
    name: 'Development and build — Node.js runs the tools',
    summary:
      'npm run dev starts development directly. npm run build produces HTML, JavaScript, CSS and the Node.js server. Docker, Traefik and Varnish are not prerequisites.',
    solutions: [
      {
        id: 'node-tooling',
        name: 'Node.js + npm',
        status: 'Required by the current toolchain',
        provides:
          'The runtime and package workflow used to install dependencies, run development tools and build the application.',
        dependsOn:
          'The supported Node.js version, package.json and the lockfile. Our Vite toolchain runs on Node.js, not inside the browser or Docker itself.',
        children: [
          {
            id: 'vite',
            name: 'Vite',
            status: 'In use through React Router',
            provides:
              'A development server with HMR, module and asset processing, production bundles and code splitting. It covers these needs without a custom build pipeline; it is not the production HTTP server.',
            dependsOn:
              'Node.js, source modules and configuration. React Router supplies routing and prerendering; a comparison against other build tools has not been documented.',
            children: [
              {
                id: 'linaria',
                name: 'Linaria + WyW Vite plugin',
                status: 'In use; focused verification continues',
                provides:
                  'Styled-component references inside selectors while extracting CSS during the build. This styling requirement exists now, which is why Linaria was introduced now.',
                dependsOn:
                  'The Vite transform and statically extractable styles. Page and layout wrappers use Linaria styled components with CSS extracted during the build. Cross-file selectors, dynamic values, HMR, hydration and lazy CSS delivery still need focused verification; fewer dependencies alone would not make CSS Modules an equivalent substitute.',
              },
            ],
          },
          {
            id: 'typescript',
            name: 'TypeScript',
            status: 'In use',
            provides:
              'Checks component props and integration contracts; compiles the production server. Type checking is a separate command, not an automatic guarantee of Vite bundling.',
            dependsOn:
              'Node.js, type definitions and TypeScript configuration. It does not replace runtime validation.',
          },
          {
            id: 'storybook',
            name: 'Storybook',
            status: 'Optional; configured',
            provides:
              'An isolated environment for inspecting component states without navigating full pages.',
            dependsOn:
              'React/Vite integration and component stories. Scripts and configuration exist; the story catalog remains to be populated.',
          },
          {
            id: 'checks',
            name: 'ESLint, Prettier and Node.js HTTP tests',
            status: 'In use',
            provides:
              'Code checks, consistent formatting and HTTP contract checks alongside type checking and builds.',
            dependsOn:
              'Project configuration and a running target for HTTP tests. Varnish assertions require the cache path; repeatable browser automation remains to be added.',
          },
        ],
      },
    ],
  },
  {
    id: 'production',
    name: 'Production — serve the finished build',
    summary:
      'Minimal current path: npm run build → npm run start → Node.js + sirv. The browser receives build artifacts. No Docker, reverse proxy or cache is required for this direct path.',
    solutions: [
      {
        id: 'node-production',
        name: 'Node.js HTTP process',
        status: 'In use',
        provides:
          'Runs the production service with npm run start. No Vite development server or request-time React renderer is needed.',
        dependsOn:
          'A completed build, Node.js, production dependencies and a reachable port.',
        children: [
          {
            id: 'sirv',
            name: 'sirv + a small HTTP policy wrapper',
            status: 'In use',
            provides:
              'Serves generated pages and assets, with cache headers, GET/HEAD support and intentional 404 responses. A general backend framework is unnecessary for these file-serving requirements.',
            dependsOn:
              'The Node.js HTTP server, built files and routing/error policies. HTML uses a 60-second shared-cache lifetime; hashed assets can be cached immutably.',
          },
        ],
      },
      {
        id: 'process-supervision',
        name: 'Process supervision — for example PM2',
        status: 'Optional alternative; not configured',
        provides:
          'A possible way to supervise the Node.js service instead of running it as a foreground npm process.',
        dependsOn:
          'A supervisor installation and deployment-specific startup/restart configuration. PM2 is an example, not an adopted or verified project dependency; containers are another deployment choice.',
      },
    ],
  },
  {
    id: 'infrastructure',
    name: 'Optional deployment environment — around the application',
    summary:
      'These are independent operational choices, not application prerequisites. The configured production path is Traefik → Varnish → Node.js + sirv. Compose groups services; it is not another hop in that request path.',
    solutions: [
      {
        id: 'docker',
        name: 'Docker',
        status: 'Optional; configured',
        provides:
          'Packages the service environment into container images for repeatable execution.',
        dependsOn:
          'A Docker runtime, images, storage and networking. Native Node.js execution remains possible.',
        children: [
          {
            id: 'compose',
            name: 'Docker Compose',
            status: 'Optional; configured',
            provides:
              'Describes and starts the app, cache and proxy services together, with environment-specific configuration.',
            dependsOn:
              'Docker and Compose, images, environment variables, networks and ports. It organizes peer services rather than placing the proxy or cache inside the app process.',
            children: [
              {
                id: 'app-container',
                name: 'App service container',
                status: 'Configured',
                provides:
                  'A container boundary around the Node.js process. Development runs the Vite toolchain; production runs the built sirv service.',
                dependsOn:
                  'The Dockerfile and selected environment configuration. Development mounts source files; production uses the built artifact and server dependencies.',
              },
              {
                id: 'cache-container',
                name: 'Cache service container',
                status: 'Configured for production',
                provides:
                  'Runs Varnish as a separate service in front of the origin.',
                dependsOn:
                  'The Varnish configuration described below and a reachable app service.',
              },
              {
                id: 'proxy-container',
                name: 'Proxy service container',
                status: 'Configured',
                provides: 'Runs Traefik as a separate entry-point service.',
                dependsOn:
                  'The Traefik configuration described below and reachable upstream services.',
              },
            ],
          },
        ],
      },
      {
        id: 'traefik',
        name: 'Traefik',
        status: 'Optional; configured',
        provides:
          'A shared entry point and routing to the app or cache. It is useful when deployment needs proxy routing or TLS termination rather than direct access to a Node.js port.',
        dependsOn:
          'Routing, network and upstream configuration; TLS additionally needs domains and certificates. It does not inherently require Docker or Varnish. Our optional development environment uses it in front of Vite; direct npm run dev does not need it.',
      },
      {
        id: 'varnish',
        name: 'Varnish',
        status: 'Optional; configured for production',
        provides:
          'Caches eligible public responses to avoid repeated origin requests. This is an additional delivery capability, not a requirement for React, Vite or Node.js.',
        dependsOn:
          'An HTTP origin, cacheability headers and VCL rules. The current rules bypass requests with cookies or authorization. It is bypassed in normal development; publication freshness and invalidation procedures still need documentation.',
      },
    ],
  },
  {
    id: 'observation',
    name: 'Optional observation — evidence about the running system',
    summary:
      'Usage analytics and cache measurements answer different questions. Neither is necessary to build or serve the application.',
    solutions: [
      {
        id: 'betterlytics',
        name: 'Betterlytics',
        status: 'Optional integration',
        provides: 'A configured script hook for website usage analytics.',
        dependsOn:
          'A site ID, external service and collection policy. The hook does not prove collection is working and does not measure Varnish origin traffic.',
      },
      {
        id: 'request-metrics',
        name: 'Request/cache measurement solution',
        status: 'Implementation open',
        provides:
          'Would show cache hits and origin requests using measured data instead of the homepage illustrations.',
        dependsOn:
          'An agreed metric, collection source and observation window. No measurement technology has been selected.',
      },
    ],
  },
  {
    id: 'future',
    name: 'Future branches — technology choices still open',
    summary:
      'These remain requirement areas until a concrete solution is selected. They do not form a mandatory sequence of additions.',
    solutions: [
      {
        id: 'api',
        name: 'Standalone API',
        status: 'Open',
        provides:
          'Server operations or integrations beyond static delivery and browser-only interactions.',
        dependsOn:
          'An actual operation, an API contract, validation and a service runtime. No backend framework has been selected.',
      },
      {
        id: 'storage',
        name: 'Persistent storage',
        status: 'Open',
        provides: 'Durable shared data where needed.',
        dependsOn:
          'A data model, access boundaries, backups and migrations. No database has been selected; an API does not automatically require a database.',
      },
      {
        id: 'typed-contracts',
        name: 'Typed API/data contracts',
        status: 'Open',
        provides:
          'Consistent contracts across a growing application, beyond current component type checks.',
        dependsOn:
          'Actual API/data boundaries, runtime validation and a shared or generated contract approach.',
      },
      {
        id: 'authorization',
        name: 'Identity and authorization',
        status: 'Open',
        provides: 'Private data and actions restricted to appropriate users.',
        dependsOn:
          'Identity/session requirements, server-side permission rules and security verification. No provider has been selected.',
      },
      {
        id: 'commerce',
        name: 'Payments and transactions',
        status: 'Open',
        provides:
          'Transactional workflows when a real product requirement calls for them.',
        dependsOn:
          'A business flow, provider, trusted processing, durable state and recovery. No payment technology has been selected.',
      },
      {
        id: 'composition',
        name: 'Formal solution composition',
        status: 'Open',
        provides:
          'Could check solution compatibility and dependency obligations automatically.',
        dependsOn:
          'A useful schema and enough complexity to justify maintenance. This list does not require a runtime framework or graph database.',
      },
    ],
  },
]
