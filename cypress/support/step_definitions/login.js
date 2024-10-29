import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

Given('I am on the signup page', () => {
  cy.visit('/cypress/support/signUp/signup.html');
});

When('I enter my email as {string}', (email) => {
  cy.get('#email').type(email);
});

When('I enter my first name as {string}', (firstname) => {
  cy.get('#firstname').type(firstname);
});

When('I enter my last name as {string}', (lastname) => {
  cy.get('#lastname').type(lastname);
});

When('I enter my birthdate as {string}', (birthdate) => {
  cy.get('#birthdate').type(birthdate);
});

When('I enter my phone number as {string}', (phone) => {
  cy.get('#phone').type(phone);
});

When('I enter my password as {string}', (password) => {
  cy.get('#password').type(password);
});

When('I confirm my password as {string}', (password) => {
  cy.get('#Password-confirm').type(password);
});

When('I submit the signup form', () => {
  cy.get('button[type="submit"]').contains('Sign Up').click();
});

Then('I should see a confirmation message', () => {
  
});

Given('I am on the login page', () => {
  cy.get('#login-email').type('user@example.com');
   cy.get('#login-password').type('password123');

});

When('I submit the login form', () => {
  cy.get('button').click();
});

Then('I should be redirected to the dashboard', () => {
  
});

Given('I am logged in', () => {
  
});

When('I click the sign-out button', () => {
  cy.get('#sign-out-button').click();
});

Then('I should be redirected to the homepage', () => {
 
});

