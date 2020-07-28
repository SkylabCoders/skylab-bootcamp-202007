function HeroDetailComponent() {
	let hero;
	const idElement = document.getElementById('hero-detail__id');
	const nameElement = document.getElementById('hero-detail__name');
	const nameControlElement = document.getElementById(
		'hero-detail__name-control'
	);

	this.onInit = function () {
		document.getElementById('hero-detail__container').style.display = 'none';
		const id = getHeroIdFromUrl();
		// heroService.getHeroById(id).then(handleFulFilled).catch(handleError);
		debugger;
		heroService
			.getHeroById(id)
			.then((response) => {
				// if (!response) throw 'No hay hero';
				handleFulFilled(response);
			})
			.catch(handleError);
	};

	function getHeroIdFromUrl() {
		const params = new URLSearchParams(location.search);
		return +params.get('heroId');
	}

	function handleFulFilled(response) {
		hero = response;
		console.log(response);
		document.getElementById('hero-detail__container').style.display = 'block';
		updateId();
		updateName();
	}

	function handleError(message) {
		document.getElementById('hero-detail__container').style.display = 'none';
		document.getElementById('hero-detail__error').innerHTML = message;
	}

	this.nameChange = function (newName) {
		hero.name = newName;
		updateName();
	};

	function updateId() {
		if (idElement) idElement.innerHTML = hero.id;
	}

	function updateName() {
		if (nameElement) nameElement.innerHTML = hero.name;
		if (nameControlElement) nameControlElement.value = hero.name;
	}

	function getHeroFromUrl() {
		hero = heroList.find(compareId);
	}
}

const heroDetailComponent = new HeroDetailComponent();
heroDetailComponent.onInit();

// function HeroDetailComponent() {
// 	let hero;
// 	const idElement = document.getElementById('hero-detail__id');
// 	const nameElement = document.getElementById('hero-detail__name');
// 	const nameControlElement = document.getElementById(
// 		'hero-detail__name-control'
// 	);

// 	this.onInit = function () {
// 		getHeroFromUrl();
// 		updateId();
// 		updateName();
// 	};

// 	this.nameChange = function (newName) {
// 		hero.name = newName;
// 		updateName();
// 	};

// 	function updateId() {
// 		if (idElement) idElement.innerHTML = hero.id;
// 	}

// 	function updateName() {
// 		if (nameElement) nameElement.innerHTML = hero.name;
// 		if (nameControlElement) nameControlElement.value = hero.name;
// 	}

// 	function getHeroFromUrl() {
// 		hero = heroList.find(compareId);
// 	}

// 	function compareId(hero) {
// 		const params = new URLSearchParams(location.search);
// 		return hero.id === +params.get('heroId');
// 	}
// }

// const heroDetailComponent = new HeroDetailComponent();
// heroDetailComponent.onInit();
