import Base from '../_base.page'
import {AcessarCarrinho as ac} from '../components/sauce.elements/carrinho.elements'

export class Sauce_acessarCarrinho extends Base {


    static acessar_carrinho(){
        super.clickOnElement(ac.acessar_carrinho)
    }
}    