function start() {
	interval = setInterval(function () {
		game.turn(game.actualBoard)
	}, 200)
}

function pause() {
	clearInterval(interval)
}

var interval = null
const game = new gameOfLife()
game.perform()
game.actualBoard = game.newBoard()
game.draw(game.actualBoard)
