describe('Timeline', function() {
  it('can submit posts and view them', function() {
    cy.visit('/sessions/new');
    cy.pause();
    cy.get('#new-session-form').submit();
    cy.url('/posts');

    // cy.visit('/posts');
    cy.contains('New post').click();

    cy.get('#new-post-form').find('[type="text"]').get('#message').type('Hello, world!');
    cy.get('#new-post-form').find('[type="text"]').get('#author').type('justine')
    cy.get('#new-post-form').submit();

    cy.get('.posts').should('contain', 'Hello, world!');
  });
});
