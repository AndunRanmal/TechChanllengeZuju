import signInPage from "../pageObjects/signIn.page"
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
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (username, password) => {
    signInPage.elements.username().type(username)
    signInPage.elements.password().type(password)
    signInPage.elements.loginButton().click()
  })

  Cypress.Commands.overwrite('type', (originalFn, subject, text, options = {}) => {
    options.delay = options.delay || 0;
    return originalFn(subject, text, options)
  })