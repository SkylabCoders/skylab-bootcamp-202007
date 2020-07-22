function HeroListComponent() {
	const heroes = heroList;
	const listElement = document.getElementById('list');

	this.onInit = function () {
		createList();
	};

	const createList = function () {
		for (let i = 0; i < heroes.length; i++) {
			let listNodesElement = document.createElement('BUTTON');
			listElement.appendChild(listNodesElement);
			listNodesElement.innerHTML = heroes[i].id + '   ' + heroes[i].name;
		}
	};
}

const showHeroList = new HeroListComponent();
showHeroList.onInit();
