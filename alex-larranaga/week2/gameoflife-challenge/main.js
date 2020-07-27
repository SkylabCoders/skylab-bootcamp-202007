//THE LOGIC THAT PERFORMS THE GAME ITESELF ----- TODO:: Need to add second arg for second generation

const container = document.getElementById('container');
var playerArray = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var emptyArray = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

//console.log(createEmptyBoard(4, 4));

function doMagic(inputArray, outputArray) {
	emptyArray = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	];
	for (let i = 0; i < inputArray.length; i++) {
		for (let j = 0; j < inputArray[i].length; j++) {
			let neighbors = 0;

			try {
				if (inputArray[i - 1][j - 1] === 1) {
					neighbors++;
				}
			} catch (error) {}
			try {
				if (inputArray[i - 1][j] === 1) {
					neighbors++;
				}
			} catch (error) {}
			try {
				if (inputArray[i - 1][j + 1] === 1) {
					neighbors++;
				}
			} catch (error) {}

			try {
				if (inputArray[i][j - 1] === 1) {
					neighbors++;
				}
			} catch (error) {}

			try {
				if (inputArray[i][j + 1] === 1) {
					neighbors++;
				}
			} catch (error) {}
			try {
				if (inputArray[i + 1][j - 1] === 1) {
					neighbors++;
				}
			} catch (error) {}
			try {
				if (inputArray[i + 1][j] === 1) {
					neighbors++;
				}
			} catch (error) {}
			try {
				if (inputArray[i + 1][j + 1] === 1) {
					neighbors++;
				}
			} catch (error) {}

			if (inputArray[i][j] === 0) {
				switch (neighbors) {
					case 3:
						outputArray[i][j] = 1;
						break;
					default:
						outputArray[i][j] = 0;
				}
			} else if (inputArray[i][j] === 1) {
				switch (neighbors) {
					case 0:
					case 1:
						outputArray[i][j] = 0;
						break;
					case 2:
					case 3:
						outputArray[i][j] = 1;
						break;
					case 4:
					case 5:
					case 6:
					case 7:
					case 8:
						outputArray[i][j] = 0;
						break;
					default:
						outputArray[i][j] = 0;
				}
			}
		}
	}
	console.log(outputArray);
	playerArray = outputArray;
	drawNexgtGeneration(playerArray);
	return console.log(outputArray);
}
var newDivArray = document.getElementsByClassName('grid-item');

function drawNexgtGeneration(nextGeneration) {
	//var newDivArray = Array.from(document.getElementsByClassName('grid-item'))
	//var newDivArray = document.getElementsByClassName('grid-item')
	console.log(newDivArray);
	console.log(nextGeneration);
	var counter = 0;
	for (let i = 0; i < nextGeneration.length; i++) {
		for (let j = 0; j < nextGeneration[i].length; j++) {
			if (nextGeneration[i][j] === 1) {
				newDivArray[counter].style.backgroundColor = 'red';
			} else {
				newDivArray[counter].style.backgroundColor = 'white';
			}
			counter++;
		}
	}
}

//Draw Grid and add event listener to each div for: When clicked, change backgroud to red
//											  : Return all array every click, and change class to the clicked one/s
//											  : Call chunk function
const drawBoard = function (rows, cols) {
	container.style.setProperty('--grid-rows', rows);
	container.style.setProperty('--grid-cols', cols);
	for (c = 0; c < rows * cols; c++) {
		let cell = document.createElement('div');
		cell.addEventListener(
			'click',
			(returnBoard = function () {
				cell.style.backgroundColor = 'red';
				let divArray = Array.from(document.getElementsByClassName('grid-item'));
				cell.classList.add('true');
				// Split in group of 3 items
				var dividedArray = chunkArray(mutateToBinary(divArray), 10);
				playerArray = dividedArray;
				return playerArray;
			})
		); /*  */
		cell.innerText = c + 1;
		container.appendChild(cell).className = 'grid-item';
	}
};
let submitButton = document.getElementById('createButton');
submitButton.addEventListener('click', drawBoard(10, 10));

//Create Empty Array for second state of the game
const createEmptyBoard = function (row, cell) {
	let gameBoard = [];
	let rowCells = [];
	for (let j = 0; j <= cell; j++) {
		rowCells.push(0);
	}
	for (let i = 0; i <= row; i++) {
		gameBoard.push(rowCells);
	}
	return gameBoard;
};

//Functin to transtale divs into binary array: clicked div = 1, non-cliked div = 0
function mutateToBinary(arr) {
	let boardMutatedArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].className === 'grid-item true') {
			boardMutatedArray.push(1);
		} else {
			boardMutatedArray.push(0);
		}
	}
	return boardMutatedArray;
}
//Chunk the array into smaller arrays, in a big array wrapping all of them
function chunkArray(myArray, chunk_size) {
	var index = 0;
	var arrayLength = myArray.length;
	var tempArray = [];

	for (index = 0; index < arrayLength; index += chunk_size) {
		myChunk = myArray.slice(index, index + chunk_size);

		tempArray.push(myChunk);
	}

	return tempArray;
}
