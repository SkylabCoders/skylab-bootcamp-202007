describe('Pet', function () {
  let myPet = new Pet();
  let name = 'Kira';
  let newName = 'Pepa';
  let newGender = 'female';
  const female = 'female',
    male = 'male';
  beforeEach(function () {
    myPet = new Pet();
  });
  it('should create a new pet', function () {
    myPet.createPet(name);
    expect(myPet.getName()).toEqual(name);
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
  it('should set the gender', function () {
    myPet.createPet(name);
    expect(myPet.getGender()).toBeUndefined();
    myPet.setGender(female);
    expect(myPet.getGender()).toEqual(female);
    myPet.setGender(male);
    expect(myPet.getGender()).toEqual(male);
  });
  it('should change the pet gender', function () {
    myPet.createPet(name);
    myPet.setGender(newGender);
    expect(myPet.getGender()).toEqual(newGender);
  });
  it('should set and get number of legs', function () {
    myPet.createPet(name);
    expect(myPet.getLegs()).toBeUndefined();
    myPet.setLegs(2);
    expect(myPet.getLegs()).toEqual(2);
    myPet.setLegs(4);
    expect(myPet.getLegs()).toEqual(4);
  });
});
