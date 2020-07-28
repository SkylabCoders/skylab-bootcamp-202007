function HeroDetailComponent() {
	let hero;
	const idElement = document.getElementById('hero-detail__id');
	const nameElement = document.getElementById('hero-detail__name');
	const nameControlElement = document.getElementById('hero-detail__name-control')

	this.onInit = function () {
		//hero = getHeroFromUrl();
		const id = getHeroIdFromUrl();
		heroService.getHeroById(id)
			.then(handleFulfilled)
			.catch(handleError);

	};

	this.nameChange = function (newName) {
		hero.name = newName;
		updateName();
	};

	function updateId() {
		if (idElement)
			idElement.innerHTML = hero.id;
	}

	function updateName() {
		if (nameElement)
			nameElement.innerHTML = hero.name;
		if (nameControlElement)
			nameControlElement.value = hero.name;
	}

	function getHeroIdFromUrl() {
		const params = new URLSearchParams(location.search);
		return +params.get('heroId');
	}


	function handleFulfilled(response) {
		toggleLoading();
		hero = response;
		//document.getElementById('hero-detail__container').style.display = 'block';
		updateId();
		updateName();
	}

	function handleError(message) {
		toggleLoading();
		document.getElementById('hero-detail__container').style.display = 'none';
		document.getElementById('hero-detail__error').innerHTML = message;
	}

	function toggleLoading(){
        //si está cargando, muestro el loading
        //si no está cargando, lo oculto
        const loadingElement = document.getElementById('hero-detail__loading');
        if(loadingElement.style.display === 'block'){
            loadingElement.style.display = 'none';
        }
        else{
            loadingElement.style.display = 'block';
        }
    }

}

const heroDetailComponent = new HeroDetailComponent();
heroDetailComponent.onInit();




