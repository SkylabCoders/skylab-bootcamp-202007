function SkylaberDashboardComponent() {
    const skylaber = skylaberList.slice(0, 4);
    const mainContentDashboard = document.querySelector(".skylaber-dashboard__container");
    const skylaberDashboardLink = `href=../skylaber-detail/skylaber-detail.component.html`;

    this.onInit = function() {
        renderList().forEach(element => {
            mainContentDashboard && mainContentDashboard.appendChild(element);
        });
    };

    function renderList() {
        return skylaber.map(sercherList);
    }
    let sercherList = function(skylaber) {
        let element = document.createElement("a");
        element.href = gethref(skylaber.id);
        element.innerHTML = skylaber.name;
        return element;
    };

    function gethref(id) {
        return `../skylaber-detail/skylaber-detail.component.html?skylaberId=${id}`
    }
}
let dashboardComponent = new SkylaberDashboardComponent();
dashboardComponent.onInit();