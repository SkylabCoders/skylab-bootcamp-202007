describe("Pet", function () {
    let myPet;
    let name;
    let pet;
    let newName;
    let gender;
    let newGender;

    beforeEach(function () {
        myPet = new Pet();
        name = "kira";
        pet = {
            name: "kira",
            gender: "female"
        };
        newName = "pepa";
        gender = "female";
        newGender = "male";
    });

    it("should create a new pet", function createPetTest() {
        expect(myPet.createPet(name)).toEqual(pet);
    });

    it("should return pet name", function getNameTest() {
        myPet.createPet(name);
        expect(myPet.getName()).toEqual(name);
    });

    it("should change the pet name", function setNameTest() {
        myPet.createPet(name);
        myPet.setName(newName);
        expect(myPet.getName()).toEqual(newName);
    });

    it("should return pet gender", function getGenderTest() {
        myPet.createPet(name);
        expect(myPet.getGender()).toEqual(gender);
    });

    it("should change the pet gender", function setGenderTest() {
        myPet.createPet(name);
        myPet.setGender(newGender);
        expect(myPet.getGender()).toEqual(newGender);
    });

    it("should set and get a number of legs", function getAndSetLegsTest() {
        myPet.createPet(name);
        expect(myPet.getLegs()).toBeUndefined();
        myPet.setLegs(4);
        console.log(myPet);
        expect(myPet.getLegs()).toEqual(4);
        myPet.setLegs(2);
        expect(myPet.getLegs()).toEqual(2);
    });
});