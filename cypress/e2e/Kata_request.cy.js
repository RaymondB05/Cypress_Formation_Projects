/// <reference types="cypress" />


const { faker } = require('@faker-js/faker');
const cheminFichier = 'C:/Users/user/Desktop/AleeConseil_projects/Formulaire_Kata/demo-form-html-css/index.html';

const fname = faker.name.firstName();
const lname = faker.name.lastName();
const email = faker.internet.email();
const address = faker.address.streetAddress();
const age = faker.datatype.number({ min: 18, max: 99 });
const phraseAleatoire = faker.lorem.sentence();


describe("Scénario de test 1 " , () => {



    beforeEach(() => {
        cy.visit('index.html');
      })
    
      it('Toutes les questions doivent être visibles', () => {
        // Vérifier la visibilité des questions
        cy.get('label').should('be.visible')
      })
    
      it('Tous les champs doivent être cliquables', () => {
        // Vérifier que tous les champs sont cliquables
        cy.get('input, select, textarea, button').should('be.enabled')
      })


    });  

describe("Scénario de test  2" , () => {

    it( " Cliquer sur 'Envoyer' / ne pas remplir tous les champs obligatoires / Un message d'information apparaît  " , () => {

        // Remplissage de chaque champs du formulaire avec une valeur aléatoire générée par le Faker !
        cy.visit('index.html');

        cy.get('[data-cy="lastName"]').type(lname);
        cy.get('[data-cy="lastName"]').should("be.visible").and("have.value", lname);



        cy.get('[data-cy="firstName"]').type(fname);
        cy.get('[data-cy="firstName"]').should("be.visible").and("have.value", fname);



        cy.get('[data-cy="email"]').type(email);
        cy.get('[data-cy="email"]').should("be.visible").and("have.value", email);



        // cy.get('[data-cy="age"]').type(age);
        // cy.get('[data-cy="age"]').should("be.visible").and("have.value", age);



        // Cocher l'element Radio qui contient la valeur Yes + test du check
           cy.get('[data-cy="radio-yes"]').check();
           cy.get('[data-cy="radio-yes"]').should('be.checked');


        // Cocher le checkbox qui contient la valeur Cypress + test du check 

          cy.get('[data-cy="checkboxCypress"]').check();
          cy.get('[data-cy="checkboxCypress"]').should('be.checked');


        // Sélectionner l'option 'Dur' dans le menu déroulant
        cy.get('[data-cy="level"]').select('high');
        cy.get('[data-cy="level"]').should('have.value', 'high');

         // Insérer la phrase de suggestion 
         cy.get('[data-cy="suggestion"]').type(phraseAleatoire);
         cy.get('[data-cy="suggestion"]').should('have.value', phraseAleatoire);


          // Cliquer sur le bouton 'Envoyer'
          cy.get('[data-cy="envoyer"]').click();
          cy.get('[data-cy="notification"]').should('have.class', 'show');

    }); 
    
});

describe("Scénario de test  3" , () => {

    it( "Cliquer sur 'Envoyer ' ne genere aucun message d'erreur apres avoir rempli les champs obligatoires  " , () => {

        // Remplissage de chaque champs du formulaire avec une valeur aléatoire générée par le Faker !
        cy.visit('index.html');

        cy.get('[data-cy="lastName"]').type(lname);
        cy.get('[data-cy="lastName"]').should("be.visible").and("have.value", lname);



        cy.get('[data-cy="firstName"]').type(fname);
        cy.get('[data-cy="firstName"]').should("be.visible").and("have.value", fname);



        cy.get('[data-cy="email"]').type(email);
        cy.get('[data-cy="email"]').should("be.visible").and("have.value", email);



        cy.get('[data-cy="age"]').type(age);
        cy.get('[data-cy="age"]').should("be.visible").and("have.value", age);



        // Cocher l'element Radio qui contient la valeur Yes + test du check
           cy.get('[data-cy="radio-yes"]').check();
           cy.get('[data-cy="radio-yes"]').should('be.checked');


        // Cocher le checkbox qui contient la valeur Cypress + test du check 

          cy.get('[data-cy="checkboxCypress"]').check();
          cy.get('[data-cy="checkboxCypress"]').should('be.checked');


        // Sélectionner l'option 'Dur' dans le menu déroulant
        cy.get('[data-cy="level"]').select('high');
        cy.get('[data-cy="level"]').should('have.value', 'high');

         // Insérer la phrase de suggestion 
         cy.get('[data-cy="suggestion"]').type(phraseAleatoire);
         cy.get('[data-cy="suggestion"]').should('have.value', phraseAleatoire);


          // Cliquer sur le bouton 'Envoyer'
          cy.get('[data-cy="envoyer"]').click();
          cy.get('[data-cy="notification"]').should('not.have.class', 'show');

    }); 
    
});


Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the error as needed
    console.error('Uncaught exception:', err.message);
    // Optionally, prevent Cypress from failing the test
    return false;
  });


  

