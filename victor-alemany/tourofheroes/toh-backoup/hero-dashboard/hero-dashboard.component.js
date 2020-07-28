function DashboardComponent() {
    let heroTopElements;
    const container = document.querySelector('.container__dashboard');

   /*  this.onInit = function () {
        heroService.getHeroList().then((response => {
            heroTopElements = response.slice(0,4);
            renderHeroList().forEach((element) => {
                if (container) container.appendChild(element);
            });
        })
    )} con promesas */

    this.onInit = function () {
       heroService.getHeroList()
            .then((response)=>{
                heroTopElements = response.slice(0,4);
                renderHeroList().forEach((element) => {
                    if (container) container.appendChild(element);
                });
            })

        .catch((error) => console.log('Algo ha ido mal!',error))
    } //con fetch


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
        return `../hero-detail/hero-detail.component.html?heroId=${id}`;
    };
};

dashboardComponent = new DashboardComponent();
dashboardComponent.onInit();