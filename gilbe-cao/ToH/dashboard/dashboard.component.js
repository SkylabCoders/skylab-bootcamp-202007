function DashboardComponent() {
	const heroesPromoted = heroList.slice(0, 4);
	const heroListContainer = document.getElementById('dashboard__container');

	this.onInit = function () {
		this.renderHeroList().forEach((element) => {
			if (heroListContainer) heroListContainer.appendChild(element);
		});
	};

	this.renderHeroList = function () {
		return heroesPromoted.map(mapHeroToAnchor);
	};

	function mapHeroToAnchor(hero) {
		const heroLink = (id) =>
			`../hero-detail/hero-detail.component.html?heroId=${id}`;
		const element = document.createElement('a');
		element.href = heroLink(hero.id);
		element.innerText = hero.name;
		return element;
	}
}

const dashboardComponent = new DashboardComponent();
dashboardComponent.onInit();
