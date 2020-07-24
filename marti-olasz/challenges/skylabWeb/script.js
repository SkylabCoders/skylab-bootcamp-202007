let id = 0;
function skylaber(name, city, country) {
	this.id = id;
	this.name = name;
	this.completedChallenges = Math.round(Math.random() * 20);
	this.address = { city: 'BCN', country: 'Spain' };
	id++;
}

const skylaberList = [
	new skylaber('Aleix'),
	new skylaber('Dani Alo'),
	new skylaber('Esther'),
	new skylaber('Fernando'),
	new skylaber('Gemma'),
	new skylaber('Martí A'),
	new skylaber('Martí O'),
	new skylaber('Santiago'),
	new skylaber('Vanesa'),
	new skylaber('Alex'),
	new skylaber('Anna'),
	new skylaber('Dani Alc'),
	new skylaber('Francesc'),
	new skylaber('Gabriel'),
	new skylaber('Gerard'),
	new skylaber('Jordi'),
	new skylaber('Pablo'),
	new skylaber('Ramon'),
	new skylaber('Simón'),
	new skylaber('Victor')
];

//### Reduce practice ###//
/*
function countCity(counter, index) {
	return index.address.city === 'BCN' ? ++counter : counter;
}

function getCity(acumulator, index) {
	if (index.address.city === 'BCN') {
		acumulator = [
			...acumulator,
			index.name + ' : ' + index.completedChallenges
		];
	}
	return acumulator;
}

const countBCN = skylaberList.reduce(getCity, []);
console.log(countBCN);
*/
