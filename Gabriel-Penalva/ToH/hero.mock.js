const heroList = [
	{ id: 11, name: 'Dr Nice' },
	{ id: 12, name: 'Narco' },
	{ id: 13, name: 'Bombasto' },
	{ id: 14, name: 'Celeritas' },
	{ id: 15, name: 'Magneta' },
	{ id: 16, name: 'RubberMan' },
	{ id: 17, name: 'Dynama' },
	{ id: 18, name: 'Dr IQ' },
	{ id: 19, name: 'Magma' },
	{ id: 20, name: 'Tornado' }
];

function Address(city, country) {
	this.city = city;
	this.country = country;
}


function Skylaber(id, name, completedChallenges, address) {
	this.id = id;
	this.name = name;
	this.completedChallenges = completedChallenges;
	this.address = address;
}