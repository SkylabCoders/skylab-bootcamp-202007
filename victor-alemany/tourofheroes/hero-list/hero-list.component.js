function HeroListComponent() {
    const allHeroes = heroList;
    const heroListContainer = document.getElementById('hero__list');

    this.onInit = function (){
        renderHeroList().forEach((element) =>{
            if(heroListContainer){
                heroListContainer.appendChild(element);
            }
        })
    }

    function renderHeroList (){
        return allHeroes.map(mapRenderAnchor);
    }

    function mapRenderAnchor(hero){
        const element = document.createElement('a');
        element.href = getHeroLink(hero.id);
        element.innerHTML = `<span>${hero.id}</span><span>${hero.name}</span>`;
        return element;
    }

    function getHeroLink(id){
        return `../hero-detail/hero-detail.component.html?heroId=${id}`;
    }
}

const myHeroListComponent = new HeroListComponent();

myHeroListComponent.onInit();



 /*
    this.getAllHeroes =function (){
        
       for (let i = 0; i < allHeroes.length; i++) {
        let newElement = document.createElement('li');
        let idSpan = document.createElement('span');
        let nameSpan = document.createElement('span');
        newElement.classList.add('hero__list-item');
        idSpan.classList.add('id__span');
        idSpan.innerHTML = allHeroes[i].id;
        nameSpan.innerHTML = allHeroes[i].name;
        nameSpan.classList.add('name__span');
        let element = document.getElementById('hero__list');
        newElement.appendChild(idSpan);
        newElement.appendChild(nameSpan);
        element.appendChild(newElement);
       }

    }

    function printList(){

    }*/