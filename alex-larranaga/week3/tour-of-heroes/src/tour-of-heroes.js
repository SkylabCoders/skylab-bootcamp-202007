let heading = document.getElementsByTagName('h2')[0];
let heroId = document.getElementById('hero_id');
var heroName = document.getElementById('name_input');

function Heroes() {
  let id;
  let name;

  function createHero(name, id) {
    this.id = id;
    this.name = name;
    return { name, id };
  }

  function setID(id) {
    this.id = id;
  }

  function getID() {
    return this.id;
  }

  function setName(name) {
    this.name = name;
  }

  function getName() {
    return this.name;
  }

  return { createHero, setID, getID, setName, getName };
}

let spiderman = new Heroes();
spiderman.createHero('Spiderman', 1);
let batman = new Heroes();
batman.createHero('Spiderman', 2);
/* 
heroName.addEventListener('input', function () {
  if (heroName.value === spiderman.getName() || heroName.value === batman.getName()) {
    heading.innerHTML = spiderman.getName();
    heroId.innerHTML = spiderman.getID();
  } else if (heroName.value === batman.getName()) {
    heading.innerHTML = batman.getName();
    heroId.innerHTML = batman.getID();
  }
}); */

function showData() {
  heading.innerHTML = name + 'details';
}
