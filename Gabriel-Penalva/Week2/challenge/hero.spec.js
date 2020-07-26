describe('Hero', function () {
    let myHero;
    let heroNewName = 'IronMan';
    let heroName = 'Hulk';
    let heroId = 1;
    beforeEach(function () {
        myHero = new Hero(heroName, heroId);
    })
    it('should get the heroName', function () {
        expect(myHero.getName()).toEqual(heroName);
    });
    it('should return the heroId', function () {
        expect(myHero.getId()).toEqual(heroId);
    });
    it("should change the hero's name", function () {
        myHero.setName(heroNewName);
        expect(myHero.getName()).toEqual(heroNewName);
    });

    it('should return an error', function () {
        myHero = Hero();
        expect(myHero).toBe(null);
        myHero = Hero('gab');
        expect(myHero).toBe(null);
        myHero = Hero(3);
        expect(myHero).toBe(null);
    });
});