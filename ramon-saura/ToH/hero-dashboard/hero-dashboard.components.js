function HeroDashboardComponents() {
	let herosPromoted;
	const heroListContainer = document.getElementById('heroDashboardList');

	this.onInIt = function displayDashboard() {
		heroService.getHeroList().then((response) => {
			herosPromoted = response.slice(0, 4);
			renderHeroList().forEach((element) => {
				if (heroListContainer) heroListContainer.appendChild(element);
			});
		});
	};

	function renderHeroList() {
		return herosPromoted.map(mapHeroToAnchor);
	}
	function mapHeroToAnchor(hero) {
		const element = document.createElement('a');
		element.href = getHeroLink(hero.id);
		element.innerText = hero.name;
		return element;
	}
	function getHeroLink(id) {
		return `../hero-detail/hero-detail.component.html?id=${id}`;
	}
}
let dashboardComponent = new HeroDashboardComponents();
dashboardComponent.onInIt();
