function Heroes() {
  let id;
  let name;

   
    function createHero(name, id){
        this.id = id
        this.name = name
        return {name, id}}
    }
  function setID(id) {
    this.id = id;
  }

  function getID() {
    return this.id;
  }

  function setName(name) {
    this.name = name;
  }

  function getName() {
    return this.name;
  }

  return { setID, getID, setName, getName };
}


