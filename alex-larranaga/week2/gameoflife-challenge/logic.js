let testArray = [
	[0, 0, 0, 0, 0],
	[0, 0, 1, 0, 0],
	[0, 0, 1, 0, 0],
	[0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0],
]

let expectedArray = []

function doMagic(inputArray, outputArray) {
	//ITERATE THROUGH ARRAYS
	for (var j = 1; j < inputArray.length - 1; j++) {
		for (var k = 1; k < inputArray[j].length - 1; k++) {
			var totalCells = 0
			//check 8 neighbors
			totalCells += inputArray[j - 1][k - 1] //top left
			totalCells += inputArray[j - 1][k] //top center
			totalCells += inputArray[j - 1][k + 1] //topinputArray
			totalCells += inputArray[j][k - 1] //middle left
			totalCells += inputArray[j][k + 1] //middleinputArray
			totalCells += inputArray[j + 1][k - 1] //bottom left
			totalCells += inputArray[j + 1][k] //bottom center
			totalCells += inputArray[j + 1][k + 1] //bottom right

			//apply the rules to each cell
			if (inputArray[j][k] === 0) {
				switch (totalCells) {
					case 3:
						outputArray[j][k] = 1 //if cell is dead and has 3 neighbours, switch it on
						break
					default:
						outputArray[j][k] = 0 //otherwise leave it dead
				}
			} else if (inputArray[j][k] === 1) {
				//apply rules to living cell
				switch (totalCells) {
					case 0:
					case 1:
						outputArray[j][k] = 0 //die of lonelines
						break
					case 2:
					case 3:
						outputArray[j][k] = 1 //carry on living
						break
					case 4:
					case 5:
					case 6:
					case 7:
					case 8:
						outputArray[j][k] = 0 //die of overcrowding
						break
					default:
						outputArray[j][k] = 0 //
				}
			}
		}
	}

	for (var j = 0; j < inputArray.length; j++) {
		for (var k = 0; k < inputArray[i].length; k++) {
			inputArray[j][k] = outputArray[j][k]
		}
	}
	return outputArray
}

console.log(doMagic(testArray, expectedArray))
