describe('Legal mentions page', () => {
  beforeEach(() => {
    cy.visit('/en/legal-mentions')
  })

  it('should have a title', () => {
    cy.title().should('eq', 'Erwan Jugand - Legal mentions')
    cy.findByRole('heading', { level: 1 }).should('contain', 'Legal mentions')
  })
})
