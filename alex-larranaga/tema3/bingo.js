//BINGO
var userName = '';
var newCard = [];
var newNumber = 0;

function bingo() {
	userName = getUserName();
	newNumber = randomNumber();
	newCard = generateCard();
	console.log(`Hi ${userName}, let's play some Bingo, this is your card:`);
	console.log('This is your card: ' + newCard.join(' , '));
	do {
		if (confirm('Wanna show a number?')) {
			newNumber = randomNumber();
			console.log('And this is your new number: ' + newNumber);
			//newCard =
			checkMatch(newCard, newNumber);
		} else {
			console.log('Bye');
			return;
		}
	} while (
		newCard[0] != 'X' ||
		newCard[1] != 'X' ||
		newCard[2] != 'X' ||
		newCard[3] != 'X' ||
		(newCard[4] != 'X' && confirm("Wanna keep playin'?"))
	);
	if (
		newCard[0] === 'X' &&
		newCard[1] === 'X' &&
		newCard[2] === 'X' &&
		newCard[3] === 'X' &&
		newCard[4] === 'X'
	) {
		console.log('BINGO! You WIN!');
		return;
	}
}

//generate card: 5 number array
function generateCard() {
	var randomNumberCard = [],
		numsLen = 5,
		maxNum = 10,
		num;
	while (randomNumber.length < numsLen) {
		num = Math.ceil(Math.random() * maxNum);
		if (randomNumberCard.indexOf(num) === -1) {
			randomNumberCard.push(num);
		}
	}
	return randomNumber;
}

function randomNumber() {
	var randomNumber = Math.ceil(Math.random() * 10);
	return randomNumber;
}

//chequear si el numero random esta en la linea
function checkMatch() {
	if (newCard.includes(newNumber)) {
		for (let i = 0; i < newCard.length; i++) {
			if (newCard[i] === newNumber) {
				newCard[i] = 'X';
				//var index = card.indexOf(number)
				//card[index] = "X"
			}
		}
		printCard(newCard);
		return newCard;
	} else {
		return;
	}
}

//function to check if all numbers have been switched for matches in the array
function checkBingo() {
	if (
		newCard[0] === 'X' &&
		newCard[1] === 'X' &&
		newCard[2] === 'X' &&
		newCard[3] === 'X' &&
		newCard[4] === 'X'
	) {
		console.log('BINGO! You WIN!');
		return true;
	} else {
		return false;
	}
}

function getUserName() {
	var name = prompt('Please enter your name.');

	if (name == null || name == '') {
		alert('You must enter your name in order to play!');
		getUserName();
	} else if (!/^[a-zA-Z]+$/.test(name)) {
		alert('Please only enter letters');
		getUserName();
	} else {
		return;
	}
}

function printCard(card) {
	console.log(card);
}
//TEST
bingo();
