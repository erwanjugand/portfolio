import { expect, test } from '@playwright/test'

import { environments } from '../../app/utils/environments'
import { experiences } from '../../app/utils/experiences'
import { informations } from '../../app/utils/informations'
import { skills } from '../../app/utils/skills'

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en')
  })

  test('should have a title', async ({ page }) => {
    await expect(page).toHaveTitle('Erwan Jugand')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Erwan Jugand')
  })

  test('should have a introduction section', async ({ page }) => {
    const section = page.locator('section#introduction')

    await expect(section.getByRole('link', { name: 'Show CV' })).toHaveAttribute('href', '/en/resume')
    await expect(section.getByRole('button', { name: 'Scroll down' })).toBeVisible()
  })

  test('should have a about section', async ({ page }) => {
    const section = page.locator('section#about')

    await expect(section.getByRole('heading', { level: 2, name: 'About' })).toBeVisible()
    await expect(section.getByRole('img', { name: 'Profile picture of Erwan Jugand' })).toBeVisible()
  })

  test('should have a skills section', async ({ page }) => {
    const section = page.locator('section#skills')
    const skillItems = section.getByRole('listitem')

    await expect(section.getByRole('heading', { level: 2, name: 'Skills' })).toBeVisible()
    await expect(skillItems).toHaveCount(skills.length)

    for (const [index, skill] of skills.entries()) {
      const skillItem = skillItems.nth(index)

      await expect(skillItem).toHaveAttribute('tabindex', '0')
      await expect(skillItem).toHaveText(skill.name)
    }
  })

  test('should have a experiences section', async ({ page }) => {
    const section = page.locator('section#experiences')
    const experienceItems = section.getByRole('listitem')

    await expect(section.getByRole('heading', { level: 2, name: 'Experiences' })).toBeVisible()
    await expect(experienceItems).toHaveCount(experiences.length)

    for (const [index, experience] of experiences.entries()) {
      await expect(experienceItems.nth(index).getByRole('heading', { level: 3 })).toHaveText(experience.enterprise)
    }
  })

  test('should have a more information section', async ({ page }) => {
    const section = page.locator('section#more-information')
    const phoneCta = informations.find((information) => information.title === 'phone')?.cta ?? ''
    const addressCta = informations.find((information) => information.title === 'address')?.cta ?? ''
    const emailCta = informations.find((information) => information.title === 'email')?.cta ?? ''

    await expect(section.getByRole('heading', { level: 2, name: 'More information' })).toBeVisible()
    await expect(section.getByRole('link', { name: 'Phone : 06 18 07 30 23' })).toHaveAttribute('href', phoneCta)
    await expect(section.getByRole('link', { name: 'Address : 35000 Rennes, France' })).toHaveAttribute(
      'href',
      addressCta,
    )
    await expect(section.getByRole('link', { name: 'Email : erwan.jugand@gmail.com' })).toHaveAttribute(
      'href',
      emailCta,
    )
  })

  test('should have a environments section', async ({ page }) => {
    const section = page.locator('section#environments')
    const environmentItems = section.getByRole('figure')

    await expect(section.getByRole('heading', { level: 2, name: 'Environment' })).toBeVisible()
    await expect(environmentItems).toHaveCount(environments.length)

    for (const [index, environment] of environments.entries()) {
      const environmentItem = environmentItems.nth(index)

      await expect(environmentItem).toHaveAttribute('tabindex', '0')
      await expect(environmentItem).toHaveText(environment.title)
    }
  })
})
