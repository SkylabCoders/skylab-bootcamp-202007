function HeroListComponent() {
	const heroes = heroList;
	this.onInIt = function displayList() {
		const tableElement = document.getElementById('heroListTable');
		tableElement.innerHTML = renderHeroFullList(heroes);
	};
	this.showDetails;
	function renderHeroFullList(heroes) {
		const heroLink = '../hero-detail/hero-detail.component.html';
		let codeRender = '';
		for (let i = 0; i < heroes.length; i++) {
			codeRender +=
				'<td> <a href=' +
				heroLink +
				'>' +
				heroes[i].id +
				'</a></td><td>' +
				heroes[i].name +
				'</td></tr>';
		}
		return codeRender;
	}
}
let listComponent = new HeroListComponent();
listComponent.onInIt();
