/// <reference types="cypress" />

describe('Modern tests V2 - Task 2', () => {

    it('Task 2', () => {
        cy.visit('/gridHackathonV2.html')
        cy.eyesOpen();
        cy.get('#ti-filter').click({ force: true })
        cy.get('#colors__Black').click()
        cy.get('#filterBtn').scrollIntoView().click()
        cy.eyesCheckWindow({ tag: 'Login screen', target: 'region', selector: '#product_grid' });
        cy.eyesClose();
    })

})