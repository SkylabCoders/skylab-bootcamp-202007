function HeroListComponent() {
    heroesList = heroList;
    inputFilter = document.getElementById("hero-detail__name-control");
    let listContainer = document.getElementById("hero-list__container")
    listContainer.style.display = "block";
    let listItem;

    //OnInit it's called on loaded page
    this.onInit = function () {
        debugger
        /*         document.getElementById("hero-list__container").style.display = "none";
        heroService
        .getHeroList()
        .then(handleFulfilled);
        .then((response) => {
            return response
        }) */
        heroService
            .getHeroList()
            .then((response) => {
                renderList(response)
            })
    }

    /*     function handleFulfilled(response) {
            console.log(response);
            heroesList = response;
            createButtonsList();
        } */

    //Create buttons
    let mainContainerList = document.querySelector("#mainContainer--list");
    function renderList(arr = heroesList) {
        for (let i = 0; i < arr.length; i++) {
            let itemsList = document.createElement("button");
            itemsList.innerHTML = "<span class=id>" + arr[i].id + "</span>" + "<span class=name>" + arr[i].name + "</span>";
            itemsList.addEventListener("click", () => {
                window.location.assign(`../hero-detail/hero-detail.component.html?heroId=${arr[i].id}`);
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
            renderList()
            //If filtervalue is not empty view filtered heroes
        } else {
            mainContainerList.innerHTML = "";
            heroesList = heroList;
            const listFilter = function () {
                let filteredItems = heroesList;
                heroesList = filteredItems.reduce(callback, []);
                renderList(heroesList);
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


