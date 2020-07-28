const gameOfLife = function () {
	this.actualBoard = null;
	this.size = 25;
	this.turns = 0;
	this.createBoard = function (size) {
		let grid = document.createElement('div');
		grid.className = 'grid';

		for (let i = 0; i < size; i++) {
			let row = document.createElement('div');
			row.className = 'row';
			for (let j = 0; j < size; j++) {
				let element = document.createElement('div');
				element.className = 'c' + j + 'r' + i;
				element.addEventListener('click', function () {
					game.revive(this.className);
				});
				row.appendChild(element);
			}
			grid.appendChild(row);
		}
		document.querySelector('.gridPlace').appendChild(grid);
	};

	this.neighbors = function (row, col, board) {
		let neighborsAlive = 0;
		let startCol = col - 1;
		let endCol = col + 1;
		let startRow = row - 1;
		let endRow = row + 1;
		if (col === 0) {
			startCol++;
		}
		if (col === board.length - 1) {
			endCol--;
		}
		if (row === 0) {
			startRow++;
		}
		if (row === board.length - 1) {
			endRow--;
		}
		for (let i = startRow; i <= endRow; i++) {
			for (let j = startCol; j <= endCol; j++) {
				if (board[i][j] === 1) {
					neighborsAlive++;
				}
			}
		}
		if (board[row][col] === 1) {
			neighborsAlive--;
		}
		return neighborsAlive;
	};
	this.turn = function (beforeBoard) {
		const nextBoard = this.newBoard(beforeBoard.length);
		for (let i = 0; i < beforeBoard.length; i++) {
			for (let j = 0; j < beforeBoard.length; j++) {
				let neighborsN = this.neighbors(i, j, beforeBoard);
				if (beforeBoard[i][j] === 1 && (neighborsN === 2 || neighborsN === 3)) {
					nextBoard[i][j] = 1;
				} else {
					if (beforeBoard[i][j] === 0 && neighborsN === 3) {
						nextBoard[i][j] = 1;
					}
				}
			}
		}
		this.actualBoard = nextBoard;

		try {
			this.turns++;
			document.querySelector('.turn').textContent = this.turns;
			this.draw(nextBoard);
		} catch (error) {
			console.log('### Hello tester ###', error);
		}

		return nextBoard;
	};
	this.draw = function (board) {
		let pos = '';
		for (let i = 0; i < board.length; i++) {
			for (let j = 0; j < board.length; j++) {
				pos = '.c' + i + 'r' + j;
				if (board[j][i] === 1) {
					document.querySelector(pos).style.backgroundColor = 'black';
				} else {
					document.querySelector(pos).style.backgroundColor = 'white';
				}
			}
		}
	};
	this.revive = function (pos) {
		let i = pos.indexOf('r');
		let col = parseInt(pos.slice(1, i));
		let row = parseInt(pos.slice(i + 1));
		if (document.querySelector('.' + pos).style.backgroundColor === 'black') {
			document.querySelector('.' + pos).style.backgroundColor = 'white';
			this.actualBoard[row][col] = 0;
		} else {
			document.querySelector('.' + pos).style.backgroundColor = 'black';
			this.actualBoard[row][col] = 1;
		}
	};
	this.newBoard = function (size) {
		let board = [];
		for (let i = 0, col = []; i < size; i++) {
			col = [];
			for (let j = 0; j < size; j++) {
				col.push(0);
			}
			board.push(col);
		}
		return board;
	};
	this.addSize = function () {
		this.size++;
		this.turns = 0;
		document.querySelector('.grid').remove();
		this.createBoard(this.size);
		this.actualBoard = this.newBoard(this.size);
		this.draw(this.actualBoard);
	};
	this.restSize = function () {
		this.size--;
		this.turns = 0;
		document.querySelector('.grid').remove();
		this.createBoard(this.size);
		this.actualBoard = this.newBoard(this.size);
		this.draw(this.actualBoard);
	};
};
