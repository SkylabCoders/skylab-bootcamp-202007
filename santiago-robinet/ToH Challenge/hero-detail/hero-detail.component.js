function HeroDetailComponent() {
	let hero;

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
		document.getElementById('hero-detail__id').innerHTML = hero.id;
	}

	function updateName() {
		document.getElementById('hero-detail__name').innerHTML = hero.name;
		document.getElementById('hero-detail__name-control').value = hero.name;
	}

	function getHeroFromUrl(){
		
		const params = new URLSearchParams(location.search);
		const id = +params.get('heroId');
		hero = heroService.getHeroById(id)
	}

}

const heroDetailComponent = new HeroDetailComponent();
heroDetailComponent.onInit();

console.log(heroDetailComponent);
