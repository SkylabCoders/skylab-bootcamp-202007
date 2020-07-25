function HeroListComponent() {
    heroesList = heroList;
    inputFilter = document.getElementById("hero-detail__name-control");
    this.onInit = function () {
        createButtonsList();
    }

    let mainContainerList = document.querySelector("#mainContainer--list");
    let createButtonsList = function () {
        for (let i = 0; i < heroesList.length; i++) {
            let itemsList = document.createElement("button");
            itemsList.innerHTML = "<span class=id>" + heroesList[i].id + "</span>" + "<span class=name>" + heroesList[i].name + "</span>";
            itemsList.addEventListener("click", () => {
                window.location.assign(`../hero-detail/hero-detail.component.html?heroId=${heroesList[i].id}`);
            })
            mainContainerList.appendChild(itemsList);
        };

    }
    this.searchInput = function () { //called in html onkeyup
        debugger
/*         event.defaultPrevented();
 */         const listFilter = function () {
            let filteredItems = heroesList;
            heroesList = filteredItems.reduce(callback, []);
        }
        listFilter()
    };


    function callback(acumulator, hero) {
        if (hero.name.toLowerCase() === inputFilter.value.toLowerCase() || hero.id.toLowerCase() === inputFilter.value.toLowerCase()) {
            acumulator = [...acumulator, hero.name]
        }
        return acumulator
    }
    /*     const countHeroes = heroList.reduce(callback, 0);
     */
}
let listComponent = new HeroListComponent();
listComponent.onInit();


