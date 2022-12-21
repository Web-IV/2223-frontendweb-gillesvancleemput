describe("account info ", () => {
  beforeEach(() => {
    cy.login();
    cy.viewport(1920, 1080);
  });
  it("adress weizigen", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".rounded").eq(0).click({ force: true });
    cy.get(".card > :nth-child(2) > .col-md-6 > .text")
      .eq(0)
      .click({ force: true });
    cy.get("#Gemeente").clear().type("Antwerpen");
    cy.get("#Straat").clear().type("Kortrijksesteenweg");
    cy.get("#Huisnummer").clear().type("21");
    cy.get("#Postcode").clear().type("9040");
    cy.get(".w-60 > .text-white").click({ force: true });
    cy.get(".rounded").eq(0).click({ force: true });
  });
});
