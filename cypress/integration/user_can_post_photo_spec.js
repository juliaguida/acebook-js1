describe('Photo Timeline', function() {
  it('can submit photos and view them', function() {
    cy.visit('/sessions/new');
    cy.pause();
    cy.get('#new-session-form').submit();
    cy.url('/posts');
    cy.contains("View photos here").click();

    // cy.visit('/photos');
    cy.contains('New photo').click();

    cy.fixture('example.jpg').then(fileContent => {
      cy.get('input[type="file"]').attachFile({
          fileContent: fileContent.toString(),
          fileName: 'example.jpg',
          mimeType: 'image/png'
      });
  });
  });
});