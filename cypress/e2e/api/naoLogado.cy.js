describe('API - Profile', () => {

    context('todos os perfis', () => {

        it('valida a API de perfis', () => {

            cy.request({
                method: 'GET',
                url: '//api/profile'
            })            
        })        
    })    
})