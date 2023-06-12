

before(function(){
    cy.fixture('example.json').as('test_data')
}) 

it('Read files using fixture', function(){
    cy.fixture('example').then((data) => {
        cy.log (data.name)
        cy.log (data.email)
    })

    cy.log (this.test_data.name)

})

it('Read file using readFile()', function(){
    cy.readFile('./cypress/fixtures/example.json').then ((data) =>{
        cy.log(data.name)
    })
})

it('Write file demo', function(){

    cy.writeFile('sample.txt', 'Rao Musadiq is here\n')
    cy.writeFile('sample.txt', 'I am learning Cypress', {flag:'a+'})

})