function HeroListComponent() {
	const heroes = heroList;
	this.onInIt = function () {
		displayList();
	};
	const displayList = function () {
		let tableElement = document.getElementById('heroListTable');
		let heroLink = '../hero-detail/hero-detail.component.html';
		for (let i = 0; i < heroes.length; i++) {
			tableElement.innerHTML +=
				'<tr><td> <button href=' +
				heroLink +
				'>' +
				heroList[i].id +
				'</button></td><td>' +
				heroList[i].name +
				'</td></tr>';
		}
	};
}
let listComponent = new HeroListComponent();
listComponent.onInIt();
