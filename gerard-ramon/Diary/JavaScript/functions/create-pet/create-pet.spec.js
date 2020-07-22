describe('Create-Pet', function () {
	let myPet;
	const name = 'Kira';
	const femaleGender = 'female';
	const maleGender = 'male';
	const legsNumber = 4;
	let pet = { name: 'Kira' };

	beforeEach(function () {
		myPet = new Pet();
		myPet = myPet.createPet(name);
	});

	it('1-Should create a pet', function () {
		expect(myPet.createPet(name)).toBeTruthy();
		//expect(myPet.name).toEqual(pet);
	});

	it('2-Should return the pet name', function () {
		myPet.setName;
		expect(myPet.getName()).toEqual(name);
	});

	it('3-Should set the pet name', function () {
		let newName = 'Shordi';
		myPet.setName(newName);
		expect(myPet.getName()).toBe(newName);
	});

	it('4-Should return the pet gender', function () {
		expect(myPet.getGender()).toBe(undefined);
		myPet.setGender(femaleGender);
		expect(myPet.getGender()).toEqual(femaleGender);
		myPet.setGender(maleGender);
		expect(myPet.getGender()).toEqual(maleGender);
	});

	it('5-Should set the pet gender', function () {
		myPet.gender = femaleGender;
		let newGender = maleGender;
		myPet.setGender(newGender);
		expect(myPet.getGender()).toBe(newGender);
	});

	it('6-Should set number of legs of the pet', function () {
		myPet.setLegs(legsNumber);
		expect(myPet.getLegs()).toBe(legsNumber);
	});

	it('7-Should return the number of legs', function () {
		expect(myPet.getLegs()).toBe(undefined);
		myPet.setLegs(legsNumber);
		expect(myPet.getLegs()).toBe(legsNumber);
		myPet.setLegs(2);
		expect(myPet.getLegs()).toBe(2);
	});
});
