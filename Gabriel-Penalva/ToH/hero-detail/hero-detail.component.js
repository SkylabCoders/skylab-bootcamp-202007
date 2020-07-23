function HeroDetailComponent() {

	let hero = heroList.find(getParams);




	function getParams(hero) {
		const params = new URLSearchParams(location.search);
		return hero.id === +params.get('heroId');

	}

	this.onInit = function () {
		updateId();
		updateName();
	};

	this.nameChange = function (newName) {
		hero.name = newName;
		updateName();
	};

	function updateId() {
		document.getElementById('hero-detail__id').innerHTML = hero.id;
	}

	function updateName() {
		document.getElementById('hero-detail__name').innerHTML = hero.name;
		document.getElementById('hero-detail__name-control').value = hero.name;
	}
}

const heroDetailComponent = new HeroDetailComponent();
heroDetailComponent.onInit();

console.log(heroDetailComponent);
