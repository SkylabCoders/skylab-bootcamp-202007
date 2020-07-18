const container = document.getElementById('container')

const Game {}

const makeDivsAlivefunction = function () {
	cell.style.backgroundColor = 'red'
	let divArray = Array.from(document.getElementsByClassName('grid-item'))
	console.log(divArray)
}

const drawBoard = function (rows, cols) {
	container.style.setProperty('--grid-rows', rows)
	container.style.setProperty('--grid-cols', cols)
	let id1 = 0
	let id2 = 0
	for (c = 0; c < rows * cols; c++) {
		let cell = document.createElement('div')
		cell.addEventListener('click', makeDivsAlivefunction)
		cell.innerText = c + 1
		container.appendChild(cell).className = 'grid-item'
	}
}

let submitButton = document.getElementById('createButton')

submitButton.addEventListener('submit', drawBoard(10, 10))

const game = {
	createBoard: function (row, cell) {
		let gameBoard = []
		let rowCells = []
		for (let j = 0; j <= cell; j++) {
			rowCells.push(0)
		}
		for (let i = 0; i <= row; i++) {
			gameBoard.push(rowCells)
		}
		return gameBoard
	},
}

function mutateArray() {}

console.log(element)
