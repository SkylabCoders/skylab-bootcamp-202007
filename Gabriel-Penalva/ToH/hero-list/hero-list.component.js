let inputName = document.getElementById("hero-list__name-add");

inputName.addEventListener("keydown", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click

    }

});

function addNewHero(nName) {
    heroList.push(new Hero(heroList.length, nName))
    listHeros();
}

function listHeros() {
    let item = document.createElement('div');
    item.id = 'list-holder';
    let list = document.getElementById('list');
    let newItem;
    let btn;
    let par;
    for (itList of heroList) {
        newItem = document.createElement('div');
        par = document.createElement('p');
        btn = document.createElement('button');
        btn.innerText = "del";
        btn.addEventListener('click', deleteChild);
        newItem.id = itList.id;
        newItem.className = 'flex-row';
        par.innerText = `id: ${itList.id} name: ${itList.name}`;
        newItem.appendChild(par);
        newItem.appendChild(btn)
        list.appendChild(newItem);
    }
}

function deleteList() {
    let list = document.getElementById('list');
    for (child of list.childNodes) {
        console.log(child);
        list.removeChild(child);
    }
}

let newName = document.getElementById('hero-list__name-add');
newName.addEventListener("keydown", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        let nName = newName.value;
        console.log(nName);
        console.log(newName);
        heroList.push({ id: heroList.length + 11, name: nName });
        deleteList();
        listHeros();
    }

});

let deleteChild = function (id) {
    console.log(id);
}
listHeros();