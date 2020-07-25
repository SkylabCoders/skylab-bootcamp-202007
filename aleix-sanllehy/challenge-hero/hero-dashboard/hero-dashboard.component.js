'use strict';

function HeroDashboardComponent() {
  const allHeroes = heroList;
  const topHeroes = allHeroes.slice(1, 5);
  const heroListContainer = document.getElementById('hero-dashboard');

  this.onInit = function () {
    renderHeroList().forEach(function (heroElement) {
      if (renderHeroList) heroListContainer.appendChild(heroElement);
    });
    /*     createDashboard();
    printDashboard(); */
  };

  const renderHeroList = function () {
    return topHeroes.map(createHeroAnchor);
  };

  const createHeroAnchor = function (hero) {
    const heroElement = document.createElement('a');
    heroElement.href = getHeroLink(hero.id);
    heroElement.innerText = hero.name;
    return heroElement;
  };

  function getHeroLink(id) {
    return `../hero-detail/hero-detail.component.html?heroId=${id}`;
  }

  /*   const createDashboard = function () {
    const heroDashboardContainer = document.getElementById('hero-dashboard');
    for (let i = 0; i < maxNumHeroes.length; i++) {
      const heroElement = document.createElement('div');
      heroElement.classList.add(`hero-dashboard__hero-${i}`);
      const nameElement = document.createElement('a');
      nameElement.classList.add('hero-name');
      nameElement.href = '../hero-detail/hero-detail.component.html';
      heroElement.appendChild(nameElement);
      heroDashboardContainer.appendChild(heroElement);
    }
  };

  const printDashboard = function () {
    for (let i in maxNumHeroes) {
      let hero = maxNumHeroes[i];
      let nameElement = document.querySelector(`.hero-dashboard__hero-${i} a`);
      nameElement.innerHTML = hero.name;
    }
  }; */
}

const heroDashboardComponent = new HeroDashboardComponent();
heroDashboardComponent.onInit();
