'use strict';
function SkylaberListComponent() {
    const skylaberListComponent = [...skylaberList];
    const classId = 'skylaber-list__id';
    const className = 'skylaber-list__name';
    const idElement = document.getElementsByClassName(classId);
    const nameElement = document.getElementsByClassName(className);
    const idSection = 'to-details';
    const sectionElement = document.getElementById(idSection);
    const listClass = `skylaber-list`;
    const skylaberListElement = document.getElementsByClassName(listClass);

    this.onInit = function () {
        createList(skylaberListComponent);
        printListInfo(skylaberListComponent);
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
        function filterSkylaberList(skylaber) {
            return skylaber.name.toLowerCase() === searchValue.toLowerCase() || skylaber.address.city.toLowerCase() === searchValue.toLowerCase() || skylaber.id === +searchValue;
        }
        return skylaberListComponent.filter(filterSkylaberList);

        // const myFilter = [];
        // const propertyActual = property.toUpperCase();
        // for (let i in skylaberListComponent) {
        //     for (let j in skylaberListComponent[i]) {
        //         const actualElement = (skylaberListComponent[i][j] + "").toUpperCase();

        //         if (actualElement.indexOf(propertyActual) != -1) {
        //             myFilter.push(skylaberListComponent[i]);
        //             break;
        //         }

        //     }
        // }
        // return myFilter;
    }

}


const skylaberListComponent = new SkylaberListComponent();
skylaberListComponent.onInit();

console.log(skylaberListComponent);
