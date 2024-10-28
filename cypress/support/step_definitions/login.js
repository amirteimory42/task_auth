import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

// سناریوی ثبت‌نام
Given('the user is on the signup page', () => {
    cy.visit('cypress/support/signUp/signup.html'); // مسیر صفحه‌ی ثبت‌نام
});

When('the user fills in the {string} field with {string}', (field, value) => {
    const fieldSelector = {
        'Email': '#email',
        'First Name': '#firstname',
        'Last Name': '#lastname',
        'Birthdate': '#birthdate',
        'Phone Number': '#phone',
        'Password': '#password',
        'Confirm Password': '#password-confirm'
    };
    cy.get(fieldSelector[field]).type(value);
});

When('the user clicks on the "Sign Up" button', () => {
    cy.get('button[type="submit"]').click();
});

Then('the user should see an alert with the message {string}', (message) => {
    cy.on('window:alert', (text) => {
        expect(text).to.contains(message);
    });
});

Then('the user should be redirected to the login page', () => {
    cy.url().should('include', 'cypress/support/login/login.html');
});

// سناریوی ورود
Given('the user is on the login page', () => {
    cy.visit('cypress/support/login/login.html'); // مسیر صفحه‌ی ورود
});

Given('a user with email {string} and password {string} exists', (email, password) => {
    const users = [{ email, password }];
    localStorage.setItem('users', JSON.stringify(users));
});

When('the user fills in the {string} field with {string}', (field, value) => {
    const loginFieldSelector = {
        'Email': '#login-email',
        'Password': '#login-password'
    };
    cy.get(loginFieldSelector[field]).type(value);
});

When('the user clicks on the "Log In" button', () => {
    cy.get('button[type="submit"]').click();
});

Then('the user should be redirected to the dashboard page', () => {
    cy.url().should('include', 'cypress/support/dashboard/dashboard.html');
});

// سناریوی خروج از حساب
Given('the user is logged in and on the dashboard page', () => {
    localStorage.setItem('loggedInUser', 'user@example.com');
    cy.visit('cypress/support/dashboard/dashboard.html'); // مسیر صفحه‌ی داشبورد
});

When('the user clicks on the "Sign Out" button', () => {
    cy.get('#sign-out-button').click();
});

Then('the user should be redirected to the login page', () => {
    cy.url().should('include', 'cypress/support/login/login.html');
});

Then('the "loggedInUser" property should be removed from local storage', () => {
    cy.window().then((win) => {
        expect(win.localStorage.getItem('loggedInUser')).to.be.null;
    });
});
