describe('Tour of Heroes', function() {
  let myHero = new Hero();
  let name = 'Magneto';
  let hero = { name: 'Magneto' }

    it('should create the hero', function() {
        expect(myHero.createHero(name)).toEqual(hero);
    });
});
