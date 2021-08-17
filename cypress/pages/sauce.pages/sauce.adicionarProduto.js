import Base from '../_base.page'
import {Produtos as addProd} from '../../pages/components/sauce.elements/carrinho.elements'

export class Sauce extends Base {


    static adicionar_produto(){
        super.clickOnElement(addProd.add_produto)
    }
}    