function HeroDetailComponent() {
	const hero;
	const idElement = document.getElementById('hero-detail__id');
	const nameElement = document.getElementById('hero-detail__name');
	const nameConttrolElement = document.getElementById('hero-detail__name-control')

	this.onInit = function () {
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
}

const heroDetailComponent = new HeroDetailComponent();
heroDetailComponent.onInit();
