let initialState = [
    [0,0,0,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,0,0,0]
];

let currentState = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,1,1,1,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
]

let nextState = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
];

let counter = 0;
function playGame(){
    for(let i = 0; i < currentState.length; i++){
      for(let j = 0; j < currentState[i].length; j++){
          let numberOfNeighbors = countNeighbors(i, j);
          if(currentState[i][j] === 1) {            // SI ESTA VIVA
              if(numberOfNeighbors === 2 || numberOfNeighbors === 3) {
                  nextState[i][j] = 1;
              } else {
                  nextState[i][j] = 0;
              }
          } else {                              //SI ESTA MUERTA
              if(numberOfNeighbors === 3) {
                  nextState[i][j] = 1;
              }
          }
          //   console.log(`El elemento [${i}][${j}] tiene ${numberOfNeighbors} vecinos`);
        }
    }
    console.log(nextState)
}

function countNeighbors(i, j) {
    let count = 0;

    for(let x = 0; x < currentState.length; x++) {
        for(let y = 0; y < currentState[x].length; y++){
            if(x == i-1 && y == j-1) {
                if(currentState[x][y] == 1 ) count++
            }
            if(x == i-1 && y == j) {
                if(currentState[x][y] == 1 ) count++
            }
            if(x == i-1 && y == j+1) {
                if(currentState[x][y] == 1 ) count++
            }
            if(x == i && y == j-1) {
                if(currentState[x][y] == 1 ) count++
            }
            if(x == i && y == j+1) {
                if(currentState[x][y] == 1 ) count++
            }
            if(x == i+1 && y == j-1) {
                if(currentState[x][y] == 1 ) count++
            }
            if(x == i+1 && y == j) {
                if(currentState[x][y] == 1 ) count++
            }
            if(x == i+1 && y == j+1) {
                if(currentState[x][y] == 1 ) count++
            }
          }
      }
    return count;
    }

playGame();
