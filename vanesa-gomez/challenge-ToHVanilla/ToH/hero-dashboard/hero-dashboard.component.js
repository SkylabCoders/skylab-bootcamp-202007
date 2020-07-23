function DashboardComponent() {
	const anchorContainer = document.getElementById('dashboard__hero-list');
	this.onInit = function () {
		const promotedHeroList = heroList.splice(0, 4);
		const promotedHeroArray = promotedHeroList.map(mapItemToAnchor);
		promotedHeroArray.forEach(addAnchorToHtml);
		getHeroFromUrl();
	};

	function mapItemToAnchor(hero) {
		let transformedElement = document.createElement('a');
		transformedElement.href = '../hero-detail/hero-detail.component.html';
		transformedElement.innerText = hero.name;
		return transformedElement;
	}

	function addAnchorToHtml(heroAnchor) {
		if (anchorContainer) anchorContainer.appendChild(heroAnchor);
		console.log(anchorContainer);
	}

	function getHeroFromUrl() {
		return heroList.find(compareHeroId);
	}

	function compareHeroId(hero) {
		const params = new URLSearchParams(location.search);
		return hero.id === +params.get('heroId');
	}
}

let dashboardComponent = new DashboardComponent();
dashboardComponent.onInit();
