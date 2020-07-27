'use strict';
function SkylaberListComponent() {
    const skylaberListComp = [...skylaberList];
    const classId = 'skylaber-list__id';
    const className = 'skylaber-list__name';
    const idElement = document.getElementsByClassName(classId);
    const nameElement = document.getElementsByClassName(className);
    const idSection = 'to-details';
    const sectionElement = document.getElementById(idSection);
    const listClass = `skylaber-list`;
    const skylaberListElement = document.getElementsByClassName(listClass);

    this.onInit = function () {
        createList(skylaberListComp);
        printListInfo(skylaberListComp);
    }
    function createList(list) {
        let mylist = '';
        for (let i in list) {
            const urlId = '?skylaberId=' + list[i].id;
            const newElement = `<li><a href=../skylaber-detail/skylaber-detail.component.html${urlId}><span class=${classId}></span><span class=${className}></span></li>`;

            mylist += newElement;
        }
        if (skylaberListElement[0])
            skylaberListElement[0].innerHTML = mylist;
    }
    function printListInfo(list) {
        for (let i in list) {
            const actualskylaber = list[i];
            if (idElement[i])
                idElement[i].innerHTML = actualskylaber.id;
            if (nameElement[i])
                nameElement[i].innerHTML = actualskylaber.name;
        }
    }

    this.displayDetailsMenu = function () {
        const displayClass = 'flex-column';
        const hidenClass = 'hidden-content';
        sectionElement.classList.remove(hidenClass);
        sectionElement.classList.add(displayClass);
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
        function filterSkylaberList(skylaber) {
            return skylaber.name.toLowerCase().indexOf(mySearchValue) !== missingIndex || +skylaber.id === +searchValue || skylaber.address.country.toLowerCase().indexOf(mySearchValue) !== missingIndex || skylaber.address.city.toLowerCase().indexOf(searchValue.toLowerCase()) !== missingIndex || +skylaber.completedChallenges === +searchValue;
        }
        return skylaberListComp.filter(filterSkylaberList);
    }

}


const skylaberListComponent = new SkylaberListComponent();
skylaberListComponent.onInit();
