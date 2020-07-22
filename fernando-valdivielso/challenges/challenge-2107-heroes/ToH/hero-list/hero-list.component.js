function HeroListComponent() {
    
    const listElement = document.getElementById('list');
    this.heroes = heroList;
    
    function createList(arr) {
        for (let i = 0; i < arr.length; index++) {
            const listNode = document.createElement('li');
            listElement.appendChild(listNode);
            
        }
        
    }
    return {createList}
    
}

const heroooo = new HeroListComponent();
heroooo.createList();