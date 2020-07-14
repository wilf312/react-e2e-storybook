
before(() => {
    cy.visit('http://localhost:6006/');
});

function iget(doc, selector) {
  return cy.wrap(doc.find(selector));
}

describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    // sidebar の story 名をクリック
    cy.get('#storybook-knobs--with-emoji').click()

    // iframe内を取得
    cy.get('#storybook-preview-iframe').then(($iframe) => {
      const doc = $iframe.contents();

      // iframe内の react componentをクリック
      iget(doc, "button").click();


      // ナビをクリック
      const nv = cy.get('[role=tablist]').contains('Actions')
      nv.click()

      // ログがでること 
      cy.contains('button-click')
    })
  })
})
