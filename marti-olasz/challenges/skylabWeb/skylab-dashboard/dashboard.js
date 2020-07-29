function Dashboard() {
	const dashboardList = skylabService.getList().slice(0, 4);
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
<<<<<<< HEAD
=======
*/
//////////////////////////////////////////////////////////////////////////////////
class Dashboard {
	static onInit() {
		let dashboardList = null;
		SkylabService.getList()
			.then((response) => {
				return response.slice(0, 4);
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
>>>>>>> 2eceeb3ff238a42caaf2e2c7e8ab67cde7a1dcb6
