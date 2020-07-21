describe("createPet", function () {
    let myPet = new createPet();

    beforeEach(function () {});

    it("should create a new pet", function () {
        expect(myPet.name()).toEqual(pet);

    });
    it("should return a pet name", function () {
        createPet(name);
        expect(name).toBeTruthy();
    });
    it("should change the pet name", function () {

        expect(newName).toBeEqual(setName);
    });
    it("should return a pet gender", function () {

    })

})