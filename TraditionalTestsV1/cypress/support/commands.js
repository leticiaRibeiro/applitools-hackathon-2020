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
