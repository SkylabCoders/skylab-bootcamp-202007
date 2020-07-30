describe('tour of heroes', function() {
    let id = 1;
    let name = 'test';
    let hero;
    let newName = 'prueba';

    beforeEach(function() {
        hero = new Heroes();
    });

    it('sould create the new hero', function() {
        expect(hero).toBeTruthy();
    });

    it('sould be able to get a name', function() {
        expect(hero.getName()).toEqual(name);
    });
    it('sould be able to set a name', function() {
        hero.setName(newName);
        expect(hero.getName()).toEqual(newName);
    });

    it('sould be able to get an id', function() {
        expect(hero.getId()).toEqual(id);
    });
});