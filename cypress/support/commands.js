import Ajv from 'ajv'
import { definitionHelper } from '../utils/schemaDefinitions'

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
    const getSchemaError = ajvErros => {
        return cy.wrap(
            `Campo: ${ajvErros[0]['instancePath']} é invalido. Erro: ${ajvErros[0]['mesage']}`
        )
    }

    // iniciar o AJV
    const ajv = new Ajv()
    const validacao = ajv.addSchema(definitionHelper).compile(schema)
    const valido = validacao(resposta)

    // verificar se o schema passou ou falhou
    if (!valido) {     // o símbolo de exclamação ! é usado para inverter o resultado da condição
        getSchemaError(validacao.errors).then(schemaError => {
            throw new Error(schemaError)
        })
    } else 
        expect(valido, 'Validação de contrato').to.be.true
       
    
})

// seleciona um elemento pelo atributo data-test
Cypress.Commands.add('getElement', seletor => {
    return cy.get(`[data-test=${seletor}]`)
})