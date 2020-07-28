describe('Pet', function () {
    let myPet;
    let newGender = undefined;
    let newName = 'Pepa';
    let data

    beforeEach(function () {
        myPet = new Pet();
        data = {
            name: 'Kira',
            gender: 'female',
            legs: 4
        }
    });

    it('should create a new pet', function () {
        expect(myPet.createPet(data.name)).toEqual(pet);
    });
    xit('shoud return pet name', function () {
        myPet.createPet(data.name);
        expect(myPet.getName()).toEqual(data.name);
    });
    xit('sould change the pet name', function () {
        myPet.createPet(data.name);
        myPet.setName(newName);
        expect(myPet.getName()).toEqual(newName);
    });
    xit("should create the pet gender", function () {
        myPet.createPet(data.name);
        expect(myPet.getGender()).toEqual(undefined);
        myPet.setGender("female");
        expect(myPet.getGender()).toEqual("female");
        myPet.setGender("male");
        expect(myPet.getGender()).toEqual("male");
    })
    xit("should change the pet gender", function () {
        myPet.createPet(data.name);
        myPet.setGender(newGender);
        expect(myPet.setGender()).toEqual(newGender);
    })
    xit("should set a number of legs", function () {
        myPet.createPet(data.name);
        expect(myPet.setLegs()).toBeUndefined();
        myPet.setLegs(4);
        expect(myPet.getLegs()).toEqual(4);
        myPet.setLegs(2);
        expect(myPet.getLegs()).toEqual(2);

    })
})