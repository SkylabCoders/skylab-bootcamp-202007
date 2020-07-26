function heroDetail() {
  let hero = {
    name: '',
    id: 0
  };

  function createHero(name, id) {
    hero.name = name;
    hero.id = id;
    return { name: hero.name, id: hero.id };
  }

  function getName() {
    return hero.name;
  }

  function getId() {
    return hero.id;
  }

  function setHeroName(name) {
    hero.name = name;
    hero.id = 11;
  }

  return {
    createHero,
    getName,
    getId,
    setHeroName
  };
}

const heroId = document.getElementsByClassName('heroId').innerHTML;
heroId = 'pepeee';

const initHero = new heroDetail();
initHero.name = 'Magneta';
initHero.id = 15;
