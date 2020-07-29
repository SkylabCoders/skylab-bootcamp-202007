'use strict';
function HeroDetailComponent() {
	let hero;
	const idElement = document.getElementById('hero-detail__id');
	const nameElement = document.getElementById('hero-detail__name');
	const nameControlElement = document.getElementById('hero-detail__name-control');
	this.onInit = function () {
		const id = getHeroIdFromUrl()
		heroService.getHeroById(id)
			.then(handleFulfielld)
			.catch(handleError);
	};

	function getHeroIdFromUrl() {
		const params = new URLSearchParams(location.search);
		return +params.get('heroId');
	}
	function handleFulfielld(response) {
		toggleLoading()
		document.getElementById('hero-detail__container').style.display = 'block'
		hero = response;
		updateId();
		updateName();
	}
	function handleError(message) {
		toggleLoading();
		document.getElementById('hero-detail__error').innerHTML = message;
	}

	function toggleLoading() {
		let loadingElement = document.getElementById('hero-detail__loading');
		if (loadingElement.style.display === 'block') {
			loadingElement.style.display = 'none';
		} else {
			loadingElement.style.display = 'block'
		}
	}

	this.nameChange = function (newName) {
		hero.name = newName;
		updateName();
	};

	function updateId() {
		if (idElement)
			idElement.innerHTML = hero.id;
	}

	function updateName() {
		if (nameElement)
			nameElement.innerHTML = hero.name;
		if (nameControlElement)
			nameControlElement.value = hero.name;
	}

}


const heroDetailComponent = new HeroDetailComponent();
heroDetailComponent.onInit();
