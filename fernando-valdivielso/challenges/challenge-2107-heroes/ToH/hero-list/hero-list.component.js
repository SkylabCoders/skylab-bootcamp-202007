function ListComponent() {
    const myHeroList = heroList;

    this.onInit = function () {
        myHeroList.forEach(listItemsToAnchor);
        addAnchorToHTML(listItemsToAnchor());
    }

    function listItemsToAnchor(heroItems) {
        // debugger;
       let transformedElement = document.createElement('a');
       transformedElement.href = '../hero-detail/hero-detail.component.html';
       let idElement = document.createElement('span');
       let nameElement = document.createElement('span');
       idElement.innerText = heroItems.id;
       nameElement.innerText = heroItems.name;
       transformedElement.appendChild(idElement);
       transformedElement.appendChild(nameElement);

    //    transformedElement.innerText = 'id: ' + heroItems.id + '   ' + heroItems.name;
       console.log(transformedElement);
    }
    
    function addAnchorToHtml(heroAnchor) {


        
        
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