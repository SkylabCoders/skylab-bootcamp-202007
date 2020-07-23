function Dashboard() {
	const dashboardList = skylaberList.slice(0, 4);
	const mother = document.querySelector('.dashboard');
	this.drawDashboard = function () {
		for (let i = 0; i < dashboardList.length; i++) {
			mother.appendChild(createItem(dashboardList[i]));
		}
	};

	function createItem(element) {
		const item = document.createElement('a');
		item.href = `../skylab-details/details.html?id=${element.id}`;
		const name = document.createTextNode(element.name);
		item.appendChild(name);
		return item;
	}
}
myDashboard = new Dashboard();
myDashboard.drawDashboard();
