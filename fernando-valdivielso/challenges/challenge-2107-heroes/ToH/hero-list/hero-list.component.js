function ListComponent() {
    const myHeroList = heroList;
    const ulElement = document.getElementById('list');
    let listElement = null;
    const elementsToHtml = [];

    this.onInit = function () {
        myHeroList.forEach(listItemsToAnchor);
        addAnchorToHTML(listItemsToAnchor);
    }

    function listItemsToAnchor(heroItems) {
        listElement = document.createElement('li')

        let transformedElement = document.createElement('a');
        let idElement = document.createElement('span');
        let nameElement = document.createElement('span');
        transformedElement.href = '../hero-detail/hero-detail.component.html';
        idElement.innerText = heroItems.id;
        nameElement.innerText = heroItems.name;
        transformedElement.appendChild(idElement);
        transformedElement.appendChild(nameElement);
        listElement.appendChild(transformedElement);
        console.log(listElement);
        elementsToHtml.push(listElement);
        console.log(elementsToHtml);
    

    }

    function addAnchorToHTML() {
        // debugger;
        for (let i = 0; i < myHeroList.length; i++) {
            ulElement.appendChild(elementsToHtml[i]);

        }
        console.log(ulElement);


    }






}



const listComponent = new ListComponent();
listComponent.onInit();



// const listElement = document.getElementById('list');
// this.heroes = heroList;

// this.createList = function () {
    //     for (let i = 0; i < this.heroes.length; i++) {
        //         const listNodeElement = document.createElement('li');
        //         listElement.appendChild(listNode);
        //     }
        // } 
        // listComponent.createList();