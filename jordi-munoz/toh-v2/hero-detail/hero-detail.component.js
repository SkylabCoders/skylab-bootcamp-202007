function HeroDetailComponent() {
	let hero;
	const idElement = document.getElementById('hero-detail__id');
	const nameElement = document.getElementById('hero-detail__name');
	const nameControlElement = document.getElementById('hero-detail__name-control');

	this.onInit = function () {
		document.getElementById('hero-detail__container').style.display = 'none';
		const id = getHeroFromUrl();
		heroService.getHeroById(id).then(handleFulfilled).catch(handleError);
	};

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
	function getHeroFromUrl() {
		const params = new URLSearchParams(location.search);
		return +params.get('heroId');
	}

	function handleFulfilled(response) {
		hero = response;
		document.getElementById('hero-detail__container').style.display = 'block';
		updateId();
		updateName();
	}
	function handleError(message) {
		document.getElementById('hero-detail__container').style.display = 'none';
		document.getElementById('hero-detail__error').innerHTML = message;
	}
}

const heroDetailComponent = new HeroDetailComponent();
heroDetailComponent.onInit();


