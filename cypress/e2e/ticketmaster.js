
describe('Login Test', () => {
    it('logs in to the app', () => {
      cy.androidStartApp('<your_app_package_name>', '<your_app_launch_activity_name>');
  
      cy.get('#username').type('<your_username>');
      cy.get('#password').type('<your_password>');
      cy.get('#login-button').click();
  
      cy.get('.welcome-message').should('contain', 'Welcome, <your_username>!');
    });
  });