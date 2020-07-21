describe('Tour of Heroes', function() {
    let hero;
    let id = 1;
    let name = 'test';

    beforeEach(function() {
        hero = new Hero();
    });

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