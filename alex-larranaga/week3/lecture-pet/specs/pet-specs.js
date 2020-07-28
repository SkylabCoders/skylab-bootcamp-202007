describe('Pet', function () {
	let myPet;
	const femaleGender = 'female';
	const maleGender = 'male';
	const petName = 'goku';
	const newPetName = 'goten';

	beforeEach(function () {
		myPet = new Pet();
	});

	it('should be able to have a name', function () {
		myPet.setName(petName);
		expect(myPet.getName()).toEqual(petName);
	});

	it('should be able to retrieve the name', function () {
		myPet.setName(petName);
		expect(myPet.getName().toEqual(petName));
	});
	it('should be able to change the name', function () {
		expect(myPet.setName(newPetName).toEqual((myPet.getName = newPetName)));
	});

	it('should be able to set a gender', function () {
		expect(myPet.setGender(maleGender).toEqual(myPet.getName != undefined));
	});

	it('should be able to change the pets gender', function () {
		myPet.setGender(femaleGender);
		expect(myPet.getGender().toEqual(femaleGender));
	});

	it('should be able to set leg number', function () {
		expect(myPet.setLegs(legsValue).toEqual((myPet.getLegs = legsValue)));
	});
});
