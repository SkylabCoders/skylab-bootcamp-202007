function HeroListComponent() {
    let allHeroes;
    const heroListContainer = document.querySelector('.hero__list');

    this.onInit = function () {
        heroService.getHeroList().then((response =>{
            allHeroes = response;
            renderHeroList().forEach((element) => {
                if (heroListContainer) heroListContainer.appendChild(element);
            });
        })
       
    )};




    /*
    function handleFulFilled() {
        toggleLoading();
        //document.getElementById('hero-detail__container').style.display = 'block';
        renderHeroList().forEach((element) => {
            if (heroListContainer) {
                heroListContainer.appendChild(element);
            }
        })
    }*/

    /*
    function handleError(message) {
        toggleLoading();
        document.getElementById('hero-list__container').style.display = 'none';
        document.getElementById('hero-list__error').innerHTML = message;
    }*/

    function toggleLoading() {
        //si está cargando, muestro el loading
        //si no está cargando, lo oculto
        const loadingElement = document.getElementById('hero-list__loading').style.display;
        if (loadingElement.style.display === 'block') {
            loadingElement.style.display = 'none';
        }
        else {
            loadingElement.style.display = 'block';
        }
    }

    function renderHeroList() {
        return allHeroes.map(mapRenderAnchor);
    }

    function mapRenderAnchor(hero) {
        const element = document.createElement('a');
        element.href = getHeroLink(hero.id);
        element.innerHTML = `<span>${hero.id}</span><span>${hero.name}</span>`;
        return element;
    }

    function getHeroLink(id) {
        return `../hero-detail/hero-detail.component.html?heroId=${id}`;
    }
}


const myHeroListComponent = new HeroListComponent();
myHeroListComponent.onInit();



/*
function HeroListComponent () {
    const heroListElements = heroList;
    const container = document.querySelector('.container');


    this.onInit = function createDomElements () {
        for (let i = 0; i < heroListElements.length; i++) {
            let generateDivs = document.createElement('div');
            generateDivs.classList.add(`hero-${i}`);
            generateDivs.classList.add('flex');

            let linkId = document.createElement('a');
            linkId.classList.add('linkId');

            let paragraphName = document.createElement('p');
            paragraphName.classList.add('paragraphName');

            generateDivs.appendChild(linkId);
            generateDivs.appendChild(paragraphName);
            //el padre el último
            container.appendChild(generateDivs);

            printList(i);
        }
    }

    const printList = function (i) {
        const buttonLinkId = document.querySelector(`.hero-${i} a`);
        const buttonName = document.querySelector(`.hero-${i} p`);

        buttonLinkId.innerHTML = heroListElements[i].id;
        buttonName.textContent = heroListElements[i].name;
    }
}


const myHeroList = new HeroListComponent();
myHeroList.onInit();
*/
