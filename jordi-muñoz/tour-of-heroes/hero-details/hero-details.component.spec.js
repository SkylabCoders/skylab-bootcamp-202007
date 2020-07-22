describe('Heroes Details', function () {
   let hero;
   let id = 11;
   let name = 'Batman';
   let newName = 'Spiderman';
beforeEach(function() {
    hero = new Hero();
});
    it('should create a new heroe', function() {
        expect(hero).toBeTruthy();
    });
    it('should be able to get a name', function() {
        expect(hero.getName()).toEqual(name);
    });
    it('should be able to change a name', function() {
        hero.setName(newName);
        expect(hero.getName()).toEqual(newName);
    });
    it('should be able to get the id', function() {
        expect(hero.getId()).toEqual(id);
    });
})