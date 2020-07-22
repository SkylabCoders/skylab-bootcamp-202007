function HeroListComponent () {
    heroesList = heroList;

    const createDomElements = function () {
        let container = document.querySelector('.container');

        for (let i = 0; i < heroesList.length; i++) {
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
        let buttonLinkId = document.querySelector(`.hero-${i} a`);
        let buttonName = document.querySelector(`.hero-${i} p`);
        
        buttonLinkId.innerHTML = this.heroesList[i].id;
        buttonName.textContent = this.heroesList[i].name;
    }

    this.buttonListHeroes = function() {
        let buttonHeroes = document.querySelector('btn-heroes');
        buttonHeroes.addEventListener('click', function() {
            createDomElements();
        })
    }
}


const myHeroList = new HeroListComponent();
myHeroList.buttonListHeroes(); 



/*
let container = document.querySelector('.container')
        let fragment = document.createDocumentFragment();

        for (let i = 0; i < heroList.length; i++) {
            let generateDiv = document.createElement('DIV');
            fragment.appendChild(generateDiv);
            generateDiv.classList.add('bck-color');
        }
        container.appendChild(fragment);

*/
