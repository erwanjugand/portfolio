import { defineConfig, devices } from '@playwright/test'
import type { ConfigOptions } from '@nuxt/test-utils/playwright'

import { fileURLToPath } from 'url'

export default defineConfig<ConfigOptions>({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    nuxt: {
      build: false,
      server: false,
      rootDir: fileURLToPath(new URL('.', import.meta.url)),
      host: 'localhost:3000',
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  webServer: {
    command: process.env.CI
      ? 'pnpm wrangler dev .output/server/index.mjs --site .output/public --port 3000'
      : 'pnpm preview',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
})
