function SkylabersListComponent() {
    let skylabersList = skylaberList;
    this.onInit = function () {
        createButtonsList();
    }

    let mainContainerList = document.querySelector("#mainContainer--list");
    let createButtonsList = function () {
        for (let i = 0; i < skylabersList.length; i++) {
            let itemsList = document.createElement("button");
            itemsList.innerHTML = "<span class=id>" + skylabersList[i].id + "</span>" + "<span class=name>" + skylabersList[i].name + "</span>";
            itemsList.addEventListener("click", () => {
                window.location.assign(`../skylabers-detail/skylabers-detail.component.html?skylaberId=${skylabersList[i].id}`);
            })
            mainContainerList.appendChild(itemsList);
        };

    }
    this.searchInput = function () { //called in html onkeyup
        debugger
/*         event.defaultPrevented();
 */         const listFilter = function () {
            let filteredItems = skylaberList;
            skylabersList = filteredItems.reduce(callback, []);
            //            debugger linia amunt i aball no tiren
            createButtonsList()
        }
        listFilter()

    };

    function callback(acumulator, skylaber) {
        if (skylaber.name === "Jordi") {
            acumulator = [...acumulator, skylaber.name]
        }
        return acumulator
    }
    /*     const countskylaberes = skylaberList.reduce(callback, 0);
     */
}
let listComponent = new SkylabersListComponent();
listComponent.onInit();


