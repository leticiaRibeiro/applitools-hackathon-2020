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

const fs = require('fs');

const browser = "Firefox";
const viewport = "1200x700";
const device = "Laptop";



function hackathonReporter(task, testName, domId, comparisonResult) {
    fs.appendFileSync('Traditional-V1-TestResults.txt', `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${browser}, Viewport: ${viewport}, Device: ${device}, Status: ${(comparisonResult ? "Pass" : "Fail")}\n`);
    return comparisonResult;
}



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


cy.hackathon = {
    shouldBeVisible: (task, testName, domId) => {
    var displayed = true;
    try { 
         cy.get(domId).should('be.visible');
    } catch(e) {
     displayed = false;
    }
    return hackathonReporter(task, testName, domId, displayed);
    }
}