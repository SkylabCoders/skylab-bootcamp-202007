describe('Pet', function () {
    let myPet;
    let name = 'Kira';
    let pet = { name: 'Kira' };
    let newName = 'Pepa';
    let nLegs = 4;
    let twoLegs = 2;
    beforeEach(function () {
        myPet = new Pet();
    })
    it('should create a new pet', function () {
        expect(myPet.createPet(name)).toEqual(pet);
    });
    it('should return pet name', function () {
        myPet.createPet(name);
        expect(myPet.getName()).toEqual(name);
    });
    it('should change the pet name', function () {
        myPet.createPet(name);
        myPet.setName(newName);
        expect(myPet.getName()).toEqual(newName);
    });
    it('should get and set the pet gender', function () {
        myPet.createPet(name);
        expect(myPet.getGender()).toEqual(undefined);
        myPet.setGender('female');
        expect(myPet.getGender()).toEqual('female');
        myPet.setGender(`male`);
        expect(myPet.getGender()).toEqual(`male`);
    });
    it('should get and set the pet legs', function () {
        myPet.createPet(name);
        expect(myPet.getLegs()).toEqual(undefined);
        myPet.setLegs(nLegs);
        expect(myPet.getLegs()).toEqual(nLegs);
        myPet.setLegs(twoLegs);
        expect(myPet.getLegs()).toEqual(twoLegs);
    });
});