'use strict'
let gameOfLife = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]
const rowCellList = document.getElementsByClassName('row__cell')
const drawLife = function () {
	let actualCell = 0;
	for (let i = 0; i < gameOfLife.length; i++) {
		for (let j = 0; j < gameOfLife[i].length; j++) {
			if (gameOfLife[i][j] === 0) {
				document.getElementsByClassName('row__cell')[actualCell].classList.remove('live-cell');
				document.getElementsByClassName('row__cell')[actualCell].classList.add('dead-cell');
			} else {
				document.getElementsByClassName('row__cell')[actualCell].classList.remove('dead-cell');
				document.getElementsByClassName('row__cell')[actualCell].classList.add('live-cell');
			}
			actualCell++;
		}
	}
}

drawLife();
const gameOfLifeTurn = function (newGame) {
	let myNewGameStage = [];
	for (let i = 0; i < newGame.length; i++) {
		myNewGameStage[i] = [];
		for (let j = 0; j < newGame[i].length; j++) {
			let neighbours = neighboursCounter(newGame, i, j);
			if (neighbours === 3 && newGame[i][j] === 0) {
				myNewGameStage[i][j] = 1;
			} else if (neighbours !== 3 && neighbours !== 2 && newGame[i][j] === 1) {
				myNewGameStage[i][j] = 0;
			} else {
				myNewGameStage[i][j] = newGame[i][j];
			}
		}
	}
	return myNewGameStage;
}
const neighboursCounter = function (newGame, actualRow, actualColumn){
	let neighbours = 0;
	if (actualRow !== 0) {
		if (newGame[actualRow - 1][actualColumn - 1] === 1) {
			neighbours++;
		}
		if (newGame[actualRow - 1][actualColumn] === 1) {
			neighbours++;
		}
		if (newGame[actualRow - 1][actualColumn + 1] === 1) {
			neighbours++;
		}
	}
	if (newGame[actualRow][actualColumn - 1] === 1) {
		neighbours++;
	}
	if (newGame[actualRow][actualColumn + 1] === 1) {
		neighbours++;
	}
	if (actualRow !== newGame.length - 1) {
		if (newGame[actualRow + 1][actualColumn - 1] === 1) {
			neighbours++;
		}
		if (newGame[actualRow + 1][actualColumn] === 1) {
			neighbours++;
		}
		if (newGame[actualRow + 1][actualColumn + 1] === 1) {
			neighbours++;
		}
	}
	return neighbours;
}

const playAlone = function () {
	gameOfLife = gameOfLifeTurn(gameOfLife);
	drawLife();
}
let myInterval = null;

/* Change cell state before start game */
const changeCellStateHtml = function (cell) {
	if (cell.classList.contains('dead-cell')) {
		cell.classList.remove('dead-cell');
		cell.classList.add('live-cell');
	} else {
		cell.classList.remove('live-cell');
		cell.classList.add('dead-cell');
	}
}
const changeCellStateJS = function (cell) {
	let cellRow = cell.parentNode;
	let mainTable = cellRow.parentNode;
	let cellIndex = Array.prototype.indexOf.call(cellRow.children, cell);
	let rowIndex = Array.prototype.indexOf.call(mainTable.children, cellRow)
	if (gameOfLife[rowIndex][cellIndex] === 0) {
		gameOfLife[rowIndex][cellIndex] = 1;
	} else {
		gameOfLife[rowIndex][cellIndex] = 0;
	}
}
const changeCellState = function (cell) {
	changeCellStateHtml(cell);
	changeCellStateJS(cell);
}

for (let i = 0; i < rowCellList.length; i++) {
	rowCellList[i].addEventListener('click', function (event) {
		event.preventDefault();
		changeCellState(event.target);
	})
}
document.getElementsByTagName('li')[0].addEventListener('click', function (event) {
	event.preventDefault();
	if (myInterval === null) {
		myInterval = setInterval(playAlone, 1000);
	}
})
document.getElementsByTagName('li')[1].addEventListener('click', function (event) {
	event.preventDefault();
	clearInterval(myInterval);
	myInterval = null;
})