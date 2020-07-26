function start() {
	interval = setInterval(function () {
		game.turn(game.actualBoard)
	}, 100)
}

function pause() {
	clearInterval(interval)
}

var interval = null
const game = new gameOfLife()
game.actualBoard = game.newBoard(game.size)
game.createBoard(game.size)
game.draw(game.actualBoard)
