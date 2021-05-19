describe("PARTNER TOOL LANDING PAGE", () => {
  beforeEach(() => {});
  it("TESTS THE HEADER", () => {
    cy.visit("https://aspen.visiblenetworklabs.com/users/");
    cy.get(".app > header > a").should(
      "have.attr",
      "href",
      "https://visiblenetworklabs.com"
    );
  });
  it("should display a image in header with class image", () => {
    cy.get('div[class="app"]')
      .find("img[src='visiblenetworklabs.png']")
      .should("be.visible");
  });
  it('tests the "learn more" button', () => {
    cy.get('.col-4 > a').should(
      'have.attr',
      'href',
      'https://visiblenetworklabs.com/partner-platform/'
    ).click()
    cy.url()
      .should('include', '/partner-platform')
      .go('back')
  })

  it(" tests the input fields for functionality", () => {
   
    cy.get("#__BVID__4").click().type(Cypress.env("email"));
    cy.get("#__BVID__5").click().type(Cypress.env("pass"))
  
    cy.get('[name=submit]').click()
    cy.url()
      .should('include', '/users/home.php')
  });
});

describe("USER HOME PAGE", () => {
  it('tests the practice button', () => {
    cy.get('button[class="btn dark-vnl-cancel-button font-weight-bold m-2 btn-secondary"]').click()
    // cy.get('button[class="btn btn-info small-btn-outline-info"]').click()
    cy.get('.arrow')
      .should('be.visible')
  });
  it('tests the sanbox button', () => {
    cy.get('button[class="btn orange-vnl-cancel-button font-weight-bold m-2 btn-secondary"]').click()
      .get('.arrow')
      .should('be.visible')
  });
});