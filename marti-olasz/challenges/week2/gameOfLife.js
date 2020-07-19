const gameOfLife = function () {
	this.actualBoard = null
	this.size = 25
	this.turns = 0
	this.createBoard = function (size) {
		let grid = document.createElement('div')
		grid.className = 'grid'
		grid.style.gridTemplateRows = '1fr '.repeat(size)
		grid.style.gridTemplateColumns = '1fr '.repeat(size)

		for (let i = 0; i < size; i++) {
			for (let j = 0; j < size; j++) {
				let element = document.createElement('div')
				element.className = 'c' + j + 'r' + i
				grid.appendChild(element)
			}
		}
		document.querySelector('.gridPlace').appendChild(grid)
		return grid
	}

	this.neighbors = function (row, col, board) {
		let neighborsAlive = 0
		let startCol = col - 1
		let endCol = col + 1
		let startRow = row - 1
		let endRow = row + 1
		if (col === 0) {
			startCol++
		}
		if (col === this.size - 1) {
			endCol--
		}
		if (row === 0) {
			startRow++
		}
		if (row === this.size - 1) {
			endRow--
		}
		for (let i = startRow; i <= endRow; i++) {
			for (let j = startCol; j <= endCol; j++) {
				if (board[i][j] === 1) {
					neighborsAlive++
				}
			}
		}
		if (board[row][col] === 1) {
			neighborsAlive--
		}
		return neighborsAlive
	}
	this.turn = function (beforeBoard) {
		this.turns++
		document.querySelector('.turn').textContent = this.turns
		const neighborsBoard = this.newBoard()
		for (let i = 0; i < this.size; i++) {
			for (let j = 0; j < this.size; j++) {
				neighborsBoard[i][j] = this.neighbors(i, j, beforeBoard)
			}
		}
		const nextBoard = this.newBoard()
		for (let i = 0; i < this.size; i++) {
			for (let j = 0; j < this.size; j++) {
				if (
					beforeBoard[i][j] === 1 &&
					(neighborsBoard[i][j] === 2 || neighborsBoard[i][j] === 3)
				) {
					nextBoard[i][j] = 1
				} else {
					if (beforeBoard[i][j] === 0 && neighborsBoard[i][j] === 3) {
						nextBoard[i][j] = 1
					}
				}
			}
		}
		this.draw(nextBoard)
		this.actualBoard = nextBoard
		return nextBoard
	}
	this.draw = function (board) {
		let pos = ''
		for (let i = 0; i < this.size; i++) {
			for (let j = 0; j < this.size; j++) {
				pos = '.c' + i + 'r' + j
				if (board[j][i] === 1) {
					document.querySelector(pos).style.backgroundColor = 'black'
				} else {
					document.querySelector(pos).style.backgroundColor = 'white'
				}
			}
		}
	}
	this.perform = function () {
		let pos = ''
		for (let i = 0; i < this.size; i++) {
			for (let j = 0; j < this.size; j++) {
				pos = '.c' + i + 'r' + j
				document.querySelector(pos).addEventListener('click', function () {
					game.revive(this.className)
				})
			}
		}
	}
	this.revive = function (pos) {
		let i = pos.indexOf('r')
		let col = pos.slice(1, i)
		let row = pos.slice(i + 1)
		if (document.querySelector('.' + pos).style.backgroundColor === 'black') {
			document.querySelector('.' + pos).style.backgroundColor = 'white'
			this.actualBoard[row][col] = 0
		} else {
			document.querySelector('.' + pos).style.backgroundColor = 'black'
			this.actualBoard[row][col] = 1
		}
	}
	this.newBoard = function () {
		let board = []
		for (let i = 0, col = []; i < this.size; i++) {
			let col = []
			for (let j = 0; j < this.size; j++) {
				col.push(0)
			}
			board.push(col)
		}
		return board
	}
}
