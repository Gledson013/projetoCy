describe('API - Profile', () => {

    context('todos os perfis', () => {

        it('valida a API de perfis', () => {

            cy.log('Teste de texto')
            
            cy.request({
                method: 'GET',
                url: '/personalization/cl2/freeform/WebsiteDetect?source=wwwhead&fetchType=js&modalView=login'
            }).then(respostaAPI => {
                expect(respostaAPI.status).to.eq(200) // to.eq  to equal significa igualar 
                expect(respostaAPI.duration).to.be.lessThan(10000) // .to.be.lessThan(10000) ser menor que 10 segundos
                expect(respostaAPI.headers.pragma).to.eq('no-cache')
                expect(respostaAPI.headers.allow).to.eq('GET, POST, OPTIONS')
                expect(respostaAPI.headers.date).to.not.be.null // Resultados esperados são objetos com letras, traços e espaços. Ao usar números com letras o teste quebra. 08/01/23 Necessario usar ['valor de busca'] \o/
                expect(respostaAPI.headers['x-frame-options']).to.eq('DENY')  //  Até aqui é o Chai.js e usamos o Expect www.chaijs.com
                expect(respostaAPI.headers['set-cookie']).to.have.lengthOf(2)
            })            
        })        
    })    
})