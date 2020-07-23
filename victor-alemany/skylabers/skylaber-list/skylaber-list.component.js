function SkylaberListComponent(){
    const allSkylaber = skylaberList;
    const skylaberListContainer = document.getElementById('skylaber__list');

    this.onInit = function (){
        renderHeroList().forEach((element) =>{
            if(skylaberListContainer){
                skylaberListContainer.appendChild(element);
            }
        })
    }

    function renderHeroList (){
        return allSkylaber.map(mapRenderAnchor);
    }

    function mapRenderAnchor(skylaber){
        const allSkylaberCity = skylaber.address.city;
        const allSkylaberCountry = skylaber.address.country;
        const element = document.createElement('a');
        element.href = getSkylaberLink(skylaber.id);
        element.innerHTML = `<span>${skylaber.id}</span><span>${skylaber.name}</span><span>${skylaber.completedChallenges}</span><span>${allSkylaberCity}</span><span>${allSkylaberCountry}</span>`;
        return element;
    }

    function getSkylaberLink(id){
        return `../skylaber-detail/skylaber-detail.component.html?skylaberId=${id}`;
    }
}

const skylaberListComponent = new SkylaberListComponent();

skylaberListComponent.onInit();