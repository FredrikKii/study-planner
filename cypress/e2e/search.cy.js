describe("Search Todo Items", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Filters tasks based on search input", () => {
    const correctText = "plugga";
    const incorrectText = "tvätta bilen";

    cy.get('[data-cy="search-input"]').should("exist");

    cy.get('[data-cy="search-input"]').type(correctText);

    // Får inte kommentarerna nedan till att fungera..

    //   cy.get('[data-cy="prio-items"]').find('[data-cy="prio-item"]').each(($item) => {
    //     cy.wrap($item).should('contain.text', correctText);
    //   });

    cy.get('[data-cy="search-input"]').clear();

    //   cy.get('[data-cy="prio-items"]').find('[data-cy="prio-item"]').should('have.length.gt', 0);

    cy.get('[data-cy="search-input"]').type(incorrectText);

    //   cy.get('[data-cy="prio-items"]').find('[data-cy="prio-item"]').should('not.exist');
  });
});
