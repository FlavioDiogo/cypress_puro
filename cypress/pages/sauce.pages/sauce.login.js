import Base from '../_base.page'
import {Login as log} from '../../pages/components/sauce.elements/login.elements'

export class Sauce extends Base {


    static logar_sauce_demo(){
      super.typeValue(log.add_user, 'standard_user')
      super.typeValue(log.add_password, 'secret_sauce')
      super.clickOnElement(log.btn_login)
    }
}    