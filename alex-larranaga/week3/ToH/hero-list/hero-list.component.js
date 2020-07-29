function HeroListComponent() {
	const listElement = document.getElementById('list');
	this.onInit = function () {
		//let localHeroList =
		heroService.getHeroList().then(handleFulfill).catch(handleError);
		//createList(localHeroList);
	};

	const createList = function (heroesList) {
		for (let i = 0; i < heroesList.length; i++) {
			let listNodesElement = document.createElement('a');
			listElement.appendChild(listNodesElement);
			listNodesElement.innerHTML =
				heroesList[i].id + '   ' + heroesList[i].name;
			listNodesElement.setAttribute(
				'href',
				`../hero-detail/hero-detail.component.html?heroId=${heroesList[i].id}&heroName=${heroesList[i].name}`
			);
			listNodesElement.setAttribute('class', 'list__element');
		}
	};

	const handleFulfill = function (localHeroList) {
		createList(localHeroList);
	};

	const handleError = function (message) {
		alert(message);
	};
}

const showHeroList = new HeroListComponent();
showHeroList.onInit();
