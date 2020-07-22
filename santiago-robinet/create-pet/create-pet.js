function Pet(){
    let pet;


    function createPet(name){
        pet = { name };

        return pet;
    }

    function getName(){
        return pet.name;
    }

    function setName(newName){
        pet.name = newName;
        return pet.name;
    }

    function getGender() {
        return pet.gender
    }

    function setGender(newGender){
        pet.gender = newGender;
        return pet.gender
    }

    function getLegs(){
        return pet.legs
    }

    function setLegs(newLegs){
        pet.legs = newLegs;
        return pet.legs
    }

    return { createPet, getName, setName, getGender, setGender , getLegs , setLegs  }
}