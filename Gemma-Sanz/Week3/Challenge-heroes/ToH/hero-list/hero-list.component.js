function HeroListComponent() {
    let heroesPromoted;
    heroesList = heroList;
    inputFilter = document.getElementById("hero-detail__name-control");
    //OnInit it's called on loaded page
    this.onInit = function () {
        document.getElementById("hero-list__container").style.display = "none";
        heroService.getHeroList().then(handleFulfilled);
    }

    function handleFulfilled(response) {
        console.log(response);
        heroesList = response;
        document.getElementById("hero-list__container").style.display = "block";
        createButtonsList();
    }

    //Create buttons
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
    //Filter called in html doc onkeyup
    this.searchInput = function () {
        //If filtervalue is empty, empty mainContainerList and view all heroes
        if (inputFilter.value === "") {
            mainContainerList.innerHTML = "";
            heroesList = heroList
            createButtonsList()
            //If filtervalue is not empty view filtered heroes
        } else {
            mainContainerList.innerHTML = "";
            heroesList = heroList;
            const listFilter = function () {
                let filteredItems = heroesList;
                heroesList = filteredItems.reduce(callback, []);
                createButtonsList(heroesList);
            }
            listFilter()
        }
    };

    function callback(acumulator, hero) {
        if (hero.name === inputFilter.value || hero.id === +inputFilter.value) {
            acumulator = [...acumulator, hero]
        }
        return acumulator
    }
}
let listComponent = new HeroListComponent();
listComponent.onInit();


