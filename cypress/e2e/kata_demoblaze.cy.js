/// <reference types="cypress" />

const { faker } = require("@faker-js/faker");

const fname = faker.internet.userName();
const password = faker.internet.password();

const userLogin = fname;
const passwordLogin = password;


describe("Scénario de test 1 ", () => {

    beforeEach(() => {
        cy.visit("https://www.demoblaze.com/");
    });


    it('Clique sur le bouton "Sign Up"', function () {

        cy.get('a.nav-link#signin2').click();
        cy.get('#signInModal').should('be.visible');
        cy.get('#sign-username').should('be.visible').type(fname);
        cy.get('#sign-password').should('be.visible').type(password);
        cy.get('button[onclick="register()"]').click();

    });


    // it('Effectuer des actions dans la fenêtre modale (inscription)', function () {

    //     cy.get('a.nav-link#login2').click();
    //     cy.get('#logInModal').should('be.visible');
    //     cy.get('#loginusername').should('be.visible').type(userLogin);
    //     cy.get('#loginpassword').should('be.visible').type(passwordLogin);
    //     cy.get('button[onclick="logIn()"]').click();

    // });

});

Cypress.on("uncaught:exception", (err, runnable) => {
    // Handle the error as needed
    console.error("Uncaught exception:", err.message);
    // Optionally, prevent Cypress from failing the test
    return false;
});
