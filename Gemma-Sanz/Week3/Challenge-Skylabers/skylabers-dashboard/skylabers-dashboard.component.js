function SkylaberDashboardComponent() {
	const skylabers = skylaberList.slice(0, 4);
	const mainContentDashboard = document.querySelector("#mainContainer__dashboard")
	const skylaberDashboardLink = `href=../skylabers-detail/skylabers-detail.component.html`


	/* let renderAnchor = function (skylabers) {
		return `<div><a ${skylaberDashboardLink} ${skylabers.name} </a></div>`
	} */
	this.onInit = function () {
		renderList().forEach(element => {
			mainContentDashboard && mainContentDashboard.appendChild(element);
		})
	};
	function renderList() {
		return skylabers.map(sercherList)
	}

	let sercherList = function (skylaber) {
		let element = document.createElement("a");
		element.href = gethref(skylaber.id)
		element.innerHTML = skylaber.name
		return element;
	}
	function gethref(id) {
		return `../skylabers-detail/skylabers-detail.component.html?skylaberId=${id}`
	}

}

let dashboardComponent = new SkylaberDashboardComponent();
dashboardComponent.onInit();