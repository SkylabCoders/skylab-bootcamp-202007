function HeroDashboardComponent() {
    const heroes = heroList.slice(0, 4);
    this.onInIt = function displaydashboard(){
        let containerList = document.querySelector('.containerList');
        containerList.innerHTML = renderHeroList(heroes);
        
    }
    function renderHeroList(heroes) {
        const heroLink = '../hero-detail/hero-detail.component.html';
        let elements = heroes.map(function(e) {
            return `<a href='${heroLink}' >${e.name}</a>`;
        });
        return elements.join('');
    }
}

let dashboardComponent = new HeroDashboardComponent();
dashboardComponent.onInIt();


