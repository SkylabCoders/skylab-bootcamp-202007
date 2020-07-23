function HeroListComponent() {
    
    const listElement = document.getElementById('list');
    this.heroes = heroList;
    
    this.createList = function () {
        // debugger;
        for (let i = 0; i < this.heroes.length; i++) {
            const listNodeElement = document.createElement('li');
            listElement.appendChild(listNode);
            

            
        }
        
    }
    
}

const myHero = new HeroListComponent();
// debugger;
myHero.createList();