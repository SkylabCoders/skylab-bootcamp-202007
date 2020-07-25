function SkylabersListComponent() {
    this.onInit = function () {
        createButtonsList();
    }

    let mainContainerList = document.querySelector("#mainContainer--list");
    let createButtonsList = function () {
        for (let i = 0; i < skylaberList.length; i++) {
            let itemsList = document.createElement("button");
            itemsList.innerHTML = "<span class=id>" + skylaberList[i].id + "</span>" + "<span class=name>" + skylaberList[i].name + "</span>";
            itemsList.addEventListener("click", () => {
                window.location.assign(`../skylabers-detail/skylabers-detail.component.html?skylaberId=${skylaberList[i].id}`);
            })
            mainContainerList.appendChild(itemsList);
        };

    }
    this.searchInput = function () { //called in html onkeyup
        debugger
/*         event.defaultPrevented();
 */         const listFilter = function () {
            let filteredItems = skylaberList;
            filteredItems.reduce(callback, []);
        }
        listFilter()

    };

    function callback(acumulator, skylaber) {
        if (skylaber.name === "Narco") {
            acumulator = [...acumulator, skylaber.name]
        }
        return acumulator
    }
    /*     const countskylaberes = skylaberList.reduce(callback, 0);
     */
}
let listComponent = new SkylabersListComponent();
listComponent.onInit();


