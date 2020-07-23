
function DashboardComponent() {
    const fourHeroes = heroList.slice(0, 4);
    const heroListContainer = document.getElementById('dashboard__component');

    this.onInit = function () {
        console.log(heroListContainer);
        renderHeroList().forEach((element) => {
            if (heroListContainer) heroListContainer.appendChild(element);
        })
    }

    let renderHeroList = function () {
        return fourHeroes.map(mapHeroToAnchor);
    }

    function mapHeroToAnchor(hero) {
        const element = document.createElement('a');
        element.href = getHeroLink(hero.id);
        element.innerText = hero.name;
        return element;

    }
    function getHeroLink(id) {
        return `../hero-detail/hero-detail.component.html?heroId=${id}&prop=value`;
    }
}

let dashboardC = new DashboardComponent();
dashboardC.onInit();