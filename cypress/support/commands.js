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
import 'cypress-file-upload';

require('cypress-downloadfile/lib/downloadFileCommand')

Cypress.Commands.add("login", () => {
    cy.visit("https://portal.trywritesea.com");
  
    // cy.get("#email").type("team@brandresumes.com");
    // cy.get("#password").type("vdsf432saqwGHdfg45kkhfg");
    cy.get("#email").type("testing1@writesea.com");
    cy.get(".btn").click();
    cy.get("#password").type("Testing@12345");
    cy.get(".mt-3").click();
    cy.wait(3000);
  });

  Cypress.Commands.add("writerlogin", () => {
    cy.visit("https://testing123.trywritesea.com/");
    cy.get("#email").type("anwaar82822@mail.com");
    cy.get("#password").type("123456");
    cy.get(".btn").click();
    cy.wait(3000);
  });

  Cypress.Commands.add("customerlogin", () => {
    cy.visit("https://testing123.trywritesea.com/");
    cy.get("#email").type("abcmalik@gmail.com");
    cy.get("#password").type("123456");
    cy.get(".btn").click();
    cy.wait(3000);
  });

