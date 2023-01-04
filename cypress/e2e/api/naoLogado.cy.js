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

            })            
        })        
    })    
})