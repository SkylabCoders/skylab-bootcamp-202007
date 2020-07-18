'use strict'
let gameOfLife = [
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
]
let myGameOfLife = function (newGame) {
	let myNewGameStage = new gameOfLife()
	for (let i = 0; i < newGame.length; i++) {
		for (let j = 0; j < newGame[i].length; j++) {
			let neighbours = 0
			if (newGame[i - 1][j - 1] === 1) {
				neighbours++
			}
			if (newGame[i - 1][j] === 1) {
				neighbours++
			}
			if (newGame[i - 1][j + 1] === 1) {
				neighbours++
			}
			if (newGame[i][j - 1] === 1) {
				neighbours++
			}
			if (newGame[i][j + 1] === 1) {
				neighbours++
			}
			if (newGame[i + 1][j - 1] === 1) {
				neighbours++
			}
			if (newGame[i + 1][j] === 1) {
				neighbours++
			}
			if (newGame[i + 1][j + 1] === 1) {
				neighbours++
			}
			if (neighbours === 3 && newGame[i][j] === 0) {
				myNewGameStage[i][j] = 1
			} else if ((neighbours != 3 || neighbours != 2) && newGame[i][j] === 1) {
				myNewGameStage[i][j] = 0
			}
		}
    }
    this.newGame = myNewGameStage;
}
