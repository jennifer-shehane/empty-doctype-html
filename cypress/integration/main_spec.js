it('empty doctype has doctype as null', () => {
  cy.visit('index_empty.html')
  // fails
  cy.document().its('doctype').should('not.be.null')
})

it('doctype with html has defined doctype', () => {
  cy.visit('index_with_html.html')
  // passes
  cy.document().its('doctype').should('not.be.null')
})