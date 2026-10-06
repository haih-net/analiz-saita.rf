// @ts-check
/** @type {import("vitest/config").UserConfig} */
module.exports = {
  test: {
    environment: 'node',
    include: [
      'tests/unit/**/*.test.{ts,tsx,mjs}',
      'app/**/*.test.{ts,tsx}',
      'server/**/*.test.ts',
    ],
    testTimeout: 5000,
    hookTimeout: 5000,
    restoreMocks: true,
    coverage: {
      provider: 'v8',
      include: ['app/components/seo/**/*.ts', 'server/**/*.ts'],
      exclude: ['**/types.ts'],
      reporter: ['text', 'html', 'lcov'],
    },
  },
}
