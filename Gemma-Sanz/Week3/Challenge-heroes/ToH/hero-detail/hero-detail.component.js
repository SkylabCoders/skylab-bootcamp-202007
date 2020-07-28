function HeroDetailComponent() {
	let hero;
	const idElement = document.getElementById('hero-detail__id');
	const nameElement = document.getElementById('hero-detail__name');
	const nameControlElement = document.getElementById('hero-detail__name-control');

	this.onInit = function () {
		document.getElementById("hero-detail__container").style.display = "none";
		const id = getHeroFromUrl();
		heroService.getHeroById(id).then(handleFulfilled).catch(handleError);
	};

	function handleFulfilled(response) {
		toddleLoading();
		hero = response;
		document.getElementById("hero-detail__container").style.display = "block";
		updateId();
		updateName();
	};

	function handleError(message) {
		toddleLoading();
		document.getElementById("hero-detail__container").style.display = "none";
		document.getElementById("hero-detail__error").innerHTML = message;
	}

	function toddleLoading() {
		let loadingElement = document.getElementById("hero-detail__loading");
		if (loadingElement.style.display === "block") {
			loadingElement.style.display = "none";
		} else {
			loadingElement.style.display = "block";
		}
	}
	this.nameChange = function (newName) {
		hero.name = newName;
		updateName();
	};

	function updateId() {
		idElement.innerHTML = hero.id;
	}

	function updateName() {
		nameElement.innerHTML = hero.name;
		nameControlElement.value = hero.name;
	}

	function getHeroFromUrl() {
		const params = new URLSearchParams(location.search);
		return +params.get("heroId");
		//		setTimeout(() => console.log(hero), 3000);
	};
}

const heroDetailComponent = new HeroDetailComponent();
heroDetailComponent.onInit();

console.log(heroDetailComponent);
