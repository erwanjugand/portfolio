describe('Legal mentions page', () => {
  beforeEach(() => {
    cy.visit('/en/legal-mentions')
  })

  it('should have a title', () => {
    cy.get('h1').should('contain', 'Legal mentions')
  })
})
