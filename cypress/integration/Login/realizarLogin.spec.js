/// <reference types ="cypress"/>

import {Sauce_login} from '../../pages/sauce.pages/sauce.login'

 
describe('Realizar login', () => {
    context('Dado que esteja na pagina home do site sauce.demo', () => {
        beforeEach(() => {
            cy.visit('www.saucedemo.com')
        })
        context('Quando preencher os campos com dados validos', () => {
            beforeEach(() => {
                Sauce_login.logar_sauce_demo()
        }) 
             it('Então deverá exibir a pagina de produtos com o usuario logado', () => {
                Sauce_login.valida_logado()
            })
        })   
    })        
})     