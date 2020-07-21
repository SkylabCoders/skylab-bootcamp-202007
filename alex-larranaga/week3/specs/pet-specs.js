describe('Pet', function () {
  let myPet;

  beforeEach(function () {
    let myPet = new Pet();
  });
  it('should be able to have a name', function () {
    expect(myPet.createPet('Goku')).toEqual(myPet.name);
  });

  it('should be able to retrieve the name', function () {
    expect(mypet.getName().toEqual('Goku'));
  });

  it('should be able to change the name', function () {
    expect(myPet.setName('Goten').toEqual((myPet.getName = 'Goten')));
  });

  it('should be able to set a gender', function () {
    expect(myPet.setGender('male').toEqual(myPet.getName != undefined));
  });

  it('should be able to change the pets gender', function () {
    expect(myPet.setGender('female').toEqual((myPet.getGender = 'female')));
  });
});
