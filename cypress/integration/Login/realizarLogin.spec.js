/// <reference types ="cypress"/>
import {Sauce_login} from '../../pages/sauce.pages/sauce.login'

describe('Realizar login', () => {
    const data = require ('../../fixtures/loginData.json')
    context('Dado que esteja na pagina home do site sauce.demo', () => {
       data.forEach(item => {
            it(`Quando preencher os campos com dados do tipo ${item.tipo}`, () => {
                cy.visit('www.saucedemo.com')
                Sauce_login.digitar_usuario(item.username)
                Sauce_login.digitar_senha(item.password)
                Sauce_login.entrar_login()
                
            })             
        }) 
            it('Então deverá exibir a pagina de produtos com o usuario logado', () => {
                Sauce_login.valida_logado()
            })
          
    })        
})     