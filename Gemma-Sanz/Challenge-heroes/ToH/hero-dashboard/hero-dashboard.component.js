function HeroDashboardComponent() {
	const heroes = heroList;
	this.onInit = function () {
		DashboardContent();
	}
	let mainContentDashboard = document.querySelector("#mainContainer--dashboard")

	let DashboardContent = function () {
		debugger
		const maxVisibleItems = heroes.slice(0, 4);
		for (let i = 0; i < maxVisibleItems.length; i++) {
			let itemDashboard = document.createElement("button");
			mainContentDashboard.appendChild(itemDashboard);
			itemDashboard.innerHTML = heroList[i].name;
		};
	}
	DashboardContent()
}
let dashboardComponent = new HeroDashboardComponent();
dashboardComponent.onInit();