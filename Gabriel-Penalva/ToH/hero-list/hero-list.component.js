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
    console.log(heroList);
    for (itList of heroList) {
        newItem = document.createElement('p');
        newItem.id = itList.id;
        newItem.innerText = `id: ${itList.id} name: ${itList.name}`;
        list.appendChild(newItem);

    }

}
listHeros();