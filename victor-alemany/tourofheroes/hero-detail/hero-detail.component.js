function HeroDetailComponent() {
	let hero;
	const idElement = document.getElementById('hero-detail__id');
	const nameElement = document.getElementById('hero-detail__name');
	const controlElement = document.getElementById('hero-detail__name-control');

	this.onInit = function () {
		hero = getHeroFromUrl()
		console.log(hero);
		updateId();
		updateName();
	};

	this.nameChange = function (newName) {
		hero.name = newName;
		updateName();
	};

	function updateId() {
		if(idElement){
			idElement.innerHTML = hero.id;
		}
	}

	function updateName() {
		nameElement.innerHTML = hero.name;
		controlElement.value = hero.name;
	}

	function getHeroFromUrl(){
		return heroList.find(compareId);
	}

	function compareId(hero){
		console.log(hero);
		const params = new URLSearchParams(location.search);
		return hero.id === +params.get('heroId');
	}
}

const heroDetailComponent = new HeroDetailComponent();
heroDetailComponent.onInit();