function DashboardComponent() {
    const heroTopElements = heroList.slice(0, 4);
    const container = document.querySelector('.container__dashboard');

    this.onInit = function () {
        renderHeroList().forEach((element) => {
            if (container) container.appendChild(element);
        });
    };

    function renderHeroList() {
        return heroTopElements.map(mapHeroAnchor);
    };

    function mapHeroAnchor(hero) {
        const element = document.createElement('a');
        element.href = getHeroLink(hero.id);
        element.innerText = hero.name;
        return element;
    };

    function getHeroLink(id) {
        // Sin espacio en el = porque no estoy asignando valor, es solo para la dirección url que me da el link
        return `./?heroId=${id}`;
    };
};

dashboardComponent = new DashboardComponent();
dashboardComponent.onInit();

