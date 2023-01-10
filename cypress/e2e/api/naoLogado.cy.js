describe('API - Profile', () => {

    context('todos os perfis', () => {

        it('valida a API de perfis', () => {

            cy.log('Teste de texto')
            
            cy.request({
                method: 'GET',
                url: '/personalization/cl2/freeform/WebsiteDetect?source=wwwhead&fetchType=js&modalView=login'
            }).then(({ status, duration, headers }) => {
                expect(status).to.eq(200) // to.eq  to equal significa igualar 
                expect(duration).to.be.lessThan(10000) // .to.be.lessThan(10000) ser menor que 10 segundos
                expect(headers.pragma).to.eq('no-cache')
                expect(headers.allow).to.eq('GET, POST, OPTIONS')
                expect(headers.date).to.not.be.null // Resultados esperados são objetos com letras, traços e espaços. Ao usar números com letras o teste quebra. 08/01/23 Necessario usar ['valor de busca'] \o/
                expect(headers['x-frame-options']).to.eq('DENY')  //  Até aqui é o Chai.js e usamos o Expect www.chaijs.com
                expect(headers['set-cookie']).to.have.lengthOf(2)
            })            
        })   

    })       
    
    context('perfil específico', () => {

        it('seleciona um usuário inválido', () => {

            cy.request({
                method: 'GET',
                url: '/api/profile/user/1',
                failOnStatusCode: false
            }).then(({ status, headers }) => {
                expect(status).to.eq(421)
                expect(headers['x-netflix.execution-time']).to.eq('0') // Estrutura implicita
            })            
        })

        it('valida um usuário válido', () => {  // Atenção
            cy.request({
                method: 'GET',
                url: '/api/profile/user/1',
                failOnStatusCode: false
            }).then(({ status, }) => {
                expect(status).to.eq(421)
                
            })                

        })

        it.only('valida um usuário válido buscando na base', () => {
            
            cy.request({
                method: 'GET',
                url: '/api/profile'
            }).then(({ body }) => {

                cy.request({
                    method: 'GET',
                    url: `/api/profile/user/${body[1].user._id}`
                }).then(({ status, body }) => {
                    expect(status).to.eq(200)
                    expect(body.status).to.eq('Outro')
                })
            })
        })                
    })
})