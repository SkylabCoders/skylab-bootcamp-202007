function HeroDetailComponent() {
	let hero;
	const idElement = document.getElementById('hero-detail__id');
	const nameElement = document.getElementById('hero-detail__name');
	const nameControlElement = document.getElementById(
		'hero-detail__name-control'
	);

	this.onInit = function () {
		getHeroFromUrl();
		
	};

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
		const params = new URLSearchParams(location.search);
		const id = +params.get('heroId');
		heroService.getHeroById(id).then(resolveCorrect).catch(resolveError)
	}

	function resolveCorrect(response) {

		hero = response;
		console.log(response);
		updateId();
		updateName();
	}

	function resolveError(message) {
		document.querySelector('.hero-detail__container').style.display = 'none';
		document.querySelector('.hero-detail__error').innerHTML = message;

	}
}

const heroDetailComponent = new HeroDetailComponent();
heroDetailComponent.onInit();
