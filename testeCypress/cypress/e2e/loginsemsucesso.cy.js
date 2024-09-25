describe('usuarios devem realizar o login, ', () => {
    it('atraves da pagina da aplicacao sem sucesso', () => {
      cy.visit('https://conta.saipos.com/#/app/login')
      cy.get("input[placeholder='E-mail'").type("gabrielly.venturini@saipos.com")
      cy.get("input[placeholder='Senha'").type("@CGU")
      cy.get('button[type="submit"').click();
      cy.contains('.uk-notify-message', "Credencias Inválidas.").should("be.visible")
    })
  })