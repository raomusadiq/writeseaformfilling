describe("Orders Create Functionality and Visibility Testing", function () {
      it("create order", () => {
        cy.login()
        cy.get(':nth-child(11) > .has-arrow > span').click()
        cy.get(':nth-child(11) > .sub-menu > :nth-child(2) > a').click()
        // cy.wait(10000)
        cy.get(':nth-child(1) > .form-group > .css-2b097c-container > .select2-selection__control > .select2-selection__value-container').click()
        cy.xpath('(//div[@class="select2-selection__option css-yt9ioa-option"])[4]').click()
        cy.get(':nth-child(2) > .form-group > .css-2b097c-container > .select2-selection__control > .select2-selection__value-container').click()
        cy.xpath('(//div[@class="select2-selection__option select2-selection__option--is-focused css-1n7v3ny-option"])[1]').click()
        cy.get('#price').type('500')
        cy.get('.react-switch-bg').click()
        cy.get('.mt-3 > .btn').click()
        cy.get(':nth-child(11) > .sub-menu > :nth-child(1) > a').click()
        cy.get('tbody > :nth-child(1) > :nth-child(11) > :nth-child(1)').click()
        // cy.get('.justify-content-center > :nth-child(2) > .btn').click()
        //[Date change] 
        // cy.get('.react-datepicker__input-container > .w-100').clear()
        // cy.get('.react-datepicker__input-container > .w-100').type('01/25/2023')
        // cy.get('.fa-check').click()
        
        cy.get('.rdw-editor-main').type('Order is assigned to the writer')
        cy.get(':nth-child(8) > .mt-2 > .mr-1').click()
        

        cy.writerlogin()
        cy.get('#side-menu > :nth-child(2) > .waves-effect > span').click()
        cy.wait(5000)
        cy.get(':nth-child(1) > :nth-child(10) > .btn').click()
        cy.wait(3000)
        cy.get('.false > .mr-1').click()
        cy.wait(3000)
        //[Issue in using this command]
        // cy.xpath('(//div[@class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"])').type('I have got your message')
        cy.get('.false > .mr-1').click()
        cy.get('#expandInfo0').click()
        cy.get(':nth-child(1) > .mb-3 > .card-radio-label > .card-radio').click()
        cy.get('[style="margin-top: 50px;"] > a > .dropzone > .dz-message > h4').click()
        cy.get('.notranslate').type('Give me order update')
        cy.get('.col-lg-6 > .btn').click()

        // cy.get('#side-menu > :nth-child(3) > .waves-effect > span').click()
        // cy.get(':nth-child(1) > .waves-effect > span').click()
        // cy.get('#page-header-user-dropdown > .rounded-circle').click()
        // cy.get('[href="/logout"] > span').click()
        // cy.customerlogin()
        
      })
    
  });