function SkylaberDashboardComponent() {
    const skylaber = heroList.slice(0, 4);
    const mainContentDashboard = document.querySelector(".skylaber-dashboard__container");
    const heroDashboardLink = `href=../hero-detail/hero-detail.component.html`;

    this.onInit = function() {
        renderList().forEach(element => {
            mainContentDashboard && mainContentDashboard.appendChild(element);
        });
    };

    function renderList() {
        return heroes.map(sercherList);
    }
    let sercherList = function(hero) {
        let element = document.createElement("a");
        element.href = gethref(hero.id);
        element.innerHTML = hero.name;
        return element;
    };

    function gethref(id) {
        return `../hero-detail/hero-detail.component.html?heroId=${id}`
    }
}
let dashboardComponent = new HeroDashboardComponent();
dashboardComponent.onInit();