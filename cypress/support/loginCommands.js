
/// <reference types ="cypress"/>

const Login = {
    add_user            : '[data-test=username]',
    add_password        : '[data-test=password]',
    btn_login           : '[data-test=login-button]',
    val_logado_click    : '#react-burger-menu-btn',
    val_logado_valida   : '#logout_sidebar_link',
    error_btn_locked    : '.error-button > .svg-inline--fa > path'
  }

  
Cypress.Commands.add('realizarLogin', (user, password) => {
    
         cy.get(Login.add_user)
         .type(user)

         cy.get(Login.add_password)
         .type(password)

         cy.get(Login.btn_login)
         .click()
})   


Cypress.Commands.add('validarLogin', (tipo) => {
        switch(tipo){
            case 'valido': {
                    cy.get(Login.val_logado_click).click()
                    cy.get(Login.val_logado_valida).should('be.visible')
                    break
            }
            case 'invalido': {
                    cy.get(Login.error_btn_locked).should('exist')
            }
            case 'bloqueado': {
                    cy.get(Login.error_btn_locked).should('exist')
                    
            }
        }    
    
})        





    //Cypress.Commands.add('validarLogado', () => {
    
        //cy.get(Login.val_logado_click)
        //.click()

        //cy.get(Login.val_logado_valida)
       // .should('be.visible')
   //})     