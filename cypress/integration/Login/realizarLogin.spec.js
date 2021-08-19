/// <reference types ="cypress"/>


describe('Realizar login', () => {
    const data = require ('../../fixtures/loginData.json')
    context('Dado que esteja na pagina home do site sauce.demo', () => {
       data.forEach(item => {
            it(`Quando preencher os campos com dados do tipo ${item.tipo}`, () => {
                cy.visit('www.saucedemo.com')
                cy.realizarLogin(item.username, item.password)
                cy.validarLogin(item.tipo)
            //it('Então deverá exibir a pagina de produtos com o usuario logado', () => {
                   
                //})    
              
            })             
        }) 
           // it('Então deverá exibir a pagina de produtos com o usuario logado', () => {
               // cy.validarLogado()
           // })
          
   })        
})     