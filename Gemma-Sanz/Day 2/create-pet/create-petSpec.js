describe('Pet', function () {
    debugger
    let myPet;


    let name = 'Kira';
    let legs = 4;
    let newGender = undefined;
    let pet = {
        name: 'Kira'
    };
    let newName = 'Pepa';
    beforeEach(function () {

        myPet = new Pet();
    });

    it('should create a new pet', function () {
        expect(myPet.createPet(name)).toEqual(pet);
    });
    it('shoud return pet name', function () {
        myPet.createPet(name);
        expect(myPet.getName()).toEqual(name);
    });
    it('sould change the pet name', function () {
        myPet.createPet(name);
        myPet.setName(newName);
        expect(myPet.getName()).toEqual(newName);
    });
    it("should create the pet gender", function () {
        myPet.createPet(name);
        expect(myPet.getGender()).toEqual(undefined);
        myPet.setGender("female");
        expect(myPet.getGender()).toEqual("female");
        myPet.setGender("male");
        expect(myPet.getGender()).toEqual("male");
    })
    it("should change the pet gender", function () {
        myPet.createPet(name);
        myPet.setGender(newGender);
        expect(myPet.setGender()).toEqual(newGender);
    })
    it("should set a number of legs", function () {
        myPet.createPet(name);
        expect(myPet.setLegs()).toBeUndefined();
        myPet.setLegs(4);
        expect(myPet.getLegs()).toEqual(4);
        myPet.setLegs(2);
        expect(myPet.getLegs()).toEqual(2);

    })
})