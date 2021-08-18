
/// <reference types ="cypress"/>





 
describe('Remover produto do carrinho', () => {
    context('Dado que esteja logado e na pagina de produtos da sauce.demo', () => {
        beforeEach(() => {
            cy.visit('www.saucedemo.com')
            Sauce_login.logar_sauce_demo()
            Sauce_valida_logado.valida_logado()
            
        })
        context('Quando clicar para adicionar um produto no carrinho', () => {
            beforeEach(() => {
                Sauce_adicionarProduto.adicionar_produto()
                
            })

            it('Então deverá exibir o produto escolhido dentro do carrinho', () => {
                Sauce_acessarCarrinho.acessar_carrinho()
                Sauce_verificarProduto.verificar_produto()
                
            }) 
             
        })
    })
 
})