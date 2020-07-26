'use strict';
function Skylaber(id, name, challenges, city, country) {
	this.id = id;
	this.name = name;
	this.completedChallenges = challenges;
	this.address = new Address(city, country)
}
function Address(city, country) {
	this.city = city;
	this.country = country;
}