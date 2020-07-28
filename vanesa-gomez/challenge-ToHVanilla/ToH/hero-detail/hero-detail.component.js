function HeroDetailComponent() {
	let hero;
	const idElement = document.getElementById('hero-detail__id');
	const nameElement = document.getElementById('hero-detail__name');
	const nameControlElement = document.getElementById(
		'hero-detail__name-control'
	);

	this.onInit = function () {
		hero = getHeroFromUrl();
		updateId();
		updateName();
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
		hero = heroService.getHeroById(id);
	}

	function compareId(hero) {
		const params = new URLSearchParams(location.search);
		return hero.id === +params.get('heroId');
	}
}

const heroDetailComponent = new HeroDetailComponent();
heroDetailComponent.onInit();
