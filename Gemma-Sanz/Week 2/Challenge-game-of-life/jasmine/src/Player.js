function Player(name, trophies, lastName) {
  this.name = name;
  this.trophies = trophies;
  this.lastName = lastName;
  this.countTrophies = function () {
    return this.trophies.gold + this.trophies.silver + this.trophies.bronze;
  };
  this.fullName = function () {
    return `${this.name} ${this.lastName}`;
  };
}
