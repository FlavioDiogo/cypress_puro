import Base from '../_base.page'
import {Login as log} from '../components/sauce.elements/login.elements'

export class Sauce_login extends Base {


    static logar_sauce_demo(){
      super.typeValue(log.add_user, 'standard_user')
      super.typeValue(log.add_password, 'secret_sauce')
      super.clickOnElement(log.btn_login)
    }

    static valida_logado(){
      cy.get(log.val_logado_click).click()
      cy.get(log.val_logado_valida).should('be.visible')
    } 
}    