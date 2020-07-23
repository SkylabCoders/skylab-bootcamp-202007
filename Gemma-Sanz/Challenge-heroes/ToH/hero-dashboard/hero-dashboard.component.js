function HeroDashboardComponent() {
	this.onInit = function () {
		DashboardContent();
	}
	let mainContentDashboard = document.querySelector("#mainContainer--dashboard")

	let DashboardContent = function () {
		debugger
		const maxVisibleItems = 4;
		for (let i = 0; i < maxVisibleItems; i++) {
			let itemDashboard = document.createElement("button");
			mainContentDashboard.appendChild(itemDashboard);
			itemDashboard.innerHTML = heroList[i].name;
		};
	}
	DashboardContent()
}
let dashboardComponent = new HeroDashboardComponent();