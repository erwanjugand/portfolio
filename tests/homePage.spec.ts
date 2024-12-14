import { expect, test } from '@playwright/test'
import { environments } from '~/store/state/environments'
import { experiences } from '~/store/state/experiences'
import { skills } from '~/store/state/skills'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('Home page', () => {
  test('should have a title', async ({ page }) => {
    const title = await page.title()
    expect(title).toContain('Erwan Jugand')

    const titleElement = page.getByRole('heading', { level: 1 })
    expect(titleElement).toHaveText('Erwan Jugand')
  })

  test('should have a introduction section', async ({ page }) => {
    const sectionElement = page.locator('section#introduction')

    const linkElement = sectionElement.getByRole('link', { name: 'Afficher le CV' })
    expect(linkElement).toHaveAttribute('href', '/cv')

    const buttonElement = sectionElement.getByRole('button', { name: 'Défiler en bas' })
    expect(buttonElement).toBeVisible()
  })

  test('should have a about section', async ({ page }) => {
    const sectionElement = page.locator('section#about')

    const titleElement = sectionElement.getByRole('heading', { level: 2, name: 'À propos' })
    expect(titleElement).toBeVisible()

    const imageElement = sectionElement.getByRole('img', { name: 'Photo de profil de Erwan Jugand' })
    expect(imageElement).toBeVisible()
  })

  test('should have a skills section', async ({ page }) => {
    const sectionElement = page.locator('section#skills')

    const titleElement = sectionElement.getByRole('heading', { level: 2, name: 'Mes compétences' })
    expect(titleElement).toBeVisible()

    const skillElements = await sectionElement.getByRole('listitem').all()
    expect(skillElements).toHaveLength(skills.length)

    skillElements.forEach((skillElement, index) => {
      expect(skillElement).toHaveAttribute('tabindex', '0')
      expect(skillElement).toHaveText(skills[index]?.name ?? '')
    })
  })

  test('should have a experiences section', async ({ page }) => {
    const sectionElement = page.locator('section#experiences')

    const titleElement = sectionElement.getByRole('heading', { level: 2, name: 'Mes expériences' })
    expect(titleElement).toBeVisible()

    const experienceElements = await sectionElement.getByRole('listitem').all()
    expect(experienceElements).toHaveLength(experiences.length)

    experienceElements.forEach((experienceElement, index) => {
      const titleElement = experienceElement.getByRole('heading', { level: 3 })
      expect(titleElement).toHaveText(experiences[index]?.enterprise ?? '')
    })
  })

  test('should have a more information section', async ({ page }) => {
    const sectionElement = page.locator('section#more-information')

    const titleElement = sectionElement.getByRole('heading', { level: 2, name: "Plus d'informations" })
    expect(titleElement).toBeVisible()

    const phoneLinkElement = sectionElement.getByRole('link', { name: 'Téléphone : 06 18 07 30 23' })
    expect(phoneLinkElement).toHaveAttribute('href', 'tel:0618073023')

    const addressLinkElement = sectionElement.getByRole('link', { name: 'Adresse : 35000 Rennes, France' })
    expect(addressLinkElement).toHaveAttribute('href', 'https://goo.gl/maps/x2VLbukCJ4L2')

    const emailLinkElement = sectionElement.getByRole('link', { name: 'Email : erwan.jugand@gmail.com' })
    expect(emailLinkElement).toHaveAttribute('href', 'mailto:erwan.jugand+portfolio@gmail.com')
  })

  test('should have a environments section', async ({ page }) => {
    const sectionElement = page.locator('section#environments')

    const titleElement = sectionElement.getByRole('heading', { level: 2, name: 'Mon environnement' })
    expect(titleElement).toBeVisible()

    const figureElements = await sectionElement.getByRole('figure').all()
    expect(figureElements).toHaveLength(environments.length)

    figureElements.forEach((figureElement, index) => {
      expect(figureElement).toHaveAttribute('tabindex', '0')
      expect(figureElement).toHaveText(environments[index]?.title ?? '')
    })
  })
})
