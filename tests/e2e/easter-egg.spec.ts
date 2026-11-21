import { expect, test } from '@playwright/test'

test.describe('Easter egg', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en')
    await page.waitForFunction(() => window.useNuxtApp?.().isHydrating === false)
    await page.clock.install()
    await page.getByRole('button', { name: '?????' }).click()
  })

  test('should keep the theme, given a cancelled run', async ({ page }) => {
    await page.getByRole('button', { name: 'Cancel' }).click()
    await page.clock.runFor(10_000)

    await expect(page.getByRole('dialog', { name: 'mlp.exe' })).toBeHidden()
    await expect(page.locator('html')).not.toHaveClass(/hacked-mode/)
  })

  test('should switch to the hacked theme, given a completed run', async ({ page }) => {
    await expect(page.getByRole('dialog', { name: 'mlp.exe' })).toBeVisible()
    await page.clock.runFor(10_000)

    await expect(page.getByRole('dialog', { name: 'mlp.exe' })).toBeHidden()
    await expect(page.locator('html')).toHaveClass(/hacked-mode/)
  })
})
