const gameOfLife = function (board) {
	this.actualBoard = board
	this.turns = 0
	this.neighbors = function (row, col) {
		let neighborsAlive = 0
		let startCol = col - 1
		let endCol = col + 1
		let startRow = row - 1
		let endRow = row + 1
		if (col === 0) {
			startCol++
		}
		if (col === 9) {
			endCol--
		}
		if (row === 0) {
			startRow++
		}
		if (row === 9) {
			endRow--
		}
		for (let i = startRow; i <= endRow; i++) {
			for (let j = startCol; j <= endCol; j++) {
				if (this.actualBoard[i][j] === 1) {
					neighborsAlive++
				}
			}
		}
		if (this.actualBoard[row][col] === 1) {
			neighborsAlive--
		}
		return neighborsAlive
	}
	this.turn = function () {
		this.turns++
		document.querySelector('.turn').textContent = this.turns
		const neighborsBoard = [
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		]
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				neighborsBoard[i][j] = this.neighbors(i, j)
			}
		}
		const nextBoard = [
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		]
		for (let i = 0; i < neighborsBoard.length; i++) {
			for (let j = 0; j < neighborsBoard[i].length; j++) {
				if (
					this.actualBoard[i][j] === 1 &&
					(neighborsBoard[i][j] === 2 || neighborsBoard[i][j] === 3)
				) {
					nextBoard[i][j] = 1
				} else {
					if (this.actualBoard[i][j] === 0 && neighborsBoard[i][j] === 3) {
						nextBoard[i][j] = 1
					}
				}
			}
		}
		this.actualBoard = nextBoard
		this.draw(this.actualBoard)
		return this.actualBoard
	}
	this.draw = function () {
		let pos = ''
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				pos = '.c' + (i + 1) + 'r' + (j + 1)
				if (this.actualBoard[i][j] === 1) {
					document.querySelector(pos).style.backgroundColor = 'black'
				} else {
					document.querySelector(pos).style.backgroundColor = 'white'
				}
			}
		}
	}
}

let timer = null
const game = new gameOfLife([
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
])
game.draw()
