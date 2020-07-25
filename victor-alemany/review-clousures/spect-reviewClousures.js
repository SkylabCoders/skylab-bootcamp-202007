describe('Pet',function(){
    let pet;
    let name; 
    let myPet;
    let genre;
    let newGenre;

    beforeEach(function(){
        pet = new Pet();
        name = 'Kira';
        newName= 'Lola'
        myPet = {name: 'Kira'};
        genre = 'male';
        newGenre = 'female';
        legs = 4;
        newLegs = 4;
    });

    it('It should create a new Pet', function(){
        expect(pet.createPet(name)).toEqual(myPet);
    });

    it('should return the pet name', function(){
        pet.setName(name);
        expect(pet.getName()).toEqual(name);
    });

    it('should change pet name and get new name', function(){
        pet.setName(newName);
        expect(pet.getName()).toEqual(newName);
    });

    it('should change genre name and get new genre', function(){
        pet.setGenre(newGenre);
        expect(pet.getGenre()).toEqual(newGenre);
    });

    it('should set new legs and get new legs value',function(){
       pet.setLegs(newLegs);
       expect(pet.getLegs()).toEqual(newLegs);
    })

})