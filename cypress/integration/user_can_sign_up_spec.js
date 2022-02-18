describe ('Sign up', function (){

  it('allows a user to sign up', ()=>{
    cy.visit('/sessions/new');
    cy.contains('Sign Up').click();
    cy.get('#new-user-form').submit();
    cy.url('/sessions/new')
  });

  it ('post sign up can log in', ()=>{
    cy.visit('/users/new');
    cy.contains('Sign Up').click();
    cy.get('#new-user-form').submit();
    cy.url('/posts');
  });

});