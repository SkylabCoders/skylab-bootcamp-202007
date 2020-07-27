

function addNewHero(nName) {
    heroList.push({ id: heroList.length + 11, name: nName });
}

function listHeros(theroList = heroList) {
    let item = document.createElement('div');
    item.id = 'list-holder';
    let list = document.getElementById('list');
    let newItem;
    let btn;
    let par;
    for (let itList of theroList) {
        newItem = document.createElement('div');
        par = document.createElement('a');
        btn = document.createElement('button');

        par.href = getHeroLink(itList.id);
        par.innerText = `id: ${itList.id} name: ${itList.name}`;

        btn.innerText = "del";
        btn.setAttribute("onclick", `deleteChild(${itList.id})`)

        newItem.id = itList.id;
        newItem.className = 'flex-row';

        newItem.appendChild(par);
        newItem.appendChild(btn);
        list.appendChild(newItem);
    }
}

function deleteList() {
    let list = document.getElementById('list');
    list.textContent = "";
}

let newName = document.getElementById('hero-list__name-add');

newName.addEventListener("keydown", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        let nName = newName.value;
        addNewHero(nName);
        deleteList();
        listHeros();
    }

});

function deleteChild(id) {
    for (let i = 0; i < heroList.length; i++) {
        if (heroList[i].id === id) {
            heroList.splice(i, 1);
        }
    }
    deleteList();
    listHeros();
}

function getHeroLink(id) {
    return `../hero-detail/hero-detail.component.html?heroId=${id}&prop=value`;
}

listHeros();