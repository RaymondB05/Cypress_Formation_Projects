/// <reference types="cypress"  />







describe("Authentification tests suite ", () => {


    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");
        cy.fixture("credentials");
    });

    it.only("should authenticate user with valid credentials ", () => {


        cy.get('@users').then(users => {
            const user = users[0]
            cy.get('[data-test="username"]').type(user.username);
            cy.get('[data-test="password"]').type(user.password);
            cy.get('[data-test="login-button"]').click();
        })

        cy.url().should("contain", "/inventory");
        cy.get(".title").should("be.visible");
        cy.get("inventory_item").should("exist");

    });

});


Cypress.on("uncaught:exception", (err, runnable) => {
    // Handle the error as needed
    console.error("Uncaught exception:", err.message);
    // Optionally, prevent Cypress from failing the test
    return false;
});