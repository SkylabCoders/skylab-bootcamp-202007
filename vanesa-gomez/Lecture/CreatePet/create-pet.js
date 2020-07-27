function Pet() {
  const data = {
    name: "",
    gender: "female",
  };

  function getName() {
    return data.name;
  }

  function getGender() {
    return data.gender;
  }

  function getLegs() {
    return data.legs;
  }

  function createPet(x) {
    data.name = x;
    return { name: data.name, gender: data.gender };
  }

  function setName(x) {
    data.name = x;
  }
  function setGender(x) {
    data.gender = x;
  }

  function setLegs(x) {
    data.legs = x;
  }

  return {
    getName,
    getGender,
    getLegs,
    createPet,
    setName,
    setGender,
    setLegs,
  };
}
