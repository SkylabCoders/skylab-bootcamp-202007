function DashboardComponent() {
	let heroesPromoted;
	const heroListContainer = document.getElementById('dashboard__container');

	this.onInit = function () {
		var styleEl = document.createElement('style');

		// Append <style> element to <head>
		document.head.appendChild(styleEl);
		var styleSheet = styleEl.sheet;
		styleSheet.insertRule('body {background-color: red}', 0);
	};

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
