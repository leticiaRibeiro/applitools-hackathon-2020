/// <reference types="cypress" />

const taskName = 'Task 3'

describe('Traditional tests V2 - Task 3',() => {

    beforeEach('Visiting the website', () => {
        cy.visit('/gridHackathonProductDetailsV2.html?id=1')
    })

    it('Shoe title and picture', () => {
        const testName = 'Shoe title and picture'
        cy.get('#shoe_name').should('have.text', 'Appli Air x Night').reporter(taskName, testName, true)
        cy.get('#shoe_img').should('be.visible').reporter(taskName, testName, true)
    })

    it('Review', () => {
        const testName = 'Review'
        cy.get('.rating').children('.icon-star').should('have.length', 5).reporter(taskName, testName, true)
        cy.get('.rating').children('.icon-star.voted').should('have.length', 4).reporter(taskName, testName, true)
        cy.get('.rating').children('em').should('have.text', '4 reviews').reporter(taskName, testName, true)
    })

    it('Shoe description', () => {
        const testName = 'Shoe description'
        cy.get('#P____83').children('small').should('have.text', 'SKU: MTKRY-001').reporter(taskName, testName, true)
        cy.get('#P____83').should('contain.text', 'These boots are comfortable enough to wear all day.').reporter(taskName, testName, true)
    })

    it('Size options', () => {
        const testName = 'Size option'
        cy.get('ul.list').children('.option.selected').should('have.text','Small (S)')
            .next().should('have.text','M')
            .next().should('have.text','L')
            .next().should('have.text','XL')
            .reporter(taskName, testName, true)
    })

    it('Quantity', () => {
        const testName = 'Quantity'
        cy.get('.numbers-row').children('input').should('have.attr', 'value', '1').reporter(taskName, testName, true)
    })

    it('Price', () => {
        const testName = 'Price'
        cy.get('#new_price').should('have.text', '$33.00').reporter(taskName, testName, true)
        cy.get('#old_price').should('have.text', '$48.00').reporter(taskName, testName, true)
        cy.get('#discount').should('have.text', '-30% discount').reporter(taskName, testName, true)
    })

    it('Add to Cart', () => {
        const testName = 'Add to cart'
        cy.get('.btn_add_to_cart').children('a').should('have.text', 'Add to Cart').reporter(taskName, testName, true)
    })

})