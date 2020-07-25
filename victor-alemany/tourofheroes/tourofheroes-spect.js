describe('Tour of Heroes',function(){
    let id = 1;
    let name = 'test';
    let newName = 'pruebaSet';
    let pepito;
    
    beforeEach(function(){
        pepito = new Heroes();
    })

    it('Should create a new hero',function(){
        expect(pepito).toBeTruthy();
    })

    it('Should be able to get a name',function(){
        expect(pepito.getName()).toEqual(name);
    })

    it('Should be able to set a name',function(){
        pepito.setName(newName);
        expect(pepito.getName()).toEqual(newName);
    })

    it('Should be able to get an id',function(){
        expect(pepito.getId()).toEqual(id);
    })
});