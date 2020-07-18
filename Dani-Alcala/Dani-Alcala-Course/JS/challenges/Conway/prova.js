const initialGrid = 
        [[0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]]

let cont = 0;
let i;
let j;

function prova() {
    for (i = 0; i < initialGrid[0].length; i++) {
        for (j = 0; j < initialGrid.length; j++) {
            cont++
        }
    }
    return cont
}

const output = prova()
console.log(output)