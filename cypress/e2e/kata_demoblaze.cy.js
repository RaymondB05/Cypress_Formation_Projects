/// <reference types="cypress" />

const { faker } = require("@faker-js/faker");

const fname = faker.internet.userName();
const password = faker.internet.password();
const nombreAleatoire = faker.datatype.number({ min: 0, max: 8 });
const city = faker.location.city();
const creditC = faker.finance.creditCardNumber();
const month = faker.date.month();
const country = faker.location.country();


describe("Démo Kata 02 demoblaze  ", () => {

    beforeEach(() => {
        cy.visit("https://www.demoblaze.com/");
    });

    it(' Inscription ', function () {

        cy.get('a.nav-link#signin2').click({ force: true });
        cy.get('#signInModal').should('be.visible');
        cy.get('#sign-username').should('be.visible').clear().type(fname).should('have.value', fname);
        cy.get('#sign-password').should('be.visible').clear().type(password).should('have.value', password);
        cy.get('button[onclick="register()"]').click();

    });

    it('Se connecter', function () {

        cy.get('a.nav-link#login2').click();
        cy.get('#logInModal').should('be.visible');
        cy.get('#loginusername').should('be.visible').clear().type("Frankie_Bailey").should('have.value', "Frankie_Bailey");
        cy.get('#loginpassword').should('be.visible').clear().type("Q9OfQM3CLWoyv0P").should('have.value', "Q9OfQM3CLWoyv0P");
        cy.get('button[onclick="logIn()"]').click();

    });

    it(' Visualiser un produit ', function () {

        cy.get('a.nav-link#login2').click();
        cy.get('#logInModal').should('be.visible');
        cy.get('#loginusername').should('be.visible').clear().type("Frankie_Bailey").should('have.value', "Frankie_Bailey");
        cy.get('#loginpassword').should('be.visible').clear().type("Q9OfQM3CLWoyv0P").should('have.value', "Q9OfQM3CLWoyv0P");
        cy.get('button[onclick="logIn()"]').click().then(() => {


            const productId = nombreAleatoire;
            cy.get('#tbodyid .col-lg-4:eq(' + productId + ') a.hrefch').click();

            cy.url().should('include', 'prod.html?idp_=' + (productId + 1) + '');

        });


    });

    it('Ajouter un produit ', function () {

        cy.get('a.nav-link#login2').click();
        cy.get('#logInModal').should('be.visible');
        cy.get('#loginusername').should('be.visible').clear().type("Frankie_Bailey").should('have.value', "Frankie_Bailey");
        cy.get('#loginpassword').should('be.visible').clear().type("Q9OfQM3CLWoyv0P").should('have.value', "Q9OfQM3CLWoyv0P");
        cy.get('button[onclick="logIn()"]').click().then(() => {


            const productId = nombreAleatoire;
            cy.get('#tbodyid .col-lg-4:eq(' + productId + ') a.hrefch').click();

            cy.url().should('include', 'prod.html?idp_=' + (productId + 1) + '');

            cy.contains("Add to cart").click();

            cy.on('window:alert', (str) => {
                // Vous pouvez ajouter des assertions sur le message de l'alerte
                expect(str).to.equal('Product added.');
            });


        });



    });

    it.only('Ajouter un produit + Placer un ordre ', function () {

        cy.get('a.nav-link#login2').click();
        cy.get('#logInModal').should('be.visible');
        cy.get('#loginusername').should('be.visible').clear().type("Frankie_Bailey").should('have.value', "Frankie_Bailey");
        cy.get('#loginpassword').should('be.visible').clear().type("Q9OfQM3CLWoyv0P").should('have.value', "Q9OfQM3CLWoyv0P");
        cy.get('button[onclick="logIn()"]').click().then(() => {


            const productId = nombreAleatoire;
            cy.get('#tbodyid .col-lg-4:eq(' + productId + ') a.hrefch').click();

            cy.url().should('include', 'prod.html?idp_=' + (productId + 1) + '');

            cy.contains("Add to cart").click();

            cy.on('window:alert', (str) => {
                // Vous pouvez ajouter des assertions sur le message de l'alerte
                expect(str).to.equal('Product added.');

            });

        });



        cy.get('a#cartur').click().then(() => {

            cy.contains('Place Order').click();

            cy.get('#name').type(fname);
            cy.get('#country').type(country);
            cy.get('#city').type(city);
            cy.get('#card').type(creditC);
            cy.get('#month').type(month);
            cy.get('#year').type('2003');

            cy.contains('Purchase').click();

        });







    });

});



Cypress.on("uncaught:exception", (err, runnable) => {

    // Handle the error as needed
    console.error("Uncaught exception:", err.message);
    // Optionally, prevent Cypress from failing the test

    return false;
});
