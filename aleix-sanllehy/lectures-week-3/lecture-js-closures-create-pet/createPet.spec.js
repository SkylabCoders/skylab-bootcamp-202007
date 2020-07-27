describe('Pet',function() {
    let myPet = new Pet();
    let name = 'Kira';
    let pet = {name: 'Kira'};
    let newName = 'Pepa';
    let newGender = undefined;


    it ('should create a new pet', function(){
        expect(myPet.createPet(name)).toEqual(pet);
    });

    it('should return pet name', function(){
        myPet.createPet(name);
        expect(myPet.getName()).toEqual(name);
    });

    it("it should change the pet's name", function(){
        myPet.createPet(name);
        myPet.setName(newName);
        expect(myPet.getName()).toEqual(newName)
    });

    it("should get the pet's gender", function(){
        myPet.createPet(name);
        expect(myPet.getGender()).toEqual(undefined);
        debugger
        myPet.setGender('female');
        expect(myPet.gender).toEqual('female');
        myPet.setGender('male');
        expect(myPet.gender).toEqual('male');
    });

    it("should change the pet's gender", function(){
        myPet.createPet(name);
        myPet.setGender(newGender);
        expect(myPet.getGender()).toEqual(newGender);
    })

})