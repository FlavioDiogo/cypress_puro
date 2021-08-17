import Base from '../_base.page'
import {VerificaLogado as verLogado} from '../components/sauce.elements/validaLogado.elements'

export class Sauce_verificarLogado extends Base {


  static verificar_logado(){
    cy.get(verLogado.ver_logado_click).click()
    cy.get(verLogado.ver_logado_valida).should('be.visible')
  } 
}  