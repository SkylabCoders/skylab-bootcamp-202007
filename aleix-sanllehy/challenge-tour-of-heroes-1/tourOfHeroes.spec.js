describe('Hero', function(){
    let hero;
    let id = 0;
    let name = 'Hyperion';
    let newName = 'Lelantos';

    beforeEach(function() {
        hero = new Hero();
    })

    it('should be able to retrive a hero name', function(){
        expect(hero.getName()).toEqual(name);
    });

    it('should be able to set a hero name', function(){
        hero.setName(newName);
        expect(hero.getName()).toEqual(newName)
    });

    it('should be able to retrieve a hero id', function(){
        expect(hero.getId()).toEqual(id)
    });

})