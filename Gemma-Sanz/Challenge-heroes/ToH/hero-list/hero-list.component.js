function HeroListComponent() {
    this.onInit = function () {
        createButtonsList();
    }

    let mainContainerList = document.querySelector("#mainContainer--list");
    let createButtonsList = function () {
        for (let i = 0; i < heroList.length; i++) {
            let itemsList = document.createElement("button");
            itemsList.innerHTML = "<span class=id>" + heroList[i].id + "</span>" + "<span class=name>" + heroList[i].name + "</span>";
            itemsList.addEventListener("click", () => {
                window.location.assign(`../hero-detail/hero-detail.component.html?heroId=${heroList[i].id}`);
            })
            mainContainerList.appendChild(itemsList);
        };

    }
    this.searchInput = function () {
        debugger
/*         event.defaultPrevented();
 */        const listFilter = function () {
            let filteredItems = heroList;
            filteredItems.reduce(callback, []);
            //!!!!
        }
        listFilter()
        return heroList
    };

    function callback(acumulator, hero) {
        if (hero.name === "Narco") {
            acumulator = [...acumulator, hero.name]
        }
        return acumulator
    }
    /*     const countHeroes = heroList.reduce(callback, 0);
     */
}
let listComponent = new HeroListComponent();
listComponent.onInit();


