function Heroes(name, id) {

    let id = null;
    let name = null;

    function createHero(name, id) {
         this.name = name;
         this.id = id;
         return {name, id};
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





// let batman = new Heroes();
// batman.setName('peipit');
// console.log(batman.getName())


