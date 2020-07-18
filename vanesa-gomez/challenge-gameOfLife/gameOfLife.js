let initialState = [
    [0,0,0,0,0],
    [0,1,1,0,0],
    [0,1,1,1,0],
    [0,0,1,0,0],
    [0,0,0,0,0]
];

let secondState = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
];

let counter = 0;
function playGame(){
    for(let i = 0; i < initialState.length; i++){
      for(let j = 0; j < initialState[i].length; j++){
          let numberOfNeighbors = countNeighbors(i, j);
          console.log(`El elemento [${i}][${j}] tiene ${numberOfNeighbors} vecinos`);
        }
    }
}

function countNeighbors(i, j) {
    let count = 0;

    for(let x = 0; x < initialState.length; x++){
        for(let y = 0; y < initialState[x].length; y++){
            if(x == i-1 && y == j-1) {
                if(initialState[x][y] == 1 ) count++
            }
            if(x == i-1 && y == j) {
                if(initialState[x][y] == 1 ) count++
            }
            if(x == i-1 && y == j+1) {
                if(initialState[x][y] == 1 ) count++
            }
            if(x == i && y == j-1) {
                if(initialState[x][y] == 1 ) count++
            }
            if(x == i && y == j+1) {
                if(initialState[x][y] == 1 ) count++
            }
            if(x == i+1 && y == j-1) {
                if(initialState[x][y] == 1 ) count++
            }
            if(x == i+1 && y == j) {
                if(initialState[x][y] == 1 ) count++
            }
            if(x == i+1 && y == j+1) {
                if(initialState[x][y] == 1 ) count++
            }
          }
      }

    
    return count;

    }

playGame();


function calculateAliveNeighbours() {
    [i+1][j]
    [i-1][j]
    [i] [j+1]
    [i] [j-1]
    [i+1] [j-1]
    [i+1] [j+1]
    [i-1] [j+1]
    [i-1] [j-1]
}