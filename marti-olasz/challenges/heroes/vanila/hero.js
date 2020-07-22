const Hero = function () {
  let name = 'Magneto';
  let id = 7;
  function setName(newName) {
    name = newName;
  }
  function getName() {
    return name;
  }
  function getId() {
    return id;
  }
  return { setName, getName, getId };
};
