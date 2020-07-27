'use strict';

function HeroDetailComponent() {
  const allHeroes = heroList;
  let hero;
  const idElement = document.getElementById('hero-detail__id');
  const nameElement = document.getElementById('hero-detail__name');
  const nameControlElement = document.getElementById(
    'hero-detail__name-control'
  );

  this.onInit = function () {
    hero = getHeroFromUrl();
    updateId();
    updateName();
  };

  this.nameChange = function (newName) {
    hero.name = newName;
    updateName();
  };

  function updateId() {
    idElement.innerHTML = hero.id;
    /* 		document.getElementById('hero-detail__id').innerHTML = hero.id;
     */
  }

  function updateName() {
    nameElement.innerHTML = hero.name;
    nameControlElement.value = hero.name;
    /* 		document.getElementById('hero-detail__name').innerHTML = hero.name;
		document.getElementById('hero-detail__name-control').value = hero.name; */
  }

  function getHeroFromUrl() {
    const params = new URLSearchParams(location.search);
    return allHeroes.find(function (hero) {
      return hero.id === +params.get('heroId');
    });
  }
}

const heroDetailComponent = new HeroDetailComponent();

heroDetailComponent.onInit();
