//### Reduce practice ###//

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
