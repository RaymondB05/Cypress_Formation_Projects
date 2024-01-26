/// <reference types="cypress"/>


describe("Hooks demonstration", () => {


    before(() => {
        cy.log("Je suis dans le before");
    });

    beforeEach(() => {
        cy.log("Je suis dans le before Each ")
    });


    it("Scenario 1 : Demo hooks ", () => {
        // Vérifier la visibilité des questions
        cy.log(" Je suis dans le scénario 1");
    });

    it("Scenario 2 : Demo hooks ", () => {
        // Vérifier que tous les champs sont cliquables
        cy.log(" Je suis dans le scénario 1");
    });

    it("Scenario 3 : Demo hooks ", () => {
        // Vérifier que tous les champs sont cliquables
        cy.log(" Je suis dans le scénario 1");
    });

    after(() => {
        cy.log("Je suis dans le after ")
        expect(true).to.eq(true);
    })

    afterEach(() => {
        cy.log("Je suis dans le afterEach")
    });


});



Cypress.on("uncaught:exception", (err, runnable) => {
    // Handle the error as needed
    console.error("Uncaught exception:", err.message);
    // Optionally, prevent Cypress from failing the test
    return false;
});
