




static verificar_logado(){
    cy.get(verlog.ver_logado_click).click()
    cy.get(verlog.ver_logado_valida).should('be.visible')
  }