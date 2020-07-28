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
	};

	function updateId() {
		if (heroDetail !== null)   heroDetail.innerHTML = hero.id;
	}

	function updateName() {
		document.getElementById('hero-detail__name').innerHTML = hero.name;
		heroName.value = hero.name;
	}

	function getIdFormUrl() {
		// debugger;
		param = (new URLSearchParams(location.search));
		heroId = +param.get('heroid');
		hero = heroService.getHeroById(heroId); //????????
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

console.log(heroDetailComponent);
