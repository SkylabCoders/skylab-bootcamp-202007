'use strict';
function Hero() {
  //fallo de condiciones de carrera
  this.hero = {};
  const createHero = function (heroName, heroId) {
    this.hero = { heroName: heroName, heroId: heroId };
    return this.hero;
  };
  const setName = function (newHeroName) {
    this.hero.heroName = newHeroName;
  };

  const getName = function () {
    return this.hero.heroName;
  };

  const setId = function (newHeroId) {
    this.hero.heroId = newHeroId;
  };

  const getId = function () {
    return this.hero.heroId;
  };

  return { createHero, setName, getName, setId, getId };
}
