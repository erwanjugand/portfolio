import releases from '~/store/state/releases'

describe('Changelog page', () => {
  beforeEach(() => {
    cy.visit('/en/changelog')
  })

  it('should have a title', () => {
    cy.get('h1').should('contain', 'Changelog')
  })

  it('should contain all releases', () => {
    cy.get('.release').should('have.length', releases.length)
  })

  it('should contain filtered releases, click on a filter', () => {
    cy.wait(750).get('button.release-tag').first().click()
    cy.url().should('include', '/en/changelog?filter=')
    cy.get('.release').should('have.length.of.at.most', releases.length - 1)
  })
})
