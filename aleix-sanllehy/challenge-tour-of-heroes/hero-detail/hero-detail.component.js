'use strict';

function HeroDetailComponent() {
	const allHeroes = [];
	let hero;
	const idElement = document.getElementById('hero-detail__id');
	const nameElement = document.getElementById('hero-detail__name');
	const nameControlElement = document.getElementById(
		'hero-detail__name-control'
	);

	this.onInit = function () {
		document.getElementById('hero-detail__container').style.display = 'none';
		const id = getHeroIdFromUrl();
		heroService.getHeroById(id).then(handleFulfilled).catch(handleError);
	};

	function getHeroIdFromUrl() {
		const params = new URLSearchParams(location.search);
		return +params.get('heroId');
		// no const is defined here, now it's above in the onInit
		//const id = +params.get('heroId');

		// the section below is deprecated and is moved above inside the onInit
		/* 	heroService
				.getHeroById(id)
				.then(handleFulfilled)
				.then((response) => {
					hero = response;
					updateId();
					updateName();
				})
				.catch(handleError); */
		// setTimeout disabled
		//setTimeout(() => console.log(hero), 3000);
		//return hero;
	}

	function toggleLoading() {
		let loadingElement = document.getElementById('hero-detail__loading');
		if (loadingElement.style.display === 'block') {
			loadingElement.style.display = 'none';
		} else {
			loadingElement.style.display = 'block';
		}
	}

	function handleFulfilled(response) {
		toggleLoading();
		document.getElementById('hero-detail__container').style.display = 'block';
		hero = response;
		updateId();
		updateName();
	}

	function handleError(message) {
		toggleLoading();
		document.getElementById('hero-detail__container').style.display = 'none';
		document.getElementById('hero-detail__error').innerHTML = message;
	}

	/* 	//the function below is deprecated and now works above through the hero service
	function getHeroFromUrl() {
		const params = new URLSearchParams(location.search);
		return allHeroes.find(function (hero) {
			return hero.id === +params.get('heroId');
		});
	}

	//these two functions below works above as a single one
	function getHeroFromUrl() {
		hero = heroList.find(compareId);
	}
	function compareId(hero) {
		const params = new URLSearchParams(location.search);
		return hero.id === +params.get('heroId');
	} */

	this.nameChange = function (newName) {
		hero.name = newName;
		updateName();
	};

	function updateId() {
		idElement.innerHTML = hero.id;
	}

	function updateName() {
		nameElement.innerHTML = hero.name;
		nameControlElement.value = hero.name;
	}
}

const heroDetailComponent = new HeroDetailComponent();
heroDetailComponent.onInit();
