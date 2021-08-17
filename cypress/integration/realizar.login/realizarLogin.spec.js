/// <reference types ="cypress"/>

import {Sauce} from '../../pages/SauceDemo/teste.page'

describe('Adicionar produto no carrinho', () => {
    context('Dado que esteja logado e na pagina de produtos da sauce.demo', () => {
        beforeEach(() => {
            cy.visit('www.saucedemo.com')
            Sauce.logar_sauce_demo()
            Sauce.verificar_logado()
            
        })
    })        
})    