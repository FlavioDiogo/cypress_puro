import Base from '../_base.page'
import {Produtos as remProd} from '../components/sauce.elements/carrinho.elements'

export class Sauce_removerProduto extends Base {

   
    static adicionar_produto(){
        super.clickOnElement(remProd.rem_produto)

    }
}    