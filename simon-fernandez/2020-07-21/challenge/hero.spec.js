describe('Hero', function () {
  let myHero = new Hero(),
    heroName = 'Jorge',
    newHeroName = 'Beto',
    heroId = 20 * Math.random(),
    newHeroId = 20 * Math.random();

  it('should create a hero', function () {
    myHero.createHero(heroName, heroId);
    expect(myHero).toBeDefined;
  });

  it('should display the heroName', function () {
    myHero.setName(newHeroName);
    expect(myHero.getName()).toEqual(newHeroName);
  });

  it('should display the heroId', function () {
    myHero.setId(newHeroId);
    expect(myHero.getId()).toBeTruthy;
  });
});
