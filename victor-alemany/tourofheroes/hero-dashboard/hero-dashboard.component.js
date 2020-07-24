function DashboardComponent() {
    const allHeroes = heroList.slice(0,4);
    const heroDashboardContainer = document.getElementById('hero__dashboard');
    
    this.onInit =function (){
        renderHeroList().forEach((element) =>{
            if(heroDashboardContainer){
                heroDashboardContainer.appendChild(element);
            }
        })
    }

    function renderHeroList (){
        return allHeroes.map(mapRenderAnchor);
    }

    function mapRenderAnchor(hero){
        const element = document.createElement('a');
        element.href = getHeroLink(hero.id);
        element.innerHTML = hero.name;
        return element;
    }

    function getHeroLink(id){
        return `../hero-detail/hero-detail.component.html?heroId=${id}`;
    }
}

const dashboardComponent = new DashboardComponent();

dashboardComponent.onInit();