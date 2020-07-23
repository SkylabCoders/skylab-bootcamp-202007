function HeroDetailComponent() {
	let hero;

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
		document.getElementById('hero-detail__id').innerHTML = hero.id;
	}

	function updateName() {
		document.getElementById('hero-detail__name').innerHTML = hero.name;
		document.getElementById('hero-detail__name-control').value = hero.name;
	}

	function getHeroFromUrl() {
		const params = new URLSearchParams(location.search);
		return heroList.find(function (hero) {
			return hero.id === +params.get('heroId');
		});
	}
}

const heroDetailComponent = new HeroDetailComponent();
heroDetailComponent.onInit();

console.log(heroDetailComponent);
