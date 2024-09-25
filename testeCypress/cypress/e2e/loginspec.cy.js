describe('usuarios devem realizar o login, ', () => {
  it('atraves da pagina da aplicacao com sucesso', () => {
    cy.visit('https://conta.saipos.com/#/app/login')
    cy.get("input[placeholder='E-mail'").type("gabrielly.venturini@saipos.com")
    cy.get("input[placeholder='Senha'").type("@CGU8306")
    cy.get('button[type="submit"').click();
    cy.contains('.uk-notify-message', "Login realizado com sucesso.").should("be.visible")
  })
})


