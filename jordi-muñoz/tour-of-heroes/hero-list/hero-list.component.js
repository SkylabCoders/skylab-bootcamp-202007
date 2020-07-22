function HeroListComponent() {
    componentHeroList = heroList;
    this.createDomElements = function () {
        let container = document.querySelector('.container');
        for (let i = 0; i < componentHeroList.length; i++) {
            let generateDiv = document.createElement('div');
            generateDiv.classList.add(`hero-${i}`);
            let generateA = document.createElement('a');
            generateA.classList.add('anchor');
            let generateP = document.createElement('p');
            generateP.classList.add('para');

            generateDiv.appendChild(generateA);
            generateDiv.appendChild(generateP);
            container.appendChild(generateDiv);

            printHeroes(i);
        }
    }

    const printHeroes = function (i) {
        let tempA = document.querySelector(`.hero-${i} a`);
        let tempP = document.querySelector(`.hero-${i} p`);
        tempA.innerHTML = this.componentHeroList[i].id;
        tempP.innerHTML = this.componentHeroList[i].name;
    }
}
const myHeroList = new HeroListComponent();

myHeroList.createDomElements();
