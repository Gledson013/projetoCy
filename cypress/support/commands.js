import Ajv from 'ajv'

Cypress.Commands.add('login', (email, password) => {
    
    cy.request({
        method: 'POST',
        url: '/api/auth',
        body: {
            email,   // email da esquerda é a chave e o da direita é a variável
            password // pode apagar o email e password da direita 
        }
    }).then(() => {
        
        Cypress.Cookies.defaults({
            preserve:'jwt'
        })
    })
})

Cypress.Commands.add('testeContrato', () => { // Ler a documentação pequisando no google encontra isso
    
    // função que mostra os erros
    const getSchemaError = (ajvErros) => {
        return cy.wrap(
            `Campo: ${ajvErros[0]['instancePath']} é invalido. Erro: ${ajvErros[0]['mesage']}`
        )
    }
})