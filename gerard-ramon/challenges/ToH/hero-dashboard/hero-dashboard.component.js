'use strict';

function HeroDashBoardComponent() {
	const componentHeroList = heroList.slice(0, 4);

	this.onInit = function () {
		const heroListContainerElement = document.querySelector(
			'.dashboard__hero-container'
		);
		renderHeroList(componentHeroList).forEach((element) => {
			if (heroListContainerElement) {
				heroListContainerElement.appendChild(element);
			}
		});
	};

	function renderHeroList(heroListParam) {
		return heroListParam.map(renderAnchor);
	}

	function renderAnchor(hero) {
		const elem = document.createElement('a');
		elem.href = getHeroLink(hero.id);
		elem.innerHTML = hero.name;
		return elem;
	}

	function getHeroLink(id) {
		return `../hero-detail/hero-detail.component.html?heroId=${id}`;
	}
}
const myDashboard = new HeroDashBoardComponent();

myDashboard.onInit();
