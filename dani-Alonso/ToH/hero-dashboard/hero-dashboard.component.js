function HeroDashboardComponent() {
    const heroes = heroList.slice(0, 4);
    const containerDashboard = document.querySelector('.hero-dashboard__container ');

    this.renderHeroList = function() {


        for (let i = 0; i < heroes.length; i++) {
            let divDashboard = document.createElement('div');
            let aTag = document.createElement('a');
            aTag.innerText = heroes[i].name;
            aTag.setAttribute('href', './hero-detail/hero-detail.component.js');
            divDashboard.appendChild(aTag);
            containerDashboard.appendChild(divDashboard);
        }
    };

}
dashboardComponent = new HeroDashboardComponent();

dashboardComponent.renderHeroList();