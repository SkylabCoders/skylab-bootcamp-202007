function HeroDetailComponent() {
	const hero = heroList[0];
	
	this.onInit = function () {
		updateId();
		updateName();
	};

	this.nameChange = function (newName) {
		hero.name = newName;
		updateName();
	};

	function updateId() {
		const idElement = document.getElementById('hero-detail__id');
		idElement.innerHTML = hero.id;
	}

	function updateName() {
		const nameElement = document.getElementById('hero-detail__name');
		const nameControlElement = document.getElementById(
			'hero-detail__name-control'
		);
		nameElement.innerHTML = hero.name;
		nameControlElement.value = hero.name;
	}
}

const heroDetailComponent = new HeroDetailComponent();
heroDetailComponent.onInit();

console.log(heroDetailComponent);
