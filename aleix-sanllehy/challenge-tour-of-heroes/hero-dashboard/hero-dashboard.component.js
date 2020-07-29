'use strict';

function HeroDashboardComponent() {
	let topHeroes;
	const heroListContainer = document.getElementById('hero-dashboard');

	this.onInit = function () {
		toggleLoading();
		heroService
			.getHeroList()
			.then((response) => {
				topHeroes = response.slice(1, 5);
				renderHeroList().forEach(function (heroElement) {
					if (renderHeroList) heroListContainer.appendChild(heroElement);
				});
			})
			.catch((reject) => {
				console.log(reject);
			});

		//createDashboard();
		//printDashboard();
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

	function toggleLoading() {
		let loadingElement = document.getElementById('hero-detail__loading');
		if (loadingElement.style.display === 'block') {
			loadingElement.style.display = 'none';
		} else {
			loadingElement.style.display = 'block';
		}
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
