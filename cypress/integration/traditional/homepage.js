/// <reference types="cypress" />

describe('Traditional tests V1',() => {
    
    it('Task 1 - Validate the screen components on Home page',() => {
        cy.visit('https://demo.applitools.com/gridHackathonV1.html')
        cy.get('li#LI__submenu__22 a').should('contain.text', 'HOME')
        // cy.get('#A__showsubmen__23').should('contain.text', 'HOME')
        // cy.get('#A__showsubmen__25').should('contain.text', 'MEN')
        // cy.get('#A__showsubmen__27').should('contain.text', 'WOMEN')
        // cy.get('#A__showsubmen__23').should('contain.text', 'HOME')
        // cy.get('#A__showsubmen__23').should('contain.text', 'HOME')


    })
})