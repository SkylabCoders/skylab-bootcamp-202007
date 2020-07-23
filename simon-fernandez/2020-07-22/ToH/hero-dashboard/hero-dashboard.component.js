function HeroDashboardComponent() {
	const heroes = heroList.slice(0, 4);
	this.onInIt = function displaydDashboard() {
		const listElement = document.getElementById('heroDashboardList');
		listElement.innerHTML = renderHeroList(heroes);
	};
	function renderHeroList(heroes) {
		return heroes.map(renderAnchor(hero));
	}
	function renderAnchor(hero) {
		const heroLink = '../hero-detail/hero-detail.component.html';
		return `<a href='${heroLink}' >${hero.name}</a>`;
	}
}
let dashboardComponent = new HeroDashboardComponent();
dashboardComponent.onInIt();
