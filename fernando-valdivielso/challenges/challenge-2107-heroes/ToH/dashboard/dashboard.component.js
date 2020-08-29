function DashboardComponent() {
	let heroesPromoted;
	const heroListContainer = document.getElementById('dashboard__container');

	this.onInit = function () {
		heroService.getHeroList().then(handleFulfilled).catch(handleError);
	
	};

	function handleFulfilled(heroPromise) {
		heroesPromoted = heroPromise.slice(0, 4);
		renderHeroList().forEach((element) => {
			if (heroListContainer) heroListContainer.appendChild(element);
		});
	}

	function handleError(errorMessage) {
		console.log(errorMessage);
	}
		

	function renderHeroList() {
		return heroesPromoted.map(mapHeroToAnchor);
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

const dashboardComponent = new DashboardComponent();
dashboardComponent.onInit();
