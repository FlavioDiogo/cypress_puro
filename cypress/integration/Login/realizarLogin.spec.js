/// <reference types ="cypress"/>

import {Sauce} from '../../pages/sauce.pages/teste.page'

describe('Realizar login', () => {
    context('Dado que esteja na pagina home do site sauce.demo', () => {
        beforeEach(() => {
            cy.visit('www.saucedemo.com')
        })
        context('Quando preencher os campos com dados validos', () => {
            beforeEach(() => {
                Sauce.logar_sauce_demo()
        }) 
             it('Então deverá exibir a pagina de produtos com o usuario logado', () => {
                Sauce.verificar_logado()
            })
        })   
    })        
})     