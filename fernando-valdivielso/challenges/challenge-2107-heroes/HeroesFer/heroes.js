let batman = new Heroes('Batman', 1);
let superman = new Heroes('Superman', 5);

function Heroes(name, id) {

    let id = null;
    let name = null;

    function createHero(name, id) {
        this.name = name;
        this.id = id;
        return { name, id };
    }

    function setId(id) {
        this.id = id;
    };

    function getId() {
        return this.id;
    }

    function setName(name) {
        this.name = name;
    }

    function getName() {
        return this.name;
    }

    return { createHero, setId, getId, setName, getName }
}

let heading = document.getElementsByTagName('h2')[0];
let heroId = document.getElementsByClassName(".details__id")[0];
let heroName = document.getElementsByClassName(".details__name")[0];

heroName.addEventListener('input', function () { 
    if( heroName.value === superman.getName()) {
        heading.innerHTML = superman.getName();
    }
  })

  










// batman.setName('peipit');
// console.log(batman.getName())


