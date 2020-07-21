describe('Hero', function () {
    let dataHero = {
        name: '',
        id: null
    };
    let hero;

    beforeEach(function () {
        hero = new Hero();
    })

    it('sould create the new hero', function () {
        expect(hero).toBeTruthy();
    })

    it('should return hero name', function () {
        expect(hero.heroName()).toEqual(dataHero.name);
    })

    it('sould be able to set a name', function () {
        hero.setHeroName(newHeroName);
        expect(hero.getHeroName()).toEqual(newHeroName);
    })

    it('should be able to hero id', function () {
        expect(hero.getHeroId()).toEqual(dataHero.id);
    })
})