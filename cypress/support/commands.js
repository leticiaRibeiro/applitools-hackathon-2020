// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })



// describe('Task 1 - Header location', function() {
//     it('Search field should be displayed', async () => {
//        var isDisplayed = await driver.findElement(By.id('DIV__customsear__41')).isDisplayed();
//        assert.assertTrue(hackathonReporter(1, "Search field is displayed", 'DIV__customsear__41', isDisplayed));
//     });

//     it('Search Icon should be displayed', async () => {
//         var isDisplayed = await driver.findElement(By.id('DIV__customsear__42')).isDisplayed();
//         assert.assertTrue(hackathonReporter(1, "Search Icon is displayed", 'A__btnsearchm__59', isDisplayed));
//       });
// });


const fs = require('fs');
Cypress.Commands.add("reporter", { prevSubject: 'should' }, (options, taskName, testName, comparisonResult) => { 
    const browser = Cypress.browser.name;
    const viewport = `${Cypress.config().viewportWidth} x ${Cypress.config().viewportHeight}`;
    const device = Cypress.config().viewportWidth <= 500 ? 'iphone-x' : Cypress.config().viewportWidth <= 768 ? 'tablet' : 'laptop';
    cy.writeFile(
        'Traditional-V1-TestResults.txt', 
        `Task: ${String(taskName)}, Test Name: ${String(testName)}, DOM Id: ${options.selector}, Browser: ${browser}, Viewport: ${viewport}, Device: ${device}, Status: ${(comparisonResult ? "Pass" : "Fail")}\n`,
        { flag: 'a+' });
}) 
