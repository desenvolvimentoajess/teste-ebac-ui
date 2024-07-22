/// <reference types="cypress"/>

describe('Funcionalidade: Login', ()=>{

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', ()=>{
        cy.get('#username').type('jessica.teste@teste.com.br')
        cy.get('#password').type('teste1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, jessica.teste (não é jessica.teste? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('jessica@teste.com.br')
        cy.get('#password').type('teste1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve inserir uma mensagem de erro ao inserir uma senha inválida', () => {
        cy.get('#username').type('jessica.teste@teste.com.br')
        cy.get('#password').type('teste0000')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail jessica.teste@teste.com.br está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
    });



})