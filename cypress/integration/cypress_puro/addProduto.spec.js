/// <reference types ="cypress"/>

import {Sauce} from '../../pages/SauceDemo/teste.page'

describe('Adicionar produto no carrinho', () => {

    let ctrl;

    beforeEach(() => {
        ctrl = 'valor do beforeEach'
        cy.log(ctrl)
    })

    context('Dado que esteja logado e na pagina de produtos da sauce.demo', () => {

        beforeEach(() => {
            cy.visit('www.saucedemo.com')
            Sauce.logar_sauce_demo()
            Sauce.verificar_logado()
            ctrl = 'valor do primeiro context interno'
            cy.log(ctrl)
        })
        context('Quando clicar para adicionar um produto no carrinho', () => {
            beforeEach(() => {
                Sauce.adicionar_produto()
                ctrl = 'valor do segundo context interno'
                cy.log(ctrl)
            })

            it('Então deverá exibir o produto escolhido dentro do carrinho', () => {
                Sauce.acessar_carrinho()
                Sauce.verificar_produto()
                ctrl = 'valor do último it interno'
                cy.log(ctrl)
            }) 
            it('deve estar na URL correta', () => {
                cy.url().should('contain', 'inventory')
            })    
    })
  })
    context('segundo context', () => {
        it('nada', () => {
            ctrl = 'valor do segundo context externo'
                    cy.log(ctrl)
        })
    })
})



      /*  it('visitar site', () => {
                //beforeEach('Acessar', () => {
                    cy.visit('www.saucedemo.com')
                }) 
        it('logar', () => {
            Sauce.logar_sauce_demo()
            cy.get('#react-burger-menu-btn').click()
            cy.get('#logout_sidebar_link').should('be.visible')
        })
        describe('deve adicionar um produto', () => {
                it('adiciona um produto' , () => {
                    Sauce.adicionar_produto()
                })
                it('acessa carrinho', () => {
                    Sauce.acessar_carrinho()
                    cy.url().should('contain', '/cart.html')
                })
                it('verifica produto no carrinho', () => {
                    Sauce.verificar_produto()       
            
            }) 
                    })
    
    // context('Quando acessar o carrinho de compras', () => {
    // })
        
    // context('Então deverá exibir o produto escolhido dentro do carrinho', () => {
    // })
     
                                 
    })



            // specify('E clicar para adicionar um produto no carrinho', () => {
            //         Sauce.adicionar_produto()

            //     it('Quando acessar o carrinho de compras', () => {
            //         Sauce.acessar_carrinho()
            //     })

            //     it('Então deverá exibir o produto escolhido dentro do carrinho', () => {
            //         Sauce.verificar_produto()       
            
            //     })  
            // })


    })

})
/*
describe
    context
        it
    context
        it
    context
        it
    it

*/