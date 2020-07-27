'use strict';

function HeroListComponent() {
	this.heroList = heroList;

	this.onInit = function () {
		createDOMElements();
		printHeroes();
	};

	const printHeroes = function () {
		for (const hero in heroList) {
			let tempHero = heroList[hero];
			let tempIdElement = document.querySelector(`.hero-list__hero${hero} a`);
			let tempNameElement = document.querySelector(`.hero-list__hero${hero} p`);

			tempIdElement.innerHTML = tempHero.id;
			tempNameElement.innerHTML = tempHero.name;
		}
	};

	const createDOMElements = function () {
		const listContainerElement = document.querySelector(
			'.hero-list__container'
		);
		for (const hero in heroList) {
			// Create each individual hero element
			const tempHeroElement = document.createElement('div');
			tempHeroElement.classList.add(`hero-list__hero${hero}`, 'hero');
			const tempIdElement = document.createElement('a');
			tempIdElement.href = '../hero-detail/hero-detail.component.html';
			tempIdElement.classList.add(`hero__anchor`);
			const tempNameElement = document.createElement('p');
			tempNameElement.classList.add('hero__name');
			tempHeroElement.appendChild(tempIdElement);
			tempHeroElement.appendChild(tempNameElement);

			// Add the hero element to the container (list)
			listContainerElement.appendChild(tempHeroElement);
		}
	};
}

const myList = new HeroListComponent();

myList.onInit();
