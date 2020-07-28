function HeroDashboardComponent() {
	let heroes;
	this.onInIt = function displaydDashboard() {
		const listElement = document.getElementById('heroDashboardList');
		heroService.getHeroList().then((response) => {
			heroes = response.slice(0, 4);
			listElement.innerHTML = renderHeroList(heroes);
		});
	};
	function renderHeroList(heroes) {
		return heroes.map(renderAnchor);
	}
	function renderAnchor(hero) {
		const heroLink = '../hero-detail/hero-detail.component.html';
		return `<a href='${heroLink}' >${hero.name}</a>`;
	}
}
let dashboardComponent = new HeroDashboardComponent();
dashboardComponent.onInIt();
