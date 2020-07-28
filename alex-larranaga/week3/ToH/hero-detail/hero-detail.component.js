function HeroDetailComponent() {
	const hero = getHeroIdFromUrl();

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

	function getHeroIdFromUrl() {
		const params = new URLSearchParams(location.search);
		var heroIdandName = heroList.find((h) => h.id === +params.get('heroId'));
		return heroIdandName;
	}
}

const heroDetailComponent = new HeroDetailComponent();
heroDetailComponent.onInit();

console.log(heroDetailComponent);
