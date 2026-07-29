import { expect, test } from '@playwright/test'

test.describe('Header', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en')
  })

  test('should switch theme, click on button', async ({ page }) => {
    const html = page.locator('html')

    await expect(html).toHaveClass(/light-mode/)

    await page.getByRole('button', { name: 'Change site theme, current theme: System mode' }).click()
    await expect(html).toHaveClass(/light-mode/)

    await page.getByRole('button', { name: 'Change site theme, current theme: Light mode' }).click()
    await expect(html).toHaveClass(/dark-mode/)

    await page.getByRole('button', { name: 'Change site theme, current theme: Dark mode' }).click()
    await expect(html).toHaveClass(/light-mode/)
  })

  test('should switch the language, click on button', async ({ page }) => {
    await page.getByRole('button', { name: 'Change site language, current language: English' }).click()
    await page.getByRole('menuitem', { name: 'Français' }).click()

    await expect(page.locator('html')).toHaveAttribute('lang', 'fr')
    await expect(page.getByRole('link', { name: 'Afficher le CV' })).toHaveAttribute('href', '/cv')
  })
})
