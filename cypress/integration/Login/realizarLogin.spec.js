/// <reference types ="cypress"/>
import {Sauce_login} from '../../pages/sauce.pages/sauce.login'

describe('Realizar login', () => {
    const data = [
        {
            tipo: "bloqueado",
            username: "locked_out_user",
            password: "secret_sauce"
            
        },
        {
            tipo: "invalido",
            username: "invalido",
            password: "secret_sauce"
        },
        {
            tipo: "valido",
            username: "standard_user",
            password: "secret_sauce"
        }
    ]

    
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