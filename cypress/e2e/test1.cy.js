///<reference types="cypress"/>

it('Google search', () => {

    cy.visit('https://google.com')
    cy.get ('.gLFyf').type('Musadiq Ahmad{Enter}')

    //cy.contains('Google Search').click()
})