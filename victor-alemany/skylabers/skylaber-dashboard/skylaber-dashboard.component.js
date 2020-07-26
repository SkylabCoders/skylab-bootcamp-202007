function DashboardComponent() {
    const allSkylaberPromoted = skylaberList;
    const skylaberDashboardContainer = document.getElementById('skylaber__dashboard');
    
    this.onInit =function (){
        renderSkylaberList().forEach((element) =>{
            if(skylaberDashboardContainer){
                skylaberDashboardContainer.appendChild(element);
            }
        })
    }

    this.getFilteredByChallenge = function(){
        let filteredSkylaber = allSkylaberPromoted;
        return console.log(filteredSkylaber.filter(filterByChallenge));
    }

    function filterByChallenge(skylaber){
        const filter = 4;
        return skylaber.completedChallenges >= filter;
    }

    function renderSkylaberList (){
        return allSkylaberPromoted.map(mapRenderAnchor);
    }

    function mapRenderAnchor(skylaber){
        const element = document.createElement('a');
        element.href = getHeroLink(skylaber.id);
        element.innerHTML = skylaber.name;
        return element;
    }

    function getHeroLink(id){
        return `../skylaber-detail/skylaber-detail.component.html?skylaberId=${id}`;
    }
}

const dashboardComponent = new DashboardComponent();

dashboardComponent.onInit();