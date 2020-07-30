function HeroDetailComponent() {
	let myHero;

	this.onInit = function () {
		document.getElementById('hero-detail__container').style.display = 'none';
		const id = getHeroFromUrl();
		heroService.getHeroById(id).then(handleFulfilled).catch(handleError);
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
		const params = new URLSearchParams(location.search);
		return +params.get('id');
	}
	function handleFulfilled(response) {
		document.getElementById('hero-detail__container').style.display = 'block';
		if (response === undefined) {
			handleError("This hero doesn't exist");
		} else {
			toggleLoading();
			myHero = response;
			updateId();
			updateName();
		}
	}
	function toggleLoading() {
		let loadingElement = document.getElementById('hero-detail__loading');
		if (loadingElement.style.display === 'block') {
			loadingElement.style.display = 'none';
		} else {
			loadingElement.style.display = 'block';
		}
	}
	function handleError(message) {
		toggleLoading();
		document.getElementById('hero-detail__container').style.display = 'none';
		document.getElementById('hero-detail__error').innerHTML = message;
	}
}

const heroDetailComponent = new HeroDetailComponent();
heroDetailComponent.onInit();

console.log(heroDetailComponent);
