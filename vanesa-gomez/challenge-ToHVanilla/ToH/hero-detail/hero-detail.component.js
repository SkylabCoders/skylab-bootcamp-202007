function HeroDetailComponent() {
	let hero = null;
	let param = null;
	let heroId = null;
	let heroDetail = document.getElementById('hero-detail__id');
	let heroName = document.getElementById('hero-detail__name-control');
	this.onInit = function () {
		getIdFormUrl();
		hero = getHeroNameFromList(heroList);
		updateId();
		updateName();
	};
	this.nameChange = function (newName) {
		hero.name = newName;
		updateName();
		heroList.forEach((currentHero) => {
			if (currentHero.name === newName) {
				hero.id = currentHero.id;
			}
		});
		updateId();
	};
	function updateId() {
		heroDetail.innerHTML = hero.id;
	}
	function updateName() {
		document.getElementById('hero-detail__name').innerHTML = hero.name;
		heroName.value = hero.name;
	}
	function getIdFormUrl() {
		param = new URLSearchParams(location.search);
		heroId = +param.get('heroid');
	}
	function getHeroNameFromList(heroList) {
		return heroList.find(getName);
	}
	function getName(element) {
		return element.id === heroId;
	}
}
const heroDetailComponent = new HeroDetailComponent();
heroDetailComponent.onInit();
