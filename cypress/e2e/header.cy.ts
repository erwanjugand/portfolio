describe('Header', () => {
  beforeEach(() => {
    cy.visit('/en')
  })

  it('should switch theme, click on button', () => {
    cy.get('html').should('have.class', 'light-mode')
    cy.findByRole('button', { name: 'Change site theme, current theme: System mode' }).click()
    cy.get('html').should('have.class', 'light-mode')
    cy.findByRole('button', { name: 'Change site theme, current theme: Light mode' }).click()
    cy.get('html').should('have.class', 'dark-mode')
    cy.findByRole('button', { name: 'Change site theme, current theme: Dark mode' }).click()
    cy.get('html').should('have.class', 'light-mode')
  })

  it('should switch the language, click on button', () => {
    cy.wait(500).findByRole('button', { name: 'Change site language, current language: English' }).click()
    cy.findByRole('menuitem', { name: 'Français' }).click()
    cy.get('html').should('have.attr', 'lang', 'fr')
    cy.findByRole('link', { name: 'Afficher le CV' }).should('have.attr', 'href', '/cv')
  })
})
