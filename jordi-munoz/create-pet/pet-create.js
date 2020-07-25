function Pet() {
    let name;
    let gen;
    let legs;
    function createPet(name) {
        return this.name = name;
    }
    function getName() {
        return this.name;
    }
    function setName(newName) {
        this.name = newName;
    }
    function getGender() {
        return this.gen;
    }
    function setGender(newGen) {
        this.gen = newGen;
    }
    function getLegs() {
        return this.legs;
    }
    function setLegs(legs) {
        this.legs = legs;
    }

    return {createPet, getName, setName, getGender, setGender, setLegs, getLegs}
}

