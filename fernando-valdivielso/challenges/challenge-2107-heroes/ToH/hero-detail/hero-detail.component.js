function HeroDetailComponent() {
	const hero = heroList[0];
	let param = null;
	let heroId = null;
	let heroDetail = document.getElementById('hero-detail__id');
	let heroName = document.getElementById('hero-detail__name-control');

	this.onInit = function () {
		updateId();
		updateName();
		getHeroFormUrl();
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

	function getHeroFormUrl() {
		param = (new URL(document.location)).searchParams;
		heroId = params.get('heroid');
		heroDetail.innerText = heroId;
		



	}
}

const heroDetailComponent = new HeroDetailComponent();
heroDetailComponent.onInit();

console.log(heroDetailComponent);
