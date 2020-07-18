const container = document.getElementById('container')

    

const drawBoard = function (rows, cols) {
	container.style.setProperty('--grid-rows', rows)
	container.style.setProperty('--grid-cols', cols)
	for (c = 0; c < rows * cols; c++) {
        let cell = document.createElement('div')
        cell.addEventListener('click', function(){
            cell.style.backgroundColor = 'red'
        })
       
		cell.innerText = c + 1
		container.appendChild(cell).className = 'grid-item grid-item' + c
		container.appendChild(cell).addEventListener('click', function () {
        
		
		})
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
