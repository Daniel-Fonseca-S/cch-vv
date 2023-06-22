describe('Selecionar uma categoria de produto para filtrar dados', () => {
  it('Selecionar categoria do menu', () => {
    cy.visit('https://store.steampowered.com/')
    cy.get('#genre_tab > .pulldown').trigger('mouseover').wait(2000)
    cy.get('#genre_flyout > .popup_body').contains('Free to Play').click()
  })
})