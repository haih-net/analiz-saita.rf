import { expect, test } from '@playwright/test'
import type { StatisticsPacket } from '../../app/components/Statistics/transport'

test('reports the actual 404 page status and clears it after SPA recovery', async ({
  page,
}) => {
  const packets: StatisticsPacket[] = []
  await page.route('**/api/', async (route) => {
    const body = route.request().postDataJSON() as {
      variables: { data: StatisticsPacket }
    }
    packets.push(body.variables.data)
    await route.fulfill({ json: { data: { logStats: [{ id: 'saved' }] } } })
  })
  const response = await page.goto('/.env.33333')
  expect(response?.status()).toBe(404)
  await expect.poll(() => packets.length).toBe(1)
  expect(packets[0].events[0]).toMatchObject({
    statusCode: 404,
    status: 'failed',
  })
  await page.evaluate(() => Reflect.set(window, '__statisticsDocument', 'same'))
  await page
    .getByRole('navigation', { name: 'Main' })
    .getByRole('link', { name: 'Home', exact: true })
    .click()
  await expect.poll(() => packets.length).toBe(2)
  expect(packets[1].events[0]).toMatchObject({
    statusCode: 200,
    status: 'success',
  })
  await page.goBack()
  await expect.poll(() => packets.length).toBe(3)
  expect(packets[2].events[0]).toMatchObject({
    statusCode: 404,
    status: 'failed',
  })
  await page.goForward()
  await expect.poll(() => packets.length).toBe(4)
  expect(packets[3].events[0]).toMatchObject({
    statusCode: 200,
    status: 'success',
  })
  expect(
    await page.evaluate(() => Reflect.get(window, '__statisticsDocument')),
  ).toBe('same')
  await page.waitForTimeout(200)
  expect(packets).toHaveLength(4)
})

test('reports a route rendering error as failed without first reporting success', async ({
  page,
}) => {
  const packets: StatisticsPacket[] = []
  await page.route('**/api/', async (route) => {
    const body = route.request().postDataJSON() as {
      variables: { data: StatisticsPacket }
    }
    packets.push(body.variables.data)
    await route.fulfill({ json: { data: { logStats: [{ id: 'saved' }] } } })
  })
  await page.route('**/assets/solutions-*.js', (route) =>
    route.fulfill({
      contentType: 'application/javascript',
      body: 'export default function BrokenPage() { throw new Error("Controlled rendering failure") }',
    }),
  )
  await page.goto('/')
  await expect.poll(() => packets.length).toBe(1)
  await page
    .getByRole('navigation', { name: 'Main' })
    .getByRole('link', { name: 'Solutions' })
    .click()
  await expect(
    page.getByRole('heading', { name: 'Something went wrong' }),
  ).toBeVisible()
  await expect.poll(() => packets.length).toBe(2)
  expect(packets[1].events[0]).toMatchObject({
    statusCode: 500,
    status: 'failed',
  })
  expect(new URL(packets[1].events[0].url).pathname).toBe('/solutions')
  await page
    .getByRole('navigation', { name: 'Main' })
    .getByRole('link', { name: 'Home', exact: true })
    .click()
  await expect.poll(() => packets.length).toBe(3)
  expect(packets[2].events[0]).toMatchObject({
    statusCode: 200,
    status: 'success',
  })
  await page.waitForTimeout(200)
  expect(packets).toHaveLength(3)
})
