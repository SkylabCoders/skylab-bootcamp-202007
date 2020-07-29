function DashboardComponent() {
	const heroListContainer = document.getElementById('dashboard__container');

	this.onInit = function () {
		heroService
			.getHeroList()
			.then((response) => {
				const heroesPromoted = response.slice(0, 4);
				renderHeroList(heroesPromoted).forEach((element) => {
					if (heroListContainer) heroListContainer.appendChild(element);
				});
			})
			.catch((error) => {
				console.log('Dashboard Error', error);
			});
	};

	function renderHeroList(heroesPromoted) {
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
