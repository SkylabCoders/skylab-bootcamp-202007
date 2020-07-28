function ListComponent() {
	let heroesList = heroList;
	const heroListContainer = document.getElementById('list__container');
	const idListContainer = document.getElementById('id__container');

	this.onInit = function () {
        document.getElementById('hero-list__container').style.display = 'none';
		heroService.getHeroList().then(handleFulFilled).catch(handleError);
    };

    function handleFulFilled(response) {
		heroesList = response;
		document.getElementById('hero-list__container').style.display = 'block';
		addIds();
        addNames();
	}

	function handleError(message) {
		document.getElementById('hero-list__container').style.display = 'none';
		document.getElementById('hero-list__error').innerHTML = message;

    }

    function addIds () {
        renderIdList().forEach((element) => {
			if (idListContainer) idListContainer.appendChild(element);
		});
    }

    function addNames () {
        renderHeroList().forEach((element) => {
			if (heroListContainer) heroListContainer.appendChild(element);
		});
    }

    function renderIdList() {
		return heroesList.map(mapIdToAnchor);
	}

	function renderHeroList() {
		return heroesList.map(mapHeroToAnchor);
	}

    function mapIdToAnchor(hero) {
		const element = document.createElement('a');
		element.href = getHeroLink(hero.id);
		element.innerText = hero.id;
		return element;
	}
    
    function mapHeroToAnchor(hero) {
		const element = document.createElement('a');
		element.href = getHeroLink(hero.id);
		element.innerText = hero.name;
		return element;
	}

	function getHeroLink(id) {
		return `../hero-detail/hero-detail.component.html?heroId=${id}`;
	}
}

const listComponent = new ListComponent();
listComponent.onInit();
