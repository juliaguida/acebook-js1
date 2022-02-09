describe('Timeline', function() {
  it('can submit posts and view them', function() {
    cy.visit('/sessions/new');
    cy.get('[id=email]').type('admin@admin.com');
    cy.get('[id=password]').type('admin');
    cy.contains('Submit').click();
    cy.contains('New post').click();

    cy.get('#new-post-form').find('[type="text"]').type('Hello, world!');
    cy.get('#new-post-form').submit();

    cy.get('.posts').should('contain', 'Hello, world!');
  });
});