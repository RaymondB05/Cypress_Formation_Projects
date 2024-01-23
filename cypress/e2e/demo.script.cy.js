/// <reference types="cypress" />

const { faker } = require('@faker-js/faker');

const name = faker.name.fullName();
const email = faker.internet.email();
const address = faker.address.streetAddress();


describe("Scénario de test " , () => {

it( "scenario de demo " , () => {

cy.visit('https://demoqa.com/text-box');

cy.get("#userName").type(name);
cy.get("#userEmail").type(email);
cy.get("#currentAddress").type(address);


cy.contains("Submit").click();


cy.get("[id=name]")
.should("be.visible")
.and("include.text", name);

cy.get("#email")
.should("be.visible")
.and("include.text", email);

cy.get("[id=currentAddress]")
.should("be.visible")
.and("include.text", address);

// cy.get("#output").contains(name).should("be.visible");

});
});

Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the error as needed
    console.error('Uncaught exception:', err.message);
    // Optionally, prevent Cypress from failing the test
    return false;
  });
  

