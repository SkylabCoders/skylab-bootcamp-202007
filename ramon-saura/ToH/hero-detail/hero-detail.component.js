function HeroDetailComponent() {
	let myHero;

	this.onInit = function () {
		getHeroFromUrl();
		updateId();
		updateName();
	};

	this.nameChange = function (newName) {
		hero.name = newName;
		updateName();
	};

	function updateId() {
		document.getElementById('hero-detail__id').innerHTML = myHero.id;
	}

	function updateName() {
		document.getElementById('hero-detail__name').innerHTML = myHero.name;
		document.getElementById('hero-detail__name-control').value = myHero.name;
	}
	function getHeroFromUrl() {
		myHero = heroList.find(compareId);
	}
	function compareId(hero) {
		const params = new URLSearchParams(location.search);
		return hero.id === +params.get('id');
	}
}

const heroDetailComponent = new HeroDetailComponent();
heroDetailComponent.onInit();

console.log(heroDetailComponent);
