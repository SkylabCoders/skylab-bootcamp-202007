function HeroDetailComponent() {
    let hero;
    const idElement = document.getElementById('hero-detail__id');
    const nameElement = document.getElementById('hero-detail__name');
    const nameConttrolElement = document.getElementById(
        'hero-detail__name-control'
    );
    this.onInit = function() {
        const id = getHeroFromUrl();
        heroService.getHeroById(id).then(handleFulfilled).catch(handleError); //Es lo mismo que poner .then(undefined, handleError). Sería poner dos then en vez de un then y un catch
    };
    this.nameChange = function(newName) {
        hero.name = newName;
        updateName();
    };

    function updateId() {
        if (idElement) idElement.innerHTML = hero.id;
    }

    function updateName() {
        if (nameElement) nameElement.innerHTML = hero.name;
        if (nameConttrolElement) nameConttrolElement.value = hero.name;
    }
    // Lo hacemos llamando al servicio
    function getHeroFromUrl() {
        const params = new URLSearchParams(location.search);
        return +params.get('heroId');
    }

    function handleFulfilled(response) {
        toogleLoading();
        hero = response;
        updateId();
        updateName();
    }

    function handleError(message) {
        toogleLoading();
        document.getElementById('hero-detail__container').style.display = 'none';
        document.getElementById('hero-detail__error').innerHTML = message;
    }
    // si está cargando muestro isLoading
    // si no carga oculto isLoading
    // block es para mostrarlo
    // lo invoco antes de pintar o el error
    function toogleLoading() {
        let loadingElement = document.getElementById('hero-detail__loading');
        if (loadingElement.style.display === 'block') {
            loadingElement.style.display = 'none';
        } else {
            loadingElement.style.display = 'block';
        }
    }
}
const heroDetailComponent = new HeroDetailComponent();
heroDetailComponent.onInit();