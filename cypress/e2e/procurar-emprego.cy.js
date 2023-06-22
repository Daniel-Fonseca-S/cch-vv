describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://store.steampowered.com/')
    cy.get('.valve_links > [href="http://www.valvesoftware.com"]').click()
  })
})