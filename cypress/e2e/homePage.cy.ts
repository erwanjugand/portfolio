import environments from '~/store/state/environments'
import experiences from '~/store/state/experiences'
import informations from '~/store/state/informations'
import releases from '~/store/state/releases'
import skills from '~/store/state/skills'

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/en')
  })

  it('should have a title', () => {
    cy.get('h1').should('contain', 'Erwan Jugand')
  })

  it('should have skills with svg', () => {
    const lastSkill = skills[0]
    cy.get('.skill')
      .should('have.length', skills.length)
      .first()
      .should('contain', lastSkill.name)
      .and('have.descendants', 'svg')
  })

  it('should have jobs with content', () => {
    const lastJob = experiences[0].jobs[0]

    cy.get('.job')
      .first()
      .find('.job-time')
      .contains(lastJob.startedAt.getFullYear())
      .contains('today')
      .contains('months')
  })

  it('should have informations with svg and link', () => {
    cy.get('.information')
      .should('have.length', informations.length)
      .last()
      .each(() => {
        cy.get('svg').should('exist')
        cy.get('a').should('exist').and('have.attr', 'href')
      })
  })

  it('should have environments svg with figcaption', () => {
    cy.get('svg.tool-icon')
      .should('have.length', environments.length)
      .and('have.descendants', 'path')
      .siblings('figcaption')
      .should('have.length', 6)
  })

  it('should have current year for copyright', () => {
    const currentYear = new Date().getFullYear()
    cy.get('.footer-copyright').should('contain', currentYear)
  })

  it('should have last release version in footer', () => {
    const releaseName = releases[0].name
    cy.get('.footer-last-version').should('contain', releaseName).click()
    cy.url().should('include', '/en/changelog')
  })
})
