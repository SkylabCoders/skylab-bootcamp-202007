//mascota tiene nombre sexo y le puedo cambiar el nombre de la mascota

function Pet() {
	let name;
	let genre;
	let legs;

	const createPet = function (input) {
        name = input;
        return {name : input};
    }

	const setName = function (input) {
		name = input;
	}

	const getName = function () {
		return name;
	}

	const getGenre = function () {
		return genre;
	}

	const setGenre = function (input) {
		genre = input;
	}

	const getLegs = function () {
		return legs;
	}

	const setLegs = function (input) {
	    legs = input;
	}

	return {createPet,setName,getName,getGenre,setGenre,getLegs,setLegs,name,genre,legs}
}
