/// <reference types="cypress" />

describe('Traditional tests V1',() => {

    beforeEach('Visiting the website', () => {
        cy.visit('https://demo.applitools.com/gridHackathonProductDetailsV1.html?id=1')
    })

    it('Size options', () => {
        cy.scrollTo('bottom')
        cy.get('ul.list').children('.option').should('be','Small (S)')
        cy.get('ul.list').children()
    })


    it('First black shoe details page', () => {
  

    })

})