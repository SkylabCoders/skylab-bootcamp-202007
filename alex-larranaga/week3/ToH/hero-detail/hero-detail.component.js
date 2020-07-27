function HeroDetailComponent() {
	const listOfHeroes = [...heroList];
	let hero;
	this.onInit = function () {
		getHeroIdFromUrl();
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
		//document.getElementById('hero-detail__name-control').value = hero.name;
	}

	function getHeroIdFromUrl() {
		const params = new URLSearchParams(location.search);
		let heroId = +params.get('heroId');
		hero = heroService.getHeroById(heroId);
	}
}

const heroDetailComponent = new HeroDetailComponent();
heroDetailComponent.onInit();
