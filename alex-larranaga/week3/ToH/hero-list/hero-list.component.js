function HeroListComponent() {
	this.heroes = heroList;
	const listElement = document.getElementById('list');

	this.createList = function () {
		for (let i = 0; i < this.heroes.length; i++) {
			let listNodesElement = document.createElement('LI');
			listElement.appendChild(listNodesElement);
		}
	};
}

const showHeroList = new HeroListComponent();
showHeroList.createList();
