/// <reference types="cypress" />

describe('Traditional tests V1',() => {

    it('Filtering for black shoes', () => {
        cy.visit('https://demo.applitools.com/gridHackathonV1.html')
        cy.get('input[id="colors__Black"]').check()
        cy.get('button[id="filterBtn"]').click()
        cy.get('#product_grid').should('have.id', 'DIV__colcolmd__210')
    })
})