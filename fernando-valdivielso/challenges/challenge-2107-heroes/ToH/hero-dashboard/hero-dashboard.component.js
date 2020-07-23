function DashboardComponent() {
    
    this.onInit = function () {
        const promotedHeroes = heroList.splice(0, 4);
    }
}

let dashboardComponent = new DashboardComponent();
dashboardComponent.onInit();