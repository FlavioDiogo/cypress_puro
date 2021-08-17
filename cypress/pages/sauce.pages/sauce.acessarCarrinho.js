import Base from '../_base.page'
import {Acessar as ac} from '../components/sauce.elements/carrinho.elements'

export class Sauce extends Base {


    static acessar_carrinho(){
        super.clickOnElement(ac.acessar_carrinho)
    }
}    