// THIS IS JORDI'S AND ALEX LEGENDARY PET CREATOR
function Pet() {
	let legs;

	const setName = function (name) {
		this.name = name;
	};

	function getName() {
		return this.name;
	}

	function setGender(gender) {
		this.gender = gender;
	}

	function getGender() {
		return this.gender;
	}

	function setLegs() {
		this.legs = legs;
	}

	function getLegs() {
		return this.legs;
	}

	return { setName, getName, setGender, getGender, setLegs, getLegs };
}

let myPet = new Pet();

myPet.setName('fuck');
var nameValue = myPet.getName();
console.log(nameValue);
