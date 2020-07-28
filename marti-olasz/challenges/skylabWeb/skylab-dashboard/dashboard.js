/*
function Dashboard() {
	const dashboardList = SkylabService.getList().slice(0, 4);
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
const myDashboard = new Dashboard();
myDashboard.drawDashboard();
*/
//////////////////////////////////////////////////////////////////////////////////
class Dashboard {
	static onInit() {
		let dashboardList = null;
		SkylabService.getList()
			.then((response) => {
				dashboardList = response.slice(0, 4);
				return dashboardList;
			})
			.then((list) => this.drawDashboard(list))
			.catch((error) => console.log(error));
	}

	static drawDashboard(dashboardList) {
		const mother = document.querySelector('.dashboard');

		for (let i = 0; i < dashboardList.length; i++) {
			mother.appendChild(this.createItem(dashboardList[i]));
		}
	}

	static createItem(element) {
		const item = document.createElement('a');
		item.href = `../skylab-details/details.html?id=${element.id}`;
		const name = document.createTextNode(element.name);
		item.appendChild(name);
		return item;
	}
}
Dashboard.onInit();
