import { expect, test } from '@playwright/test'

test.describe('Legal mentions page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en/legal-mentions')
  })

  test('should have a title', async ({ page }) => {
    await expect(page).toHaveTitle('Erwan Jugand - Legal mentions')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Legal mentions')
  })
})
