import Base from '../_base.page'
import {Login as log, Produtos as prod, Verifica as ver, Acessar as ac, VerificaLogado as verlog} from '../components/teste.elements'

export class Sauce extends Base {


    static logar_sauce_demo(){
      super.typeValue(log.add_user, 'standard_user')
      super.typeValue(log.add_password, 'secret_sauce')
      super.clickOnElement(log.btn_login)
    }



    static adicionar_produto(){
      super.clickOnElement(prod.add_produto)
    }


    static acessar_carrinho(){
      super.clickOnElement(ac.acessar_carrinho)
    }


    static verificar_produto(){
      cy.get(ver.ver_produto).should('exist')
    }

    static verificar_logado(){
      cy.get(verlog.ver_logado_click).click()
      cy.get(verlog.ver_logado_valida).should('be.visible')
    }


}
