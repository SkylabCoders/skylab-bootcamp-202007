'use strict';

// Declaration of rows, columns, and the total cells
const row = 5;
const col = 10;
const cells = row * col;

function createGrid() {
	let grid = [];
	for (let y = 0; y < row; y++) {
		grid[y] = [];
		for (let x = 0; x < col; x++) {
			grid[y][x] = 0;
		}
	}
	return grid;
}

let grid = createGrid();

function randomizeGrid(grid) {
	for (let y = 0; y < grid.length; y++) {
		for (let x = 0; x < grid[y].length; x++) {
			grid[y][x] = Math.round(Math.random() * 1);
		}
	}
	return grid;
}

grid = randomizeGrid(grid);
console.table(grid);
let nextGrid = createGrid();

function checkNeighbours(grid, y, x) {
	const rowBefore = grid[y - 1] || [];
	const rowAfter = grid[y + 1] || [];
	let neighbours =
		+!!rowBefore[x - 1] +
		+!!rowBefore[x] +
		+!!rowBefore[x + 1] +
		+!!grid[y][x - 1] +
		+!!grid[y][x + 1] +
		+!!rowAfter[x - 1] +
		+!!rowAfter[x] +
		+!!rowAfter[x + 1];
	return neighbours;
}

function applyRules(grid, y, x) {
	/* debugger */
	for (let y = 0; y < grid.length; y++) {
		for (let x = 0; x < grid[y].length; x++) {
			let neighbours = checkNeighbours(grid, y, x);

			if (grid[y][x] === 1) {
				nextGrid[y][x] = neighbours < 2 || neighbours > 3 ? 0 : 1;
			} else {
				if (neighbours === 3) nextGrid[y][x] = 1;
			}
			/*       console.log("status:",nextGrid[y][x]);
			 */

			/*       if (( neighbours === 2 || neighbours === 3 ) && grid[y][x] === 1 ) {
        nextGrid[y][x] = 1;
      }
      else if (( neighbours < 2 || neighbours > 3 ) && grid[y][x] === 1 ) {
        nextGrid[y][x] = 0;
      }
      else if ( neighbours === 3 && grid[y][x] === 0 ) {
        nextGrid[y][x] = 1;
      } else {
        nextGrid[y][x] = 0;
      } */
		}
	}
	console.table(nextGrid);
	grid = JSON.parse(JSON.stringify(nextGrid));
}

applyRules(grid, row, col);

/* console.table(grid); */
