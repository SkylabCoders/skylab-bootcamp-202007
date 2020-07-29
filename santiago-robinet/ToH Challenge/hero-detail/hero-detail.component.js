function HeroDetailComponent() {
	let hero;

	this.onInit = function () {

		document.querySelector('.hero__detail--container').style.display = 'none';
		const id = getHeroFromUrl();
		heroService.getHeroById(id).then(handleFulfilled).catch(handleError);
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
		return id;
	}

	function handleFulfilled(response){
		hero = response;
		document.querySelector('.hero__detail--container').style.display = 'block';
		updateId();
		updateName();
	}

	function handleError(message){
		document.querySelector('.hero__detail--container').style.display = 'none';
		document.querySelector('.hero__detail--error').innerHTML = message;
	}

}

const heroDetailComponent = new HeroDetailComponent();
heroDetailComponent.onInit();

console.log(heroDetailComponent);

