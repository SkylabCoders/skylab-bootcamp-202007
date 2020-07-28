function SkylabersListComponent() {
    let skylabersList = skylaberList;
    inputFilter = document.getElementById("skylabers-detail__name-control");

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
    this.searchInput = function () {
        //If inputFilter is empty view original list
        if (inputFilter.value === "") {
            mainContainerList.innerHTML = "";
            skylabersList = skylaberList;
            createButtonsList()
        } else {
            mainContainerList.innerHTML = "";
            skylabersList = skylaberList;
            const listFilter = function () {
                let filteredItems = skylabersList;
                skylabersList = filteredItems.reduce(callback, []);
                createButtonsList(skylabersList)
            }
            listFilter()
        }
    };

    function callback(acumulator, skylaber) {
        if (skylaber.name === inputFilter.value || skylaber.id === +inputFilter.value || skylaber.completedChallenges === +inputFilter.value || skylaber.address.city === inputFilter.value || skylaber.address.country === inputFilter.value) {
            acumulator = [...acumulator, skylaber]
        }
        return acumulator
    }
}
let listComponent = new SkylabersListComponent();
listComponent.onInit();


