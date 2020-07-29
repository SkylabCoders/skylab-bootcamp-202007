function HeroDashboardComponent() {
	let heroesPromoted;
	heroesList = heroList;

	//	const heroes = heroList.slice(0, 4);
	const mainContentDashboard = document.querySelector("#mainContainer__dashboard")
	//	const heroDashboardLink = `href=../hero-detail/hero-detail.component.html`

	this.onInit = function () {

		heroService.getHeroList().then((response) => {
			heroesPromoted = response.slice(0, 4);
			renderList().forEach((element) => {
				mainContentDashboard && mainContentDashboard.appendChild(element);
			});
		})
	};
	function renderList() {
		return heroList.slice(0, 4).map(sercherList)
	}

	let sercherList = function (hero) {
		let element = document.createElement("a");
		element.href = gethref(hero.id)
		element.innerHTML = hero.name
		return element;
	}
	function gethref(id) {
		return `../hero-detail/hero-detail.component.html?heroId=${id}`
	}

}

let dashboardComponent = new HeroDashboardComponent();
dashboardComponent.onInit();