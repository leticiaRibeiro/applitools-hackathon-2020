/// <reference types="cypress" />

const taskName = 'Task 2'

describe('Traditional tests V2 - Task 2',() => {

    it('Filtering for black shoes', () => {
        const testName = 'Filtering for black shoes'
        cy.visit('/gridHackathonV2.html')
        cy.get('#ti-filter').click({ force: true })
        cy.get('#colors__Black').click()
        cy.get('#filterBtn').scrollIntoView().click()
        cy.get('#product_grid').children().should('have.length', 2).reporter(taskName, testName, true)
        cy.get('#product_grid').children().should('be', 'DIV__colcolmd__210').reporter(taskName, testName, true)
        cy.get('#product_grid').children().should('be', 'DIV__colcolmd__235').reporter(taskName, testName, true)
    })
})