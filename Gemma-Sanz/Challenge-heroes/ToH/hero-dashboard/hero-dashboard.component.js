function HeroDashboardComponent() {
	const heroes = heroList.slice(0, 4);
	const mainContentDashboard = document.querySelector("#mainContainer__dashboard")
	const heroDashboardLink = `href=../hero-detail/hero-detail.component.html`


	/* let renderAnchor = function (heroes) {
		return `<div><a ${heroDashboardLink} ${heroes.name} </a></div>`
	} */
	this.onInit = function () {
		renderList().forEach(element => {
			mainContentDashboard && mainContentDashboard.appendChild(element);
		})
	};
	function renderList() {
		return heroes.map(sercherList)
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