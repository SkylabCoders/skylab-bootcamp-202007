"use strict"
function Skylaber(id, name, completedChallenges, city, country) {
	this.id = id;
	this.name = name;
	this.completedChallenges = completedChallenges;
	this.address = { city: city, country: country }
}

function Address(city, country) {
	this.city = city;
	this.country = country;
}