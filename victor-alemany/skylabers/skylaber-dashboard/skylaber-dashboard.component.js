function DashboardComponent() {
    const allSkylaber = skylaberList.slice(0,4);
    const skylaberDashboardContainer = document.getElementById('skylaber__dashboard');
    
    this.onInit =function (){
        renderSkylaberList().forEach((element) =>{
            if(skylaberDashboardContainer){
                skylaberDashboardContainer.appendChild(element);
            }
        })
    }

    function renderSkylaberList (){
        return allSkylaber.map(mapRenderAnchor);
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