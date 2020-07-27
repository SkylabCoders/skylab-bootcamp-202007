function Pet() {
  this.name = undefined;
  this.gender = undefined;
  this.legs = undefined;
  this.createPet = function (name) {
    this.name = name;
  };
  this.setName = function (newName) {
    this.name = newName;
  };
  this.getName = function () {
    return this.name;
  };
  this.setGender = function (newGender) {
    this.gender = newGender;
  };
  this.getGender = function () {
    return this.gender;
  };
  this.setLegs = function (LegsNumber) {
    this.legs = LegsNumber;
  };
  this.getLegs = function () {
    return this.legs;
  };
}
