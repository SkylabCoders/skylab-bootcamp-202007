let currentState = [];
let nextState = []
for(let i=0; i<10; i++){
  currentState.push([]);
  nextState.push([]);
  for(let j=0; j<10; j++){
    currentState[i].push(0);
    nextState[i].push(0);
  }
}

let counter = 0;

function playGame() {
  for (let i = 0; i < currentState.length; i++) {
    for (let j = 0; j < currentState[i].length; j++) {
      let numberOfneighbours = countneighbours(i, j);
      if (currentState[i][j] === 1) {
        // SI ESTA VIVA
        if (numberOfneighbours === 2 || numberOfneighbours === 3) {
          nextState[i][j] = 1;
        } else {
          nextState[i][j] = 0;
        }
      } else {
        //SI ESTA MUERTA
        if (numberOfneighbours === 3) nextState[i][j] = 1;
      }
    }
  }
  for (let i = 0; i < nextState.length; i++) {
    for (let j = 0; j < nextState[i].length; j++) {
      currentState[i][j] = nextState[i][j];
    }
  }
  printCurrentState();
}

function countneighbours(i, j) {
  let count = 0;

  for (let x = 0; x < currentState.length; x++) {
    for (let y = 0; y < currentState[x].length; y++) {
      if (x == i - 1 && y == j - 1) {
        if (currentState[x][y] == 1) count++;
      }
      if (x == i - 1 && y == j) {
        if (currentState[x][y] == 1) count++;
      }
      if (x == i - 1 && y == j + 1) {
        if (currentState[x][y] == 1) count++;
      }
      if (x == i && y == j - 1) {
        if (currentState[x][y] == 1) count++;
      }
      if (x == i && y == j + 1) {
        if (currentState[x][y] == 1) count++;
      }
      if (x == i + 1 && y == j - 1) {
        if (currentState[x][y] == 1) count++;
      }
      if (x == i + 1 && y == j) {
        if (currentState[x][y] == 1) count++;
      }
      if (x == i + 1 && y == j + 1) {
        if (currentState[x][y] == 1) count++;
      }
    }
  }
  return count;
}

function changeCell(i, j) {
  if(currentState[i][j] == 0) {
    currentState[i][j] = 1 
  } else {
    currentState[i][j] = 0;
  }
  printCurrentState();
}

function printCurrentState() {
  for (let i = 0; i < currentState.length; i++) {
    for (let j = 0; j < currentState[i].length; j++) {
      if (currentState[i][j] === 0) {
        let cell = document.getElementById(`${i}${j}`);
        cell.style.backgroundColor = "white";
      } else {
        let cell = document.getElementById(`${i}${j}`);
        cell.style.backgroundColor = "red";
      }
    }
  }
}

// let start = null
 
// document.querySelector('.initGame').addEventListener('click', function (event) {
// event.preventDefault()
// if (start === null) {
// start = setInterval(function () {
// nextGeneration(blinkerInitial)
//  }, 2000)
//  }
// })


// function startGame() {
//   let playGame = null
   
//   document.querySelector('#button_playGame').addEventListener('click', function (event) {
//   event.preventDefault()
//   if (playGame === null) {
//   playGame = setInterval(function () {
//   playGame(currentState)
//    }, 1000)
//    }
//   })
// }

// function createGrid() {
//     for (let i = 0; i < currentState.length; i++) {
//         // <!-- <div class="containerCell">
//         let row = document.createElement('div');
//         row.className = "row";
//         row.id = `row${i}`;
//         console.log(row);
//         for (let j = 0; j < currentState[i].length; j++) {
//             let cell = document.createElement('div');
//             cell.className = "cell";
//             cell.id = `${i}${j}`;
//             cell.onclick = changeCell(i,j);
//             row.appendChild(cell);
//         }
//       }
// }
