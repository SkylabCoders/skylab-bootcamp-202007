'use strict';

function HeroListComponent() {
  const allHeroes = heroList;
  const heroListContainer = document.getElementById('hero-list');

  this.onInit = function () {
    renderHeroList().forEach(function (heroElement) {
      if (renderHeroList) heroListContainer.appendChild(heroElement);
    });
    /*     createList();
    printList(); */
  };

  const renderHeroList = function () {
    return allHeroes.map(createHeroAnchor);
  };

  const createHeroAnchor = function (hero) {
    const heroElement = document.createElement('a');
    heroElement.href = getHeroLink(hero.id);
    heroElement.innerHTML = `<span>${hero.id}</span><span>${hero.name}</span>`;
    return heroElement;
  };

  function getHeroLink(id) {
    return `../hero-detail/hero-detail.component.html?heroId=${id}`;
  }

  /*   const createList = function () {
    const heroListContainer = document.getElementById('hero-list');
    for (let i in allHeroes) {
      const heroElement = document.createElement('div');
      heroElement.classList.add(`hero-list__hero-${i}`);

      const idElement = document.createElement('a');
      idElement.href = '../hero-detail/hero-detail.component.html';
      idElement.classList.add('hero-id-anchor');

      const nameElement = document.createElement('p');
      nameElement.classList.add('hero-name');

      heroElement.appendChild(idElement);
      heroElement.appendChild(nameElement);

      heroListContainer.appendChild(heroElement);
    }
  }; */

  /*   const printList = function () {
    for (let i in allHeroes) {
      let hero = allHeroes[i];
      let idElement = document.querySelector(`.hero-list__hero-${i} a`);
      let nameElement = document.querySelector(`.hero-list__hero-${i} p`);
      idElement.innerHTML = hero.id;
      nameElement.innerHTML = hero.name;
    }
  }; */
}

const heroListComponent = new HeroListComponent();
heroListComponent.onInit();
