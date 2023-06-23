# CCH Verificação e validação

## Teste de automação com Cypress

---

### Integrantes

- Daniel Fonseca da Silva `RA: 2315807`
- Davi Gil Brito Vaz Takayama `RA: 2316374`
- Jean Felipe Camaroto Bondan `RA: 2272555`

### Repositório
- [GitHub](https://github.com/Daniel-Fonseca-S/cch-vv)

## Tópicos

- objetivo
- escolha do site
- cenário de teste
- script de teste
- resultados
- melhorias e otimizações

---

### Objetivo

O objetivo da atividade é realizar testes de automação com Cypress em um site de e-commerce real, com o intuito de verificar a funcionalidade do site e a eficiência do Cypress em realizar testes automatizados de UI.

### Escolha do site

O site escolhido para a realização dos testes foi a [Steam](https://store.steampowered.com/), um site de e-commerce de jogos digitais. O motivo da escolha foi a qualidade superior em relação aos demais competidores, além de ser um site com uma grande quantidade de funcionalidades, o que permite uma maior variedade de testes.

### Cenário de teste

Fluxos a serem testados:

- busca por um produto
- selecionar categoria de produto
- acessar página steamworks

### Scripts de teste

#### Busca por um produto

```js
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
```

- O primeiro teste busca um produto direto da lista de produtos da página inicial
- O segundo busca o produto pela página de busca de produto.

#### Selecionar categoria de produto

```js
describe('Selecionar uma categoria de produto para filtrar dados', () => {
  it('Selecionar categoria do menu', () => {
    cy.visit('https://store.steampowered.com/')
    cy.get('#genre_tab > .pulldown').trigger('mouseover').wait(2000)
    cy.get('#genre_flyout > .popup_body').contains('Free to Play').click()
  })
})
```

- O teste seleciona a categoria Free to Play do menu de categorias.

#### Acessar página steamworks

```js
describe('Ver steamworks', () => {
  it('passes', () => {
    cy.visit('https://store.steampowered.com/')
    cy.get('.supernav_container > [href="https://store.steampowered.com/about/?snr=1_4_4__global-header"]').click()
    cy.get('.smooth_scroll').click()
    cy.get('#about_cta_steamworks > .cta_content > .cta_btn > a').click()
  })
})
```

- O teste acessa a página steamworks a partir do menu de navegação na aba de "Sobre a Steam".

### Resultados

| Spec    | Tests                              | Passing     | Failing | Pending | Skipped |
| ------- | ---------------------------------- | ----------- | ------- | ------- | ------- |
| √       | busca-produto.cy.js                | 00:13       | 2       | 2       | -       | -       |
| √       | selecionar-categoria-produto.cy.js | 00:08       | 1       | 1       | -       | -       |
| √       | ver-steamworks.cy.js               | 00:10       | 1       | 1       | -       | -       |
| ***√*** | ***All specs passed!***            | ***00:32*** | ***4*** | ***4*** | ***-*** | ***-*** |

### Melhorias e otimizações

- Melhorar a organização dos testes
- Melhorar a legibilidade dos testes
- Melhorar a eficiência dos testes
- Melhorar a cobertura dos testes
- Melhorar a qualidade dos testes

---