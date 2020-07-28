'use strict';

function Pet() {
  let pet = {};

  function createPet(name) {
    pet.name = name;
    return pet;
  }

  function getName() {
    console.log("pet's name is", pet.name);
    return pet.name;
  }

  function setName(newName) {
    pet.name = newName;
  }

  function getGender() {
    console.log("pet's gender is", pet.gender);
    return pet.gender;
  }

  function setGender(gender) {
    if (gender !== "female" || gender !== "male" || gender !== "non-binary") {
      console.log("Enter a valid gender, you f*** ");
    } else {
      pet.gender = gender;
    }
  }

  function getLegs() {
    console.log("this pet has", pet.legs, "legs");
    return pet.legs;
  }

  function setLegs(legs) {
    if (legs > 10) {
      console.log("that's not a f***** pet, dude");
    } else {
      pet.legs = legs;
    }
  }

  return {createPet, getName, setName, setGender, getGender, setLegs, getLegs}

}

/*   createPet("Kira");
  getName();
  setName("Pepa");
  getName();
  getGender();
  setGender("not much");
  getGender();
  getLegs();
  setLegs(1000);
  getLegs(); */

