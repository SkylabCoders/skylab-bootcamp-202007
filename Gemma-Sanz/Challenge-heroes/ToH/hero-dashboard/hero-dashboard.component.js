function HeroDashboardComponent() {
	const heroes = heroList;
	let mainContentDashboard = document.querySelector("#mainContainer--dashboard")

	this.onInit = function DashboardContent() {
		debugger
		const maxVisibleItems = heroes.slice(0, 4);
		for (let i = 0; i < maxVisibleItems.length; i++) {
			let itemDashboard = document.createElement("button");
			mainContentDashboard.appendChild(itemDashboard);
			itemDashboard.innerHTML = maxVisibleItems[i].name;
		};
	}
	DashboardContent()
}
let dashboardComponent = new HeroDashboardComponent();
dashboardComponent.onInit();