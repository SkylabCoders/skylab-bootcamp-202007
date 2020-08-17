function HeroDetailComponent() {
	let hero;
	const idElement = document.getElementById('hero-detail__id');
	const nameElement = document.getElementById('hero-detail__name');
	const nameConttrolElement = document.getElementById('hero-detail__name-control')

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
		idElement.innerHTML = hero.id;
	}

	function updateName() {
		nameElement.innerHTML = hero.name;
		nameConttrolElement.value = hero.name;
	}

	function getHeroFromUrl () {
		return heroList.find(compareId);
	}

	function compareId (hero) {
		const params = new URLSearchParams(location.search);
		return hero.id === +params.get('heroId');
	}
}

const heroDetailComponent = new HeroDetailComponent();
heroDetailComponent.onInit();

