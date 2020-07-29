
function HeroDashboard(){
    
    let heroes;
    const divButtonContainer = document.querySelector(".hero__butons__container");
    
    this.onInit = function(){
        heroService.getHeroList().then((response) => {
            heroes = response.slice(0,4);
            renderHeroList().forEach((element) => {if(divButtonContainer) divButtonContainer.appendChild(element)
            });
        }).catch((error) => console.log('Something is wriong: ', error));
    }

    function renderHeroList(){
        return heroes.map(mapHeroToAnchor);
    }

    function mapHeroToAnchor(hero){
        const element = document.createElement('a');
        element.href = getHeroLink(hero.id);
        element.innerHTML = hero.name;
        return element;
    }

    function getHeroLink(id){
        return `../hero-detail/hero-detail.component.html?heroId=${id}`;
    }
    

}

const heroDashboard = new HeroDashboard();

heroDashboard.onInit();
