function HeroListComponent(){
    const newHeroesList = heroList;
    const divHeroListContainer = document.querySelector(".hero__list__container");


    this.callCreator = function(){
        for(let i = 0 ; i < newHeroesList.length; i++){
            createAnchorElement(i);
            createSpanElements(newHeroesList, i);
        }    
    }

    function createAnchorElement(i) {
        const heroLink = "../hero-detail/hero-detail.component.html";
        const anchorElement = document.createElement("a");
        anchorElement.href = heroLink;
        anchorElement.classList.add(`hero__anchor--${i}`, "heroes");
        divHeroListContainer.appendChild(anchorElement);
        return anchorElement        
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

