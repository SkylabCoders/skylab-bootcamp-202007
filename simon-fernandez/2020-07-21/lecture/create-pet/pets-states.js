'use strict';
function Pet() {
  this.pet = {};
  const createPet = function (name) {
    this.pet = { name: name };
    return this.pet;
  };
  const getName = function () {
    return this.pet.name;
  };
  const setName = function (newName) {
    this.pet.name = newName;
  };
  const setGender = function (newGender) {
    this.pet.gender = newGender;
  };
  const getGender = function () {
    return this.pet.gender;
  };
  const setLegs = function (newLegs) {
    this.pet.legs = newLegs;
  };
  const getLegs = function () {
    return this.pet.legs;
  };
  return {
    createPet,
    getName,
    setName,
    setGender,
    getGender,
    setLegs,
    getLegs
  };
}
