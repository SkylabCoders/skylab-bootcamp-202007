function HeroDashboardComponents() {
	const heros = heroList.slice(0, 4);
	this.onInIt = function displayDashboard() {
		let listElement = document.getElementById('heroDashboardList');
		listElement.innerHTML = renderHeroList(heros);
	};

	function renderHeroList(heros) {
		return heros.map(renderAnchor);
	}
	function renderAnchor(hero) {
		const heroLink = '../hero-detail/hero-detail.component.html';
		return `<a href='${heroLink}'>${hero.name}</a>`;
	}
}
let dashboardComponent = new HeroDashboardComponents();
dashboardComponent.onInIt();
