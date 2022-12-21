describe("mijn eerste test", () => {
  it("draait de applicatie", () => {
    // 👈 1
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=contacteer-ons]").click();
  });
});
