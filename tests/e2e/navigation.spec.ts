import { expect, test } from '@playwright/test'
const paths: string[] = [
  '/',
  '/traffic',
  '/enquiries',
  '/speed',
  '/usability',
  '/technical',
  '/content',
  '/process',
  '/experience',
  '/contact',
]
const origin: string = 'https://xn----7sbaba3bglns3co.xn--p1ai'

test('landing pages retain content, metadata, direct access and responsive layout', async ({
  page,
}) => {
  for (const path of paths) {
    expect((await page.goto(path))?.status()).toBe(200)
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      origin + path,
    )
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true)
  }
})

test('SPA navigation, history and refresh work for the traffic page', async ({
  page,
}) => {
  await page.goto('/')
  await page.evaluate(() =>
    Reflect.set(window, '__navigationTest', 'same-document'),
  )
  await page.locator('a[href="/traffic"]:visible').first().click()
  await expect(page).toHaveTitle('Трафик сайта — Николай Ланец')
  await page.goBack()
  await expect(page).toHaveURL(/\/$/)
  await page.goForward()
  await expect(page).toHaveURL(/\/traffic$/)
  expect(
    await page.evaluate(() => Reflect.get(window, '__navigationTest')),
  ).toBe('same-document')
  expect((await page.reload())?.status()).toBe(200)
})

test('unknown addresses and template demonstration pages remain 404', async ({
  page,
  request,
}) => {
  for (const path of [
    '/.env.33333',
    '/solutions',
    '/blog',
    '/assets/missing.js',
  ]) {
    expect((await request.get(path)).status()).toBe(404)
  }
  expect((await page.goto('/.env.33333'))?.status()).toBe(404)
  await expect(
    page.getByRole('heading', { name: 'Страница не найдена' }),
  ).toBeVisible()
  await expect(page.locator('link[rel="canonical"]')).toHaveCount(0)
})
