describe('My First Test', () => {
  it('logges in into console using access.legalesign.io', () => {
    cy.visit('http://localhost:5173')
    // cy.get('input[placeholder="Enter your Email"]').type('email')
    // cy.get('input[placeholder="Enter your Password"]').type('passhere')
    // cy.get('button[type="submit"]').click()
    cy.url().should('eq', 'http://localhost:5173/')
  })

  // it('visits console', () => {
  //   cy.visit('https://console.legalesign.io')
  //   cy.url().should('include', '/documents')
  //   cy.should('have.h1', 'Dashboard')

  // })
})
