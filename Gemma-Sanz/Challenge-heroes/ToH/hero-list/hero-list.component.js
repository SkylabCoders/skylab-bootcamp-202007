let mainContainerList = document.querySelector("#mainContainer--list");

function HeroListComponent() {
    for (let i = 0; i < heroList.length; i++) {
        let itemsList = document.createElement("button");
        mainContainerList.appendChild(itemsList);
        itemsList.innerHTML = "<span class=id>" + heroList[i].id + "</span>" + "<span class=name>" + heroList[i].name + "</span>";
    };

}
HeroListComponent();
