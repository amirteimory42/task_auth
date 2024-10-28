Feature: User Flow

  Scenario: Successful user signup
    Given the user is on the signup page
    When the user fills in the "Email" field with "user@example.com"
    And the user fills in the "First Name" field with "John"
    And the user fills in the "Last Name" field with "Doe"
    And the user fills in the "Birthdate" field with "1990-01-01"
    And the user fills in the "Phone Number" field with "1234567890"
    And the user fills in the "Password" field with "password123"
    And the user fills in the "Confirm Password" field with "password123"
    And the user clicks on the "Sign Up" button
    Then the user should see an alert with the message "Sign up successful!"
    And the user should be redirected to the login page

  Scenario: Successful user login
    Given the user is on the login page
    And a user with email "user@example.com" and password "password123" exists
    When the user fills in the "Email" field with "user@example.com"
    And the user fills in the "Password" field with "password123"
    And the user clicks on the "Log In" button
    Then the user should see an alert with the message "Login successful!"
    And the user should be redirected to the dashboard page

  Scenario: User logs out from the account
    Given the user is logged in and on the dashboard page
    When the user clicks on the "Sign Out" button
    Then the user should be redirected to the login page
    And the "loggedInUser" property should be removed from local storage
