/// <reference types="cypress" />

describe('Modern tests V2 - Task 1', () => {
    
    it('Task 1',() => {
        cy.visit('/gridHackathonV2.html')
        cy.viewport(800, 600)
        cy.eyesOpen();
        cy.eyesCheckWindow('Cross-Device Elements Test');
        cy.eyesClose();
    })

})