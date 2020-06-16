/// <reference types="cypress" />

describe('Traditional tests V1',() => {
    
    it('Task 1 - Validate the screen components on Home page - Menu buttons',() => {
        cy.visit('https://demo.applitools.com/gridHackathonV1.html')
        cy.get('li#LI__submenu__22 a').should('contain.text', 'HOME')
        cy.get('li#LI__megamenusu__24 a').should('contain.text', 'MEN')
        cy.get('li#LI__megamenusu__26 a').should('contain.text', 'WOMEN')
        cy.get('li#LI__megamenusu__28 a').should('contain.text', 'RUNNING')
        cy.get('li#LI__megamenusu__30 a').should('contain.text', 'TRAINING')
    })

    it('Task 1 - Validate the screen components on Home page - Main header', () => {
        cy.visit('https://demo.applitools.com/gridHackathonV1.html')
        cy.get('input#INPUTtext____42').should('be.visible')
    }) 

    it('Task 1 - Validate the screen components on Home page - Side bar filter [type]', () => {
        cy.visit('https://demo.applitools.com/gridHackathonV1.html')
        cy.get('li#LI____78').should('contain.text', 'Soccer')
        cy.get('li#LI____83').should('contain.text', 'Basketball')
        cy.get('li#LI____88').should('contain.text', 'Running')
        cy.get('li#LI____93').should('contain.text', 'Training')
    })
})