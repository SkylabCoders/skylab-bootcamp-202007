function ListComponent() {
	const myHeroList = heroList;

	this.onInit = function () {
		myHeroList.forEach(listItemsToAnchor);
		addAnchorToHtml(listItemsToAnchor);
	};

	function listItemsToAnchor(heroItems) {
		let transformedElement = document.createElement('a');
		transformedElement.href = '../hero-detail/hero-detail.component.html';
		let idElement = document.createElement('span');
		let nameElement = document.createElement('span');

		idElement.innerText = heroItems.id;
		transformedElement.appendChild(idElement);

		nameElement.innerText = heroItems.name;
		transformedElement.appendChild(nameElement);

		// transformedElement.innerText =
		// 	'id: ' + heroItems.id + '    ' + heroItems.name;
		console.log(transformedElement);
	}

	function addAnchorToHtml(heroAnchor) {}
}

const listComponent = new ListComponent();

listComponent.onInit();
