function Player(name, trophies) {
  this.name = name;
  this.trophies = trophies;
  this.countTrophies = function () {
    return this.trophies.gold + this.trophies.silver + 
    this.trophies.bronze;
  }
}