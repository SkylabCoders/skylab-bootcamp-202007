'use strict';
function Heroe() {
  this.heroe = {};
  let id = 0;
  const createHeroe = function (name) {
    this.heroe = { id: id, name: name };
    id++;
    return this.heroe;
  };
  const getName = function () {
    return this.heroe.name;
  };
  const setName = function (newName) {
    this.heroe.name = newName;
  };
  const getId = function () {
    return this.hero.id;
  };

  return { createHeroe, getName, setName, getId };
}
