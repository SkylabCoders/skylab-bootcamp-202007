function SkylaberListComponent(){
    const allSkylaber = skylaberList;
    const skylaberListContainer = document.getElementById('skylaber__list');

    this.onInit = function (list = allSkylaber){
        document.getElementById('skylaber__list').innerHTML = '';
        renderHeroList(list).forEach((element) =>{
            if(skylaberListContainer){
                skylaberListContainer.appendChild(element);
            }
        })
    }

    function renderHeroList (list){
        return list.map(mapRenderAnchor);
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

    this.filterByProperty = function(searchValue){
        let lengthSearch = searchValue.length;

        let acc = function(acumulator,element){
            if(searchValue === element.name.split('').slice(0,lengthSearch).join('') || searchValue === element.address.city.split('').slice(0,lengthSearch).join('') || searchValue === element.address.country.split('').slice(0,lengthSearch).join('')){
                acumulator = [...acumulator,element];
            }
            return acumulator;
        }
        result = allSkylaber.reduce(acc,[]);

        return this.onInit(result);
    }
       
}

const skylaberListComponent = new SkylaberListComponent();

skylaberListComponent.onInit();