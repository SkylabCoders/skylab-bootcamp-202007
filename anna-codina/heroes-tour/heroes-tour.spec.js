describe('Heroes Tour', function () {
    name = 'Rayos'
    newName = 'Retruecanos'
    let hero = {
        name: 'Rayos',
        id: 1,
    };
    beforeEach(function () {
        let myHero = new Hero();
        myHero.createHero(name)
    });
    it('should create a newHero', function () {
        expect(myHero.createHero(name)).toEqual(hero);
    })
    it('should get and get the hero name', function () {
        expect(myHero.getName().toEqual(name))
    })
    it('should set a new name to the hero', function () {
        myHero.setName(newName);
        expect(myHero.getName().toEqual(newName))
    })
    it('should get and get the hero id', function () {
        expect(myHero.getId().toEqual(hero.id))
    })
})