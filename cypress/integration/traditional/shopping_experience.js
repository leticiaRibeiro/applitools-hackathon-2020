/// <reference types="cypress" />

describe('Traditional tests V1',() => {

    it('Filtering for black shoes', () => {
        cy.visit('https://demo.applitools.com/gridHackathonV1.html')
        cy.get('input[id="colors__Black"]').check()
        cy.get('button[id="filterBtn"]').click()
        cy.get('#product_grid').children().should('have.length', 2)
        cy.get('#product_grid').children().should('be', 'DIV__colcolmd__210')
        cy.get('#product_grid').children().should('be', 'DIV__colcolmd__235')
    })
})