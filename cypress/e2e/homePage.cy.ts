import { environments } from '~/store/state/environments'
import { experiences } from '~/store/state/experiences'
import { informations } from '~/store/state/informations'
import { skills } from '~/store/state/skills'

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/en')
  })

  it('should have a title', () => {
    cy.title().should('eq', 'Erwan Jugand')
    cy.findByRole('heading', { level: 1 }).should('contain', 'Erwan Jugand')
  })

  it('should have a introduction section', () => {
    cy.get('section#introduction').as('section')
    cy.get('@section').findByRole('link', { name: 'Show CV' }).should('have.attr', 'href', '/en/resume')
    cy.get('@section').findByRole('button', { name: 'Scroll down' }).should('be.exist')
  })

  it('should have a about section', () => {
    cy.get('section#about').as('section')
    cy.get('@section').findByRole('heading', { level: 2, name: 'About' }).should('be.exist')
    cy.get('@section').findByRole('img', { name: 'Profile picture of Erwan Jugand' }).should('be.exist')
  })

  it('should have a skills section', () => {
    cy.get('section#skills').as('section')
    cy.get('@section').findByRole('heading', { level: 2, name: 'Skills' }).should('be.exist')
    cy.get('@section').findAllByRole('listitem').should('have.length', skills.length).as('skills')
    cy.get('@skills').each((skill, index) => {
      cy.wrap(skill).should('have.attr', 'tabindex', '0').should('have.text', skills[index]?.name)
    })
  })

  it('should have a experiences section', () => {
    cy.get('section#experiences').as('section')
    cy.get('@section').findByRole('heading', { level: 2, name: 'Experiences' }).should('be.exist')
    cy.get('@section').findAllByRole('listitem').should('have.length', experiences.length).as('experiences')
    cy.get('@experiences').each((experience, index) => {
      cy.wrap(experience).findByRole('heading', { level: 3 }).should('have.text', experiences[index]?.enterprise)
    })
  })

  it('should have a more information section', () => {
    cy.get('section#more-information').as('section')
    cy.get('@section').findByRole('heading', { level: 2, name: 'More information' }).should('be.exist')
    cy.get('@section')
      .findByRole('link', { name: 'Phone : 06 18 07 30 23' })
      .should('have.attr', 'href', informations.find(info => info.title === 'phone')?.cta)
    cy.get('@section')
      .findByRole('link', { name: 'Address : 35000 Rennes, France' })
      .should('have.attr', 'href', informations.find(info => info.title === 'address')?.cta)
    cy.get('@section')
      .findByRole('link', { name: 'Email : erwan.jugand@gmail.com' })
      .should('have.attr', 'href', informations.find(info => info.title === 'email')?.cta)
  })

  it('should have a environments section', () => {
    cy.get('section#environments').as('section')
    cy.get('@section').findByRole('heading', { level: 2, name: 'Environment' }).should('be.exist')
    cy.get('@section').findAllByRole('figure').should('have.length', environments.length).as('environments')
    cy.get('@environments').each((environment, index) => {
      cy.wrap(environment).should('have.attr', 'tabindex', '0').should('have.text', environments[index]?.title)
    })
  })
})
