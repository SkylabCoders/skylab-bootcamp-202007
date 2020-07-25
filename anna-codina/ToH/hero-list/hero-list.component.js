'use strict';
function HeroListComponent() {
    const heroListComponent = [...heroList];
    const classId = 'hero-list__id';
    const className = 'hero-list__name';
    const idElement = document.getElementsByClassName(classId);
    const nameElement = document.getElementsByClassName(className);
    const idSection = 'to-details';
    const sectionElement = document.getElementById(idSection);
    const listClass = `hero-list`;
    const heroListElement = document.getElementsByClassName(listClass);

    this.onInit = function () {
        createList();
        printListInfo();
    }
    function createList() {
        let mylist = '';
        for (let i in heroList) {
            const urlId = '?heroId=' + heroListComponent[i].id;
            const newElement = `<li><a href=../hero-detail/hero-detail.component.html${urlId}><span class=${classId}></span><span class=${className}></span></li>`;

            mylist += newElement;
        }
        if (heroListElement[0])
            heroListElement[0].innerHTML = mylist;
    }
    function printListInfo() {
        for (let i in heroListComponent) {
            const actualHero = heroListComponent[i];
            if (idElement[i])
                idElement[i].innerHTML = actualHero.id;
            if (nameElement[i])
                nameElement[i].innerHTML = actualHero.name;
        }
    }

    this.displayDetailsMenu = function () {
        const displayClass = 'flex-column';
        const hidenClass = 'hidden-content';
        sectionElement.classList.remove(hidenClass);
        sectionElement.classList.add(displayClass);
    }

}


const heroListComponent = new HeroListComponent();
heroListComponent.onInit();

console.log(heroListComponent);
