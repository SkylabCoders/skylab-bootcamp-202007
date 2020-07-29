function HeroDashBoardComponent() {
	//const slicedHeroList = heroService.getHeroList().then()
	const heroDashContainer = document.getElementById('container');

	this.onInit = function () {
		debugger;
		heroService.getHeroList().then(promoteHeroes).catch(handleError);
	};

	function handleError(message) {
		alert(message);
	}
	function promoteHeroes(heroList) {
		let promotedHeroesList = heroList.slice(0, 4);
		renderHeroList(promotedHeroesList).forEach((element) => {
			if (heroDashContainer) heroDashContainer.appendChild(element);
		});
	}
	function renderHeroList(heroList) {
		return heroList.map(mapHeroToAnchor);
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
