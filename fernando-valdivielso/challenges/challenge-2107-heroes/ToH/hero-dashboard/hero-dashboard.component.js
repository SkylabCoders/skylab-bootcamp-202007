function DashboardComponent() {

    const anchorContainer = document.getElementById('dashboard__hero-list');

    this.onInit = function () {
        const promotedHeroes = heroList.splice(0, 4);
        const promotedHeroesArray = promotedHeroes.map(mapItemsToAnchor);
        promotedHeroesArray.forEach(addAnchorToHtml);


    }

    function addAnchorToHtml(heroAnchor) {
        anchorContainer.appendChild(heroAnchor);

    }

    function mapItemsToAnchor(hero) {
        const transformedElement = document.createElement('a')
        transformedElement.href = '../hero-detail/hero-detail.component.html'
        transformedElement.innerText = hero.name;
        return transformedElement;
    }


}

let dashboardComponent = new DashboardComponent();
dashboardComponent.onInit();

