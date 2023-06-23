describe('Ver steamworks', () => {
  it('passes', () => {
    cy.visit('https://store.steampowered.com/')
    cy.get('.supernav_container > [href="https://store.steampowered.com/about/?snr=1_4_4__global-header"]').click()
    cy.get('.smooth_scroll').click()
    cy.get('#about_cta_steamworks > .cta_content > .cta_btn > a').click()
  })
})