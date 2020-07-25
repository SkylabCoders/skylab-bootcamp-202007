function HeroDashBoardComponent() {
	const slicedHeroList = heroList.slice(0, 4);
	const heroDashContainer = document.getElementById('container');
	const linkElement = '../hero-detail/hero-detail.component.html';

	this.onInit = function () {
		renderHeroList().forEach((element) => {
			if (heroDashContainer) heroDashContainer.appendChild(element);
		});
	};

	function renderHeroList() {
		return slicedHeroList.map(mapHeroToAnchor);
	}
	function mapHeroToAnchor(hero) {
		const element = document.createElement('a');
		element.href = getHeroLink(hero.id);
		element.innerText = hero.name;
		return element;
	}

	function getHeroLink(id) {
		return `../hero-detail/hero-detail.component.html?heroId=${id}`;
	}
}

const dashboardComponent = new HeroDashBoardComponent();
dashboardComponent.onInit();
