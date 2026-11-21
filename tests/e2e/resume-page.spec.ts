import { expect, test } from '@playwright/test'

test.describe('Resume page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en/resume')
    await page.waitForFunction(() => window.useNuxtApp?.().isHydrating === false)
  })

  test('should have a title', async ({ page }) => {
    await expect(page).toHaveTitle('Erwan Jugand - Resume')
  })

  test('should have a pdf', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: 'Resume' })).toBeVisible()
    await expect(page.getByRole('heading', { level: 2, name: 'Erwan Jugand' })).toBeVisible()
  })

  test('should have a download button', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Download resume' })).toBeVisible()
  })
})
