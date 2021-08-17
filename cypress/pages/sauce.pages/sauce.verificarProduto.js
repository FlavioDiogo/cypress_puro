import Base from '../_base.page'
import {Verifica as verProduto} from '../components/sauce.elements/validaProduto.elements'

export class Sauce_verificarProduto extends Base {


static verificar_produto(){
    cy.get(verProduto.ver_produto).should('exist')
  }
}