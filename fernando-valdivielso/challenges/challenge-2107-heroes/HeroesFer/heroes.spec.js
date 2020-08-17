describe('Tour of Heroes', function() {
    let hero;
    let id = 1;
    let name = 'test';
    let heroObject = {name: 'test', id: 1}

    beforeEach(function() {
        hero = new Heroes();
    });

    it('should create a hero with name and id', function () {
        hero.createHero(name, id);
        expect(hero.createHero()).toEqual(heroObject)
    })

    it('should set an id', function () {
        hero.setId(id);
        expect(hero.getId()).toEqual(id)
    });

    it('should set a name', function () {
        hero.setName(name);
        expect(hero.getName()).toEqual(name);
    });

    it('should get a name', function () {
        hero.setName(name);
        expect(hero.getName()).toEqual(name);
    });
})