function HeroListComponent() {
	const heroes = heroList;
	const listElement = document.getElementById('list');

	/* 	this.createList = function () {
		for (let i = 0; i < this.heroes.length; i++) {
			let listNodesElement = document.createElement('LI');
			listElement.appendChild((listNodesElement.innerHTML = heroes[i]));
		}
	} */
}

const showHeroList = new HeroListComponent();
showHeroList.createList();

console.log(heroes);
