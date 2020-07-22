let mainContentDashboard = document.querySelector("#mainContainer--dashboard")

function DashboardContent() {
	debugger
	for (let i = 0; i < 3; i++) {
		let itemDashboard = document.createElement("button");
		mainContentDashboard.appendChild(itemDashboard);
		itemDashboard.innerHTML = heroList[i].name;
	};
}
DashboardContent()