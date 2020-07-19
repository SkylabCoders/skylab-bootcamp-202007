const container = document.getElementById('container')

/* const makeDivsAlivefunction = function () {
	cell.style.backgroundColor = 'red'
	let divArray = Array.from(document.getElementsByClassName('grid-item'))
	console.log(divArray)
}
 */
//Draw Grid and add event listener to each div for: When clicked, change backgroud to red
//											  : Return all array every click, and change class to the clicked one/s
//											  : Call chunk function
const drawBoard = function (rows, cols) {
	container.style.setProperty('--grid-rows', rows)
	container.style.setProperty('--grid-cols', cols)
	for (c = 0; c < rows * cols; c++) {
		let cell = document.createElement('div')
		cell.addEventListener(
			'click',
			(returnBoard = function () {
				cell.style.backgroundColor = 'red'
				let divArray = Array.from(document.getElementsByClassName('grid-item'))
				cell.classList.add('true')
				// Split in group of 3 items
				var dividedArray = chunkArray(mutateToBinary(divArray), 10)
				console.log(dividedArray)
				return dividedArray
			})
		)
		cell.innerText = c + 1
		container.appendChild(cell).className = 'grid-item'
	}
}
let submitButton = document.getElementById('createButton')
submitButton.addEventListener('submit', drawBoard(10, 10))

//Create Empty Array for second state of the game
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

//Functin to transtale divs into binary array: clicked div = 1, non-cliked div = 0
function mutateToBinary(arr) {
	let boardMutatedArray = []
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].className === 'grid-item true') {
			boardMutatedArray.push(1)
		} else {
			boardMutatedArray.push(0)
		}
	}
	return boardMutatedArray
}
//Chunk the array into smaller arrays, in a big array wrapping all of them
function chunkArray(myArray, chunk_size) {
	var index = 0
	var arrayLength = myArray.length
	var tempArray = []

	for (index = 0; index < arrayLength; index += chunk_size) {
		myChunk = myArray.slice(index, index + chunk_size)
		// Do something if you want with the group
		tempArray.push(myChunk)
	}

	return tempArray
}


function gameOfLife(){

}


