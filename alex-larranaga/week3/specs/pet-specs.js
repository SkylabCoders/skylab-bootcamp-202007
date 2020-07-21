describe('Pet', function () {
  let myPet;
  const femaleGender = 'female';
  const maleGender = 'male';
  const petName = 'Goku';
  const newPetName = 'Goten';

  beforeEach(function () {
    let myPet = new Pet();
  });
  it('should be able to have a name', function () {
    expect(myPet.createPet(petName)).toEqual(myPet.name);
  });

  it('should be able to retrieve the name', function () {
    expect(mypet.getName().toEqual(petName));
  });

  it('should be able to change the name', function () {
    expect(myPet.setName(newPetName).toEqual((myPet.getName = newPetName)));
  });

  it('should be able to set a gender', function () {
    expect(myPet.setGender(maleGender).toEqual(myPet.getName != undefined));
  });

  it('should be able to change the pets gender', function () {
    expect(
      myPet.setGender(femaleGender).toEqual((myPet.getGender = femaleGender))
    );
  });

  it('should be able to set leg number', function () {
    expect(myPet.setLegs(legsValue).toEqual((myPet.getLegs = legsValue)));
  });
});
