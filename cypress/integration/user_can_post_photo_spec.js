describe('Photo Timeline', function() {
  it('can submit photos and view them', function() {
    cy.visit('/sessions/new');
    cy.pause();
    cy.get('#new-session-form').submit();
    cy.url('/photos');

    // cy.visit('/photos');
    cy.contains('New photo').click();

    cy.get('#new-photo-form').find('[type="text"]').type('Hello, world!');
    cy.get('#new-photo-form').submit();

    cy.get('.photos').should('contain', 'Hello, world!');
  });
});