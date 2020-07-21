function heroDetail() {
  let data = {
    name: '',
    id: 0
  };

  function createHero(name, id) {
    data.name = name;
    data.id = id;
    return { name: data.name, id: data.id };
  }

  function getName() {
    debugger;
    return data.name;
  }

  function getId() {
    return data.id;
  }

  function setHeroName(name) {
    data.name = name;
    data.id = 11;
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

// export const HEROES: Hero[] = [
//     { id: 11, name: 'Dr Nice' },
//     { id: 12, name: 'Narco' },
//     { id: 13, name: 'Bombasto' },
//     { id: 14, name: 'Celeritas' },
//     { id: 15, name: 'Magneta' },
//     { id: 16, name: 'RubberMan' },
//     { id: 17, name: 'Dynama' },
//     { id: 18, name: 'Dr IQ' },
//     { id: 19, name: 'Magma' },
//     { id: 20, name: 'Tornado' }
//   ];
