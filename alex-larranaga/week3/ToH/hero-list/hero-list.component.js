function HeroListComponent() {
	const heroes = heroList;
	const listElement = document.getElementById('list');

	this.onInit = function () {
		createList();
	};

	const createList = function () {
		for (let i = 0; i < heroes.length; i++) {
			let listNodesElement = document.createElement('a');
			listElement.appendChild(listNodesElement);
			listNodesElement.innerHTML = heroes[i].id + '   ' + heroes[i].name;

			listNodesElement.setAttribute(
				'href',
				`../hero-detail/hero-detail.component.html?heroId=${heroes[i].id}$heroName=${heroes[i].name}`
			);
			listNodesElement.setAttribute('class', 'list__element');
		}
	};
}

const showHeroList = new HeroListComponent();
showHeroList.onInit();
