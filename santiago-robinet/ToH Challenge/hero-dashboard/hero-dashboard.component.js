
function HeroDashboard(){
    
    const heroes = heroList.slice(0, 4);
    const divButtonContainer = document.querySelector(".hero__butons__container");
    

    function renderHeroList(){
        return heroes.map(hero => renderAnchorTags(hero));
    }

    function renderAnchorTags(hero){
        const heroLink = "../hero-detail/hero-detail.component.html?heroId=13";
        const element = document.createElement('a');
        element.href = heroLink;
        element.innerHTML = hero.name;
        divButtonContainer.appendChild(element);
        return element;
    }
    
    return {renderHeroList, renderAnchorTags}

}

const heroDashboard = new HeroDashboard();

heroDashboard.renderHeroList();
