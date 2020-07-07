/// <reference types="cypress" />

describe('Modern tests V2 - Task 3', () => {

    it('Task 3', () => {
        cy.visit('/gridHackathonProductDetailsV2.html?id=1')
        cy.eyesOpen();
        cy.eyesCheckWindow('Product Details test');
        cy.eyesClose();
    })

})