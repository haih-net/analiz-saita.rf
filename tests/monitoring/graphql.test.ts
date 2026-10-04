import assert from 'node:assert/strict'
import { once } from 'node:events'
import { createServer, type Server } from 'node:http'
import test from 'node:test'
import express, { type Express } from 'express'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@as-integrations/express5'
import {
  graphqlObservability,
  startMetricsServer,
} from '../../server/observability'
import type { Context } from '../../server/schema/builder'

test('GraphQL execution errors with HTTP 200 are recorded as server failures', async () => {
  process.env.METRICS_PORT = '0'
  process.env.METRICS_HOST = '127.0.0.1'
  const metrics: Server | null = startMetricsServer()
  assert.ok(metrics)
  await once(metrics, 'listening')
  const api: ApolloServer<Context> = new ApolloServer<Context>({
    typeDefs: 'type Query { fail: String }',
    resolvers: {
      Query: {
        fail: (): never => {
          throw new Error('Fixture failure')
        },
      },
    },
    plugins: [graphqlObservability],
  })
  await api.start()
  const app: Express = express()
  app.use('/api', express.json(), expressMiddleware(api))
  const server: Server = createServer(app)
  server.listen(0, '127.0.0.1')
  await once(server, 'listening')
  try {
    const address = server.address()
    const metricsAddress = metrics.address()
    assert.ok(address && typeof address === 'object')
    assert.ok(metricsAddress && typeof metricsAddress === 'object')
    const response: Response = await fetch(
      `http://127.0.0.1:${address.port}/api`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: '{ fail }' }),
      },
    )
    assert.equal(response.status, 200)
    assert.match(await response.text(), /Fixture failure/)
    const text: string = await (
      await fetch(`http://127.0.0.1:${metricsAddress.port}/metrics`)
    ).text()
    assert.match(text, /haih_graphql_errors_total\{kind="server"\} 1/)
  } finally {
    await api.stop()
    await Promise.all([
      new Promise<void>((resolve) => server.close(() => resolve())),
      new Promise<void>((resolve) => metrics.close(() => resolve())),
    ])
    delete process.env.METRICS_PORT
    delete process.env.METRICS_HOST
  }
})
