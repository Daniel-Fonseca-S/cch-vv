describe('Teste de busca de um produto', () => {
  it('Buscar produto direto da lista', () => {
    cy.visit('https://store.steampowered.com/')
    cy.get('#store_search').type('Portal 2')
    cy.get('.match_app.match_category_top > .match_name').click()
  })

  it('Buscar produto pela página de busca de produto', () => {
    cy.visit('https://store.steampowered.com/')
    cy.get('#store_nav_search_term').type('Terraria')
    cy.get('#store_search_link > img').click()
    cy.get('[href="https://store.steampowered.com/app/105600/Terraria/?snr=1_7_7_151_150_1"]').click()
  })
})