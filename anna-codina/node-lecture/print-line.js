const customNumber = 1;

let counter = 1;
const callBack = (seconds) => {
	let newTime = customNumber * counter;
	console.log(`Hello World, has pased ${newTime}`);
	if (counter === 5) {
		console.log('done');
		clearInterval(interval);
	}
	++counter;
};

const interval = setInterval(callBack, customNumber * 1000, customNumber);

// Number of duplicates

function count(text) {
	debugger;
	text = text.toLowerCase();
	let actualTextArray = text.split('');
	let actualResponse = undefined;
	for (let i of actualTextArray) {
		const filterResult = actualTextArray.filter((actualLeter) => {
			return actualLeter === i;
		});
		if (filterResult.length > 1) {
			if (!actualResponse) {
				actualResponse = `La letra ${i} se repite un total de ${filterResult.length} vez/es `;
			} else {
				actualResponse += ` y la letra ${i} se repite un total de ${filterResult.length} vez/es`;
			}
		}
		actualTextArray = actualTextArray.filter(
			(actualLeter) => actualLeter !== i
		);
	}
	if (!actualResponse) {
		console.log('No hay repeticiones');
	} else {
		console.log(actualResponse + '.');
	}
}
count('abcde');
count('aabbcde');
count('indivisibility');
count('Indivisibilities');
count('aA11');

// Challenge1
const counterArray = [1];

const challenge1 = (actualTime) => {
	console.log(`Hello world ${actualTime[0]}`);
	++actualTime[0];
	setTimeout(challenge1, counterArray[0] * 1000, counterArray);
};

const intervalOne = setTimeout(
	challenge1,
	counterArray[0] * 1000,
	counterArray
);

//Challenge2
let counterAgain = 5;
let intervalAgain;
const greeting = (delay) => {
	if (counterAgain === 5) {
		clearInterval(intervalAgain);
		intervalAgain = setInterval(() => {
			console.log('hello World.' + delay);
			greeting(delay + 100);
		}, delay);
		counterAgain = 0;
	}

	++counterAgain;
};

greeting(100);
