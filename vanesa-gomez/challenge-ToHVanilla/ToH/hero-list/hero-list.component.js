function ListComponent() {
	const myHeroList = heroList;
	const ulElement = document.getElementById('list');
	let listElement = null;
	const elementsToHtml = [];
	let transformedElement = null;
	let idElement = null;
	let nameElement = null;

	this.onInit = function () {
		myHeroList.forEach(listItemsToAnchor);
		addAnchorToHtml(listItemsToAnchor);
	};

	function listItemsToAnchor(heroItems) {
		listElement = document.createElement('li');
		transformedElement = document.createElement('a');
		idElement = document.createElement('span');
		nameElement = document.createElement('span');

		transformedElement.href = '../hero-detail/hero-detail.component.html';
		idElement.innerText = heroItems.id;
		transformedElement.appendChild(idElement);
		nameElement.innerText = heroItems.name;
		transformedElement.appendChild(nameElement);
		listElement.appendChild(transformedElement);
		elementsToHtml.push(listElement);
	}

	function addAnchorToHtml() {
		for (i = 0; i < myHeroList.length; i++) {
			ulElement.appendChild(elementsToHtml[i]);
		}
	}
}

const listComponent = new ListComponent();

listComponent.onInit();
