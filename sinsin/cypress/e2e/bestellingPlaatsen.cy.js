describe("bestellingplaatsen", () => {
  beforeEach(() => {
    cy.login();
    cy.viewport(1920, 1080);
  });

  it("bestelling plaatsen", () => {
    cy.visit("http://localhost:3000/menu/");
    cy.get("[data-cy=winkelmand]").eq(2).click({ force: true });
    cy.visit("http://localhost:3000/bestelling/");
    cy.get("[data-cy=bestel]").click({ force: true });
    cy.get("[data-cy=Plaatsen]").click({ force: true });
    cy.visit("http://localhost:3000/");
    cy.get(".rounded").eq(0).click({ force: true });
    cy.get('[data-cy="history"]').click({ force: true });

    cy.get(":nth-child(1) > .card-body > .row > :nth-child(3) > h3").should(
      "contain",
      13
    );
  });
});
