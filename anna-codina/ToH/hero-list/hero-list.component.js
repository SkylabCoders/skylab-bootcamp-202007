'use strict';
function HeroListComponent() {
    let heroListComp;
    const classId = 'hero-list__id';
    const className = 'hero-list__name';
    const idElement = document.getElementsByClassName(classId);
    const nameElement = document.getElementsByClassName(className);
    const listClass = `hero-list`;
    const heroListElement = document.getElementsByClassName(listClass);

    this.onInit = function () {
        heroService.getHeroList()
            .then(handleFulfilled)
            .catch(handleError);
    }
    function handleFulfilled(response) {
        debugger;
        toggleLoading();
        createList(response);
        printListInfo(response);
        heroListComp = response;
    }

    function handleError(message) {
        toggleLoading()
        document.getElementById('hero-list__container').style.display = 'none'
        document.getElementById('hero-list__error').innerHTML = message;
    }
    function toggleLoading() {
        let loadingElement = document.getElementById('hero-list__loading');
        if (loadingElement.style.display === 'block') {
            loadingElement.style.display = 'none';
        } else {
            loadingElement.style.display = 'block'
        }
    }

    function createList(list) {
        let mylist = '';
        for (let i in list) {
            const urlId = '?heroId=' + list[i].id;
            const newElement = `<li><a href=../hero-detail/hero-detail.component.html${urlId}><span class=${classId}></span><span class=${className}></span></li>`;

            mylist += newElement;
        }
        if (heroListElement[0])
            heroListElement[0].innerHTML = mylist;
    }
    function printListInfo(list) {
        for (let i in list) {
            const actualhero = list[i];
            if (idElement[i])
                idElement[i].innerHTML = actualhero.id;
            if (nameElement[i])
                nameElement[i].innerHTML = actualhero.name;
        }
    }


    this.inputFilter = function (filterPoperty, event) {
        event.preventDefault();
        const listFilter = filterArrayGenerator(filterPoperty);
        createList(listFilter);
        printListInfo(listFilter);
    }

    function filterArrayGenerator(searchValue) {
        const missingIndex = -1;
        const mySearchValue = searchValue.toLowerCase();
        function filterheroList(hero) {
            return hero.name.toLowerCase().indexOf(mySearchValue) !== missingIndex || +hero.id === +searchValue;
        }
        return heroListComp.filter(filterheroList);
    }

}

const heroListComponent = new HeroListComponent();
heroListComponent.onInit();
