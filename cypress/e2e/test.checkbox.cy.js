/// <reference types="cypress" />

describe("Test de checkbox " , () => {

    it( "scenario de demo " , () => {
        cy.visit('https://demoqa.com/automation-practice-form');
       

        cy.get("#css-1wy0on6").click( {force: true});

  // Saisissez le texte pour filtrer les options
  cy.get("#react-select-6-input", { timeout: 10000 }).should('exist');
  // Remplacez "Uttar Pradesh" par le texte que vous recherchez

  // Sélectionnez l'option appropriée
  cy.get(".css-1uccc91-singleOption").contains("Uttar Pradesh").click();
        
    });
    });
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Handle the error as needed
        console.error('Uncaught exception:', err.message);
        // Optionally, prevent Cypress from failing the test
        return false;
      });
      



    
    