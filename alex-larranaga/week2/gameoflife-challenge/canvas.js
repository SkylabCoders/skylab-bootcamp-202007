const drawBoard = (ctx, step) => {
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			ctx.fillStyle = (i + j) & 1 ? 'black' : 'white' //Define a red fill-color for the rectangle:
			ctx.fillRect(j * step, i * step, step, step) //fillRect()  de la API Canvas 2D dibuja un rectángulo relleno en la posición ( x, y ).
		}
	}
}

const drawPieces = (ctx, y, color, step) => {
	ctx.fillStyle = color

	for (let i = y; i < 2 * step + y; i += step) {  // outter iteration 
		for (let j = step / 2; j < 10 * step; j += step) {
			ctx.beginPath() //beginPath() del API Canvas 2D comienza una nueva ruta vaciando la lista de sub-rutas
			ctx.arc(j, i - step / 2, step / 3, 0, Math.PI * 2) //The arc() method creates an arc/curve (used to create circles, or parts of circles).
			ctx.fill() //The fill() method fills the current drawing (path). The default color is black.
		}
	}
}

const step = 60 //Tamaño

const c = document.createElement('canvas')
c.height = c.width = step * 10
document.body.appendChild(c)
const ctx = c.getContext('2d')

drawBoard(ctx, step)
drawPieces(ctx, step * 3,'red', step) 
drawPieces(ctx, step * 9, 'blue', step)
