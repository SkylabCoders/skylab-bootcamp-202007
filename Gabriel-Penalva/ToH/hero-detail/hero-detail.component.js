function HeroDetailComponent() {

	let hero = "";




	function getParams() {
		const params = new URLSearchParams(location.search);
		const id = +params.get('heroId');
		//return service.getHeroById(id);
		service.getHeroById(id)
			.then(handleFullfill)
			.catch(handleError);



	}
	function handleError(message) {
		document.getElementById('hero_detail').style.display = 'none';
		document.getElementById('hero-detail__error').innerText = message;
	}
	function handleFullfill(response) {
		hero = response;
		updateId();
		updateName();
	}

	this.onInit = function () {
		getParams();
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
}

const heroDetailComponent = new HeroDetailComponent();
heroDetailComponent.onInit();

console.log(heroDetailComponent);
