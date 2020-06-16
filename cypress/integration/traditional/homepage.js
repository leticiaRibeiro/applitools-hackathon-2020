/// <reference types="cypress" />

describe('Traditional tests V1',() => {

    beforeEach('Visiting the website', () => {
        cy.visit('https://demo.applitools.com/gridHackathonV1.html')
    })
    
    it('Task 1 - Validate the screen components on Home page - Menu buttons',() => {
        cy.get('li#LI__submenu__22 a').should('contain.text', 'HOME')
        cy.get('li#LI__megamenusu__24 a').should('contain.text', 'MEN')
        cy.get('li#LI__megamenusu__26 a').should('contain.text', 'WOMEN')
        cy.get('li#LI__megamenusu__28 a').should('contain.text', 'RUNNING')
        cy.get('li#LI__megamenusu__30 a').should('contain.text', 'TRAINING')
    })

    it('Task 1 - Validate the screen components on Home page - Main header', () => {
        cy.get('input#INPUTtext____42').should('be.visible')
    }) 

    it('Task 1 - Validate the screen components on Home page - Side bar filter [type]', () => {
        cy.get('li#LI____78').should('contain.text', 'Soccer')
        cy.get('li#LI____83').should('contain.text', 'Basketball')
        cy.get('li#LI____88').should('contain.text', 'Running')
        cy.get('li#LI____93').should('contain.text', 'Training')
    })

    it('Task 1 - Validate the screen components on Home page - Side bar filter [colors]', () => {
        cy.get('li#LI____103').should('contain.text', 'Black')
        cy.get('li#LI____108').should('contain.text', 'White')
        cy.get('li#LI____113').should('contain.text', 'Blue')
        cy.get('li#LI____118').should('contain.text', 'Green')
        cy.get('li#LI____123').should('contain.text', 'Yellow')
    })

    it('Task 1 - Validate the screen components on Home page - Side bar filter [brands]', () => {
        cy.get('li#LI____133').should('contain.text', 'Adibas')
        cy.get('li#LI____138').should('contain.text', 'Mykey')
        cy.get('li#LI____143').should('contain.text', 'Bans')
        cy.get('li#LI____148').should('contain.text', 'Over Armour')
        cy.get('li#LI____153').should('contain.text', 'ImBalance')
    })

    it('Task 1 - Validate the screen components on Home page - Side bar filter [price]', () => {
        cy.get('li#LI____163').should('contain.text', '$0 - $50 ')
        cy.get('li#LI____168').should('contain.text', '$50 - $100 ')
        cy.get('li#LI____173').should('contain.text', '$100 - $150 ')
        cy.get('li#LI____178').should('contain.text', '$150 - $500 ')
    })

    it('Validate the product grid', () => {
        cy.get('figure#FIGURE____213').should('exist')
        cy.get('figure#FIGURE____238').should('exist')
        cy.get('figure#FIGURE____262').should('exist')
        cy.get('figure#FIGURE____284').should('exist')
        cy.get('figure#FIGURE____306').should('exist')
        cy.get('figure#FIGURE____328').should('exist')
        cy.get('figure#FIGURE____350').should('exist')
        cy.get('figure#FIGURE____373').should('exist')
        cy.get('figure#FIGURE____397').should('exist')
    })
})