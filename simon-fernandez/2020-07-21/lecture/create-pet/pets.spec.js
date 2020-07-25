describe('Pet', function () {
  debugger;
  let myPet = new Pet(),
    name = 'Kira',
    newName = 'Lola',
    gender = 'female',
    newGender = 'male',
    legs = 2,
    newLegs = 4,
    pet = { name: 'Kira' };

  it('should create a new pet', function () {
    expect(myPet.createPet(name)).toEqual(pet);
  });
  it('should get the pet name', function () {
    myPet.createPet(name);
    expect(myPet.getName()).toEqual(name);
  });
  it('should set the pet name', function () {
    myPet.createPet(name);
    myPet.setName(newName);
    expect(myPet.getName()).toEqual(newName);
  });
  it('should set the pet gender', function () {
    myPet.createPet(name);
    myPet.setGender(newGender);
    expect(myPet.getGender()).toEqual(newGender);
  });
  it('should get the gender', function () {
    myPet.createPet(name);
    expect(myPet.getGender()).toEqual(undefined);
    myPet.setGender(gender);
    expect(myPet.getGender()).toEqual(gender);
  });
  it('should set a number of legs', function () {
    myPet.createPet(name);
    myPet.setLegs(newLegs);
    expect(myPet.getLegs()).toEqual(newLegs);
  });
  it('should get the number of legs', function () {
    myPet.createPet(name);
    expect(myPet.getLegs()).toBeUndefined();
    myPet.setLegs(legs);
    expect(myPet.getLegs()).toEqual(legs);
  });
});
