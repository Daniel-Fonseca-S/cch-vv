describe('Selecionar uma categoria de produto para filtrar dados', () => {
  it('Selecionar categoria do menu', () => {
    cy.visit('https://store.steampowered.com/')
    cy.get('#genre_tab > .pulldown').trigger('mouseover').wait(5000)
    cy.get('[https://store.steampowered.com/genre/Free%20to%20Play/?snr=1_4_4__12]').click()
  })
})