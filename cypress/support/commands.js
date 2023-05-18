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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { loginPageLocators, sliderBarLocators } from "./locators";

Cypress.Commands.add('getByDataTest',(data_test_id) => {
    return cy.get(`[data-test=${data_test_id}]`)
})

Cypress.Commands.add('login', (username, password) => {

    cy.getByDataTest(loginPageLocators.userNameLoginFieldLocator)
        .clear()
        .type(`${username}`);

    cy.getByDataTest(loginPageLocators.passwordFieldLocator)
        .clear()
        .type(`${password}`);

    cy.getByDataTest(loginPageLocators.loginButtonLocator)
        .click();
})

Cypress.Commands.add('logout', () => {

    cy.get(sliderBarLocators.burgerMenuButtonLocator)
        .click();

    cy.get(sliderBarLocators.logoutSliderBarAnchorLocator)
        .click();

    cy.getByDataTest(loginPageLocators.loginButtonLocator)
        .should('be.visible');
})

Cypress.Commands.add('resetAppData', () => {

    cy.get(sliderBarLocators.burgerMenuButtonLocator)
        .click();

    cy.get(sliderBarLocators.resetAppStateSliderBarAnchorLocator)
        .click()
})