describe('Resume page', () => {
  beforeEach(() => {
    cy.visit('/en/resume')
  })

  it('should have a pdf', () => {
    cy.get('.pdf').should('have.descendants', '.cv')
  })
})
