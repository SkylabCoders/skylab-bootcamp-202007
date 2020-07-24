function ListComponent() {
    const myHeroList = heroList;
    const ulElement = document.getElementById('list');
    let listElement = null;
    let transformedElement = null;
    let idElement = null;
    let nameElement = null;
    const elementsToHtml = [];

    this.onInit = function () {
        myHeroList.forEach(listItemsToAnchor);
        addAnchorToHTML(listItemsToAnchor);
    }

    function listItemsToAnchor(heroItems) {
        listElement = document.createElement('li')
        transformedElement = document.createElement('a');
        idElement = document.createElement('span');
        nameElement = document.createElement('span');
        transformedElement.href = '../hero-detail/hero-detail.component.html?heroid=' + heroItems.id;
        idElement.innerText = heroItems.id;
        nameElement.innerText = heroItems.name;
        transformedElement.appendChild(idElement);
        transformedElement.appendChild(nameElement);
        listElement.appendChild(transformedElement);
        console.log(listElement);
        elementsToHtml.push(listElement);
    }

    function addAnchorToHTML() {
        for (let i = 0; i < myHeroList.length; i++) {
            ulElement.appendChild(elementsToHtml[i]);
        }
    }
}

const listComponent = new ListComponent();
listComponent.onInit();
    


