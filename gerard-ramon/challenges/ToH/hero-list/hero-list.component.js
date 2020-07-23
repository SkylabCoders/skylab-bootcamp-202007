'use strict';

function HeroListComponent() {
	this.heroList = heroList;

	this.onInit = function () {
		const heroListContainerElement = document.querySelector(
			'.hero-list__container'
		);
		renderHeroList(this.heroList).forEach((elem) => {
			if (heroListContainerElement) {
				heroListContainerElement.appendChild(elem);
			}
		});
	};

	function renderHeroList(list) {
		return list.map(renderHeroElements);
	}

	function renderHeroElements(hero) {
		const heroElement = document.createElement('div');
		heroElement.classList.add(`hero-list__hero${hero.id}`, 'hero');
		heroElement.appendChild(renderIdAnchor(hero));
		heroElement.append(renderNameAnchor(hero));
		return heroElement;
	}

	function renderIdAnchor(hero) {
		const elem = document.createElement('a');
		elem.href = getHeroLink(hero.id);
		elem.innerHTML = hero.id;
		elem.classList.add('hero__anchor');
		return elem;
	}

	function renderNameAnchor(hero) {
		const elem = document.createElement('a');
		elem.href = getHeroLink(hero.id);
		elem.innerHTML = hero.name;
		elem.classList.add('hero__name');
		return elem;
	}

	function getHeroLink(id) {
		return `../hero-detail/hero-detail.component.html?heroId=${id}`;
	}
}

const myList = new HeroListComponent();

myList.onInit();
