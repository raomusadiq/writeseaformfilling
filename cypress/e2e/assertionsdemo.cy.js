
  it('Assertions Demo', () => {

    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn')
        .and('contain', 'Button')
        .and('have.class', 'query-btn')
        .and('be.visible')
        .and('be.enabled')
    expect(true).to.be.true

    
    assert.equal(4, 4, 'I love you')
    assert.equal(4, '4', 'I love you')
    assert.strictEqual(4, '4', 'I love you')

  })