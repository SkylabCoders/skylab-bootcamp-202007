describe(“Pet”, function () {
    let myPet = new pet();
    let name = “kira”;
    let pet = { name: “kira”, gender: “female” };
    let newName = “pepa”;
    it(“should create a new pet”, function () {
      expect(myPet.createPet(name)).toEqual(pet);
    });
    it(“should return pet name”, function () {
      myPet.createPet(name);
      expect(myPet.getName()).toEqual(name);
    });
    it(“should change the pet name”, function () {
      myPet.createPet(name);
      myPet.setName(newName);
      expect(myPet.getName()).toEqual(newName);
    });
    it(“should return pet gender”, function () {
      myPet.createPet(name);
      expect(myPet.getGender()).toEqual(gender);
    });
    it(“should change the pet gender”, function () {
      myPet.createPet(name);
      myPet.getGender(gender);
      expect(myPet.getGender()).toEqual(newGender);
    });
    it(“should set  and get a number of legs”, function () {
      myPet.createPet(name);
      expect(myPet.getLegs).toBeUndefined();
      myPet.setLegs(4);
      expect(myPet.getLegs()).toEqual(4);
      myPet.setLegs(2);
      expect(myPet.getLegs()).toEqual(2);
    });
  });