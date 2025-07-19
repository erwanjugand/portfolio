import { releases } from '~/utils/releases'

describe('Changelog page', () => {
  beforeEach(() => {
    cy.visit('/en/changelog')
  })

  it('should have a title', () => {
    cy.title().should('eq', 'Erwan Jugand - Changelog')
    cy.findByRole('heading', { level: 1 }).should('contain', 'Changelog')
  })

  it('should contain all releases', () => {
    cy.findAllByRole('article').should('have.length', releases.length).as('releases')
    cy.get('@releases').each((release, index) => {
      cy.wrap(release).findByRole('heading', { level: 2 }).should('contain.text', releases[index]?.name)
    })
  })

  it('should contain filtered releases, click on a filter', () => {
    cy.findAllByRole('article').as('releases')
    const firstTagOfLastRelease = releases[0].tags[0].name
    cy.wait(500)
      .get('@releases')
      .first()
      .findByRole('button', { name: firstTagOfLastRelease.charAt(0).toUpperCase() + firstTagOfLastRelease.slice(1) })
      .click()
    cy.url().should('include', `/en/changelog?filter=${firstTagOfLastRelease}`)
    cy.get('@releases').should('have.length.of.at.most', releases.length - 1)
  })
})
