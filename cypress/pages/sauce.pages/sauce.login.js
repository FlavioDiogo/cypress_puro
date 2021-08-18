import Base from '../_base.page'
import {Login as log} from '../components/sauce.elements/login.elements'

export class Sauce_login extends Base {


    static logar_sauce_demo(){
      super.typeValue(log.add_user, 'standard_user')
      super.typeValue(log.add_password, 'secret_sauce')
      cy.get(log.btn_login).click()
    }

    static valida_logado(){
      cy.get(log.val_logado_click).click()
      cy.get(log.val_logado_valida).should('be.visible')
    } 
  
    static digitar_usuario(user){
      cy.get(log.add_user).type(user)
    }  

    static digitar_senha(password){
      cy.get(log.add_password).type(password)
    }  

    static entrar_login(){
      super.clickOnElement(log.btn_login)
    }  
}    