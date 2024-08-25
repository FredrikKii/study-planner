import PrioList from "./PrioList";

describe("PrioList component with test data", () => {
  const testTodos = [
    { id: 1, text: "Uppgift 1" },
    { id: 2, text: "Uppgift 2" },
    { id: 3, text: "Uppgift 3" },
  ];

  beforeEach(() => {
    cy.mount(<PrioList />, {
      props: { todos: testTodos },
    });
  });

  it("should render correctly", () => {
    cy.contains("Vad ska jag göra nu?").should("be.visible");
    cy.get('input[type="search"]').should("be.visible");
  });

  it("should filter items correctly", () => {
    cy.get('input[type="search"]').type("Övning 1");
    cy.contains("Övning 1").should("be.visible");
    cy.contains("Övning 2").should("not.exist");
    cy.contains("Övning 3").should("not.exist");
  });
});
