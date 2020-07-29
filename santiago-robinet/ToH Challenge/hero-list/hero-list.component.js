function HeroListComponent(){
    let newHeroesList;
    const divHeroListContainer = document.querySelector(".hero__list__container");
    
    this.onInit = function(){
    
        heroService.getHeroList().then(handleFulfill).catch(handleError);
       
    }

    this.callCreator = function(){        
        divHeroListContainer.innerHTML = '';
        for(let i = 0 ; i < newHeroesList.length; i++){
            createAnchorElement(i, newHeroesList[i].id);
            createSpanElements(newHeroesList, i);
        }    
    }

    function handleFulfill(response){
        newHeroesList = response;
        heroListComponent.callCreator();
    }

    function handleError(message){
        document.querySelector('.hero__list--error').innerHTML = message;
    }

    // function filterByCriteria(aList){
    //     const filterInput = document.querySelector('.hero__filter').value.toLowerCase();

    //     if(filterInput === ''){
    //         aList = [...heroList];
    //     } else { 
    //         aList = heroList.reduce(function(counter, hero){
    //             return filterInput === hero.name.toLowerCase() || +filterInput === hero.id ? (counter = [...counter, hero]) : counter;
    //         }, []);
    //     }
    //     console.log(newHeroesList);
        
    // }

    function createAnchorElement(i, heroId) {
        const heroLink = getHeroId(heroId);
        const anchorElement = document.createElement("a");
        anchorElement.href = heroLink;
        anchorElement.classList.add(`hero__anchor--${i}`, "heroes");
        divHeroListContainer.appendChild(anchorElement);
          
    }

    function getHeroId(id){
        return `../hero-detail/hero-detail.component.html?heroId=${id}`;
    }

    function createSpanElements(list, i) {
        const anchorLink = document.querySelector(`.hero__anchor--${i}`);
        const idSpanElement = document.createElement("span");
        const nameSpanElement = document.createElement("span");
        idSpanElement.classList.add(`hero__id`, "badge");
        idSpanElement.innerHTML = list[i].id;
        nameSpanElement.classList.add("hero__name");
        nameSpanElement.innerHTML = list[i].name;

        anchorLink.appendChild(idSpanElement);
        anchorLink.appendChild(nameSpanElement);
    }

    
}


const heroListComponent = new HeroListComponent;

heroListComponent.onInit();

