function HeroDetailComponent() {
	const listOfHeroes = [...heroList];
	let hero;
	this.onInit = function () {
		document.getElementById('hero-detail__container').style.display = 'none';
		const heroId = getHeroIdFromUrl();
		heroService.getHeroById(heroId).then(handleFulfilled).catch(handleError);
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
		return +params.get('heroId');
	}
	function handleFulfilled(response) {
		hero = response;
		document.getElementById('hero-detail__container').style.display = 'block';
		updateId();
		updateName();
	}

	function handleError(message) {
		document.getElementById('hero-detail__container').style.display = 'none';
		document.getElementById('hero-detail__error').innerHTML = message;
	}
}

const heroDetailComponent = new HeroDetailComponent();
heroDetailComponent.onInit();
