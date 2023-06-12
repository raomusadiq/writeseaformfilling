describe("Proceed to checkout and form filling", function () {

    it("writeseatestdemo", () => {
        cy.visit('https://testing123.trywritesea.com/cart?addItem=6476703d905653001aec1315&redirectTo=https://testing123.trywritesea.com')
        cy.get('.overflow-hidden > :nth-child(1) > .mt-4').click()
        cy.get('#firstName').type('Alex')
        cy.get('#lastName').type('Rony')
        cy.get('#email').type('alexrony@gmail.com')
        cy.get('#password').type('Alex123')
        cy.get('.mb-2 > .form-group > .form-control').type('1213')
        cy.get('.col-sm-2 > .btn').click()
        cy.get('.__PrivateStripeElement > iframe').type('12239482394879')
        // cy.xpath('//input[@name='cardnumber']').type('12345567')
        // cy.xpath('//input[@name='exp-date']').type('2345')
        // cy.xpath('//input[@name='cvc']').type('235') 


    })

});