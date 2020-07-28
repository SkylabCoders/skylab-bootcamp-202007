function HeroListComponent() {
    let allHeroes;
    const heroListContainer = document.querySelector('.hero__list');
    this.onInit = function() {
        heroService
            .getHeroList()
            .then(handleFulfilled)
            .catch((error) => console.log('Something is wrong', error));
    };

    function handleFulfilled(response) {
        allHeroes = response;
        renderHeroList().forEach((element) => {
            if (heroListContainer) {
                heroListContainer.appendChild(element);
            }
        });
    }

    function renderHeroList() {
        return allHeroes.map(mapRenderAnchor);
    }

    function mapRenderAnchor(hero) {
        const element = document.createElement('a');
        element.href = getHeroLink(hero.id);
        element.innerHTML = `<span>${hero.id}</span><span>${hero.name}</span>`;
        return element;
    }

    function getHeroLink(id) {
        return `../hero-detail/hero-detail.component.html?heroId=${id}`;
    }
}
const myHeroListComponent = new HeroListComponent();
myHeroListComponent.onInit();