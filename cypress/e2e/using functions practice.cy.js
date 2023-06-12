describe("Using functions", function(){
    before(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.login('Admin', 'admin123')
    })
   
    it('', function(){
        cy.get('.oxd-input').type('Rao Musadiq')

    })
})