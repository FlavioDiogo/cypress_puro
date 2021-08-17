import Base from '../_base.page'
import {Produtos as addProd} from '../components/sauce.elements/carrinho.elements'

export class Sauce_adicionarProduto extends Base {


    static adicionar_produto(){
        super.clickOnElement(addProd.add_produto)
    }
}    