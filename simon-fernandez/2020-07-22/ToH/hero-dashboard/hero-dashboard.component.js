function HeroDashboardComponent() {
	const heroes = heroList;
	this.onInIt = function () {
		displaydDasboard();
	};
	const displaydDasboard = function () {
		let tableElement = document.getElementById('heroDashboardTable');
		let heroLink = '../hero-detail/hero-detail.component.html';
		let tableInsert = '';
		tableInsert += '<tr>';
		for (let i = 0; i < 4; i++) {
			tableInsert +=
				'<td> <button href=' +
				heroLink +
				'>' +
				heroList[i].name +
				'</button></td>';
		}
		tableInsert += '</tr>';
		tableElement.innerHTML = tableInsert;
	};
}
let dashboardComponent = new HeroDashboardComponent();
dashboardComponent.onInIt();
