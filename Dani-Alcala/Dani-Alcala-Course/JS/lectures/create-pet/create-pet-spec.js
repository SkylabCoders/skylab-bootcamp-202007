describe('Pet', function(){
    let myPet = new Pet();
    let name = 'Kira';
    let pet =  {name: 'Kira'}
    let newName = 'Pepa';
    let newGender = 'female';


    it('should create a new pet', function(){
        expect(myPet.createPet(name)).toEqual(pet);
    });

    it('should return pet name', function(){
        myPet.createPet(name);
        expect(myPet.getName()).toEqual(name);
    });

    it('sould change the pet name', function(){
        myPet.createPet(name);
        myPet.setName(newName);
        expect(myPet.getName()).toEqual(newName);
    });

    it('should return pet gender', function(){
        myPet.createPet(name);        
        expect(myPet.getGender()).toEqual(undefined);
        myPet.setGender('female');
        expect(myPet.getGender()).toEqual('female');
        myPet.setGender('male');
        expect(myPet.getGender()).toEqual('male');
    });

    it('should change the pet gender', function(){
        myPet.createPet(name);
        myPet.setGender(newGender);
        expect(myPet.getGender()).toEqual(newGender);
    });

    it('shold set and get a number of legs', function(){
        myPet.createPet(name);
        expect(myPet.getLegs()).toBeUndefined();
        myPet.setLegs(4);
        expect(myPet.getLegs()).toEqual(4);
        myPet.setLegs(6);
        expect(myPet.getLegs()).toEqual(6);
    })


})