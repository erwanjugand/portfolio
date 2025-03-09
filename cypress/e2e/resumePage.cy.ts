describe('Resume page', () => {
  beforeEach(() => {
    cy.visit('/en/resume')
  })

  it('should have a title', () => {
    cy.title().should('eq', 'Erwan Jugand - Resume')
  })

  it('should have a pdf', () => {
    cy.findByRole('heading', { level: 1, name: 'Erwan Jugand' }).should('be.exist')
  })

  it('should have a download button', () => {
    cy.findByRole('button', { name: 'Download CV' }).should('be.exist')
  })
})
