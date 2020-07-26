function HeroListComponent(){
    let newHeroesList;
    const divHeroListContainer = document.querySelector(".hero__list__container");
    

    this.callCreator = function(){
        heroListComponent.filterByCriteria();
        divHeroListContainer.innerHTML = '';
        for(let i = 0 ; i < newHeroesList.length; i++){
            createAnchorElement(i, newHeroesList[i].id);
            createSpanElements(newHeroesList, i);
        }    
    }

    this.filterByCriteria = function(){
        const filterInput = document.querySelector('.hero__filter').value.toLowerCase();

        if(filterInput === ''){
            newHeroesList = [...heroList];
        } else { 
            newHeroesList = heroList.reduce(function(counter, hero){
                return filterInput === hero.name.toLowerCase() || +filterInput === hero.id ? (counter = [...counter, hero]) : counter;
            }, []);
        }
        console.log(newHeroesList);
        
    }

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
console.log(heroListComponent);
heroListComponent.callCreator();

