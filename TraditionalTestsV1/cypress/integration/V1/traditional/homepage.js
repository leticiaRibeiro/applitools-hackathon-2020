/// <reference types="cypress" />
​
const taskName = 'Task 1'
​
describe('Traditional tests V1 - Task 1',() => {
    beforeEach('Visiting the website', () => {
        cy.visit('/gridHackathonV1.html')
    })
​
    it('Side bar filter [type]', () => {
        const testName = 'Side bar filter [type]'
        cy.get('li#LI____78').should('contain.text', 'Soccer').reporter(taskName, testName, true)
        cy.get('li#LI____83').should('contain.text', 'Basketball').reporter(taskName, testName, true)
        cy.get('li#LI____88').should('contain.text', 'Running').reporter(taskName, testName, true)
        cy.get('li#LI____93').should('contain.text', 'Training').reporter(taskName, testName, true)
    })
    it('Side bar filter [colors]', () => {
        const testName = 'Side bar filter [colors]'
        cy.get('li#LI____103').should('contain.text', 'Black').reporter(taskName, testName, true)
        cy.get('li#LI____108').should('contain.text', 'White').reporter(taskName, testName, true)
        cy.get('li#LI____113').should('contain.text', 'Blue').reporter(taskName, testName, true)
        cy.get('li#LI____118').should('contain.text', 'Green').reporter(taskName, testName, true)
        cy.get('li#LI____123').should('contain.text', 'Yellow').reporter(taskName, testName, true)
    })
    it('Side bar filter [brands]', () => {
        const testName = 'Side bar filter [brands]'
        cy.get('li#LI____133').should('contain.text', 'Adibas').reporter(taskName, testName, true)
        cy.get('li#LI____138').should('contain.text', 'Mykey').reporter(taskName, testName, true)
        cy.get('li#LI____143').should('contain.text', 'Bans').reporter(taskName, testName, true)
        cy.get('li#LI____148').should('contain.text', 'Over Armour').reporter(taskName, testName, true)
        cy.get('li#LI____153').should('contain.text', 'ImBalance').reporter(taskName, testName, true)
    })
    it('Side bar filter [price]', () => {
        const testName = 'Side bar filter [price]'
        cy.get('li#LI____163').should('contain.text', '$0 - $50 ').reporter(taskName, testName, true)
        cy.get('li#LI____168').should('contain.text', '$50 - $100 ').reporter(taskName, testName, true)
        cy.get('li#LI____173').should('contain.text', '$100 - $150 ').reporter(taskName, testName, true)
        cy.get('li#LI____178').should('contain.text', '$150 - $500 ').reporter(taskName, testName, true)
    })
    it('Product grid', () => {
        const testName = 'Product grid'
        cy.get('figure#FIGURE____213').should('exist').reporter(taskName, testName, true)
        cy.get('figure#FIGURE____238').should('exist').reporter(taskName, testName, true)
        cy.get('figure#FIGURE____262').should('exist').reporter(taskName, testName, true)
        cy.get('figure#FIGURE____284').should('exist').reporter(taskName, testName, true)
        cy.get('figure#FIGURE____306').should('exist').reporter(taskName, testName, true)
        cy.get('figure#FIGURE____328').should('exist').reporter(taskName, testName, true)
        cy.get('figure#FIGURE____350').should('exist').reporter(taskName, testName, true)
        cy.get('figure#FIGURE____373').should('exist').reporter(taskName, testName, true)
        cy.get('figure#FIGURE____397').should('exist').reporter(taskName, testName, true)
    })
})