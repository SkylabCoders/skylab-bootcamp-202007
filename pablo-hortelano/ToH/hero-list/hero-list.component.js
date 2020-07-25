function HeroListComponent() {
	const list = heroList;

	this.onInit = function () {
		updateProps();
	};

	function updateProps() {
		for (let elem of heroList) {
			let listItem = document.createElement('li');
			listItem.innerHTML = `<a ><span class="badge">${elem.id}</span>${elem.name}</a>`;
			document.querySelector('.heroes-list').appendChild(listItem);
		}
	}
}

const heroListComponent = new HeroListComponent();
heroListComponent.onInit();

console.log(heroDetailComponent);
