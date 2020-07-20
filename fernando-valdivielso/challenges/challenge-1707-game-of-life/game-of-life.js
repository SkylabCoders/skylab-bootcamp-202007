
// Select color input
let color = document.querySelector('#colorPicker');

// Select size input
let myTable = document.getElementById('pixelCanvas');

// Event listener on Submit button
let picker = document.getElementById('sizePicker');
picker.addEventListener('submit', grid);


// Game
let turn = document.getElementById('next-turn');
turn.addEventListener('click', function (event) {
    checkNeighbours(nextArray);
})

let secondState = [];
let elements = null;
let row = null;
let column = null;
let newArray;
let nextArray;
let neighbours = null;

// When size is submitted by the user, call grid()
function grid(event) {
    myTable.innerHTML = '';
    event.preventDefault();
    row = parseInt(document.getElementById('inputHeight').value);
    column = parseInt(document.getElementById('inputWidth').value);
    newArray = makeGrid(row, column);
    nextArray = makeArray(row, column);

}


// When grid() runs, call makeGrid()

function makeGrid(row, column) {
    // debugger;
    for (let i = 0; i <= row - 1; i++) {
        let myRow = myTable.insertRow();
        for (let j = 0; j <= column - 1; j++) {
            let myCell = myRow.insertCell();
            myCell.addEventListener('click', function () {
                myCell.style.backgroundColor = color.value;
                myCell.id = i + '-' + j;
                elements = Array.from(document.getElementsByTagName('td'));
                changeArray(nextArray, elements);

                console.log(elements);
            });
        };
    };
}



function makeArray(row, column) {
    let game = [];
    for (let i = 1; i <= column; i++) {
        let width = [];
        for (let j = 0; j < row; j++) {
            width.push(false);
        }
        game.push(width);
    }
    return game;
}

function changeArray(game, elements) {

    let rowCount = 0;
    let columnCount = 0;
    let changedGame = game;

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].id === (rowCount + '-' + columnCount)) {
            changedGame[rowCount][columnCount] = true;

        }
        columnCount++;

        if (columnCount === column) {
            rowCount++;
            columnCount = 0;
        }
    }
    console.log('changed game' + changedGame);
    secondState = changedGame;
    return changedGame;
}




function checkNeighbours(array) {
    // debugger;
    
    let aliveCount = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === true) {
                if (i === 0 && j === 0) {
                    if (array[i][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j] === true) {
                        aliveCount++;
                    }
                }
                if (i === 0 && (j > 0 && j < array[i].length - 1)) {
                    if (array[i][j - 1] === true) {
                        aliveCount++;
                    }
                    if (array[i][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j - 1] === true) {
                        aliveCount++;
                    }
                }
                if (i === 0 && j === array[i].length - 1) {
                    if (array[i][j - 1] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j - 1] === true) {
                        aliveCount++;
                    }
                }
                if ((i > 0 && i < array.length - 1) && (j === 0)) {
                    if (array[i - 1][j] === true) {
                        aliveCount++;
                    }
                    if (array[i - 1][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j] === true) {
                        aliveCount++;
                    }
                }
                if ((i > 0 && i < array.length - 1) && (j > 0 && j < array[i].length - 1)) {
                    if (array[i - 1][j - 1] === true) {
                        aliveCount++;
                    }
                    if (array[i - 1][j] === true) {
                        aliveCount++;
                    }
                    if (array[i - 1][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j - 1] === true) {
                        aliveCount++;
                    }
                    if (array[i][j - 1] === true) {
                        aliveCount++;
                    }
                }
                if ((i > 0 && i < array.length - 1) && (j > 0 && j === array[i].length - 1)) {
                    if (array[i - 1][j] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j - 1] === true) {
                        aliveCount++;
                    }
                    if (array[i][j - 1] === true) {
                        aliveCount++;
                    }
                    if (array[i - 1][j - 1] === true) {
                        aliveCount++;
                    }
                }
                if (i === array.length - 1 && j === 0) {
                    if (array[i - 1][j] === true) {
                        aliveCount++;
                    }
                    if (array[i - 1][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i][j + 1] === true) {
                        aliveCount++;
                    }
                }
                if (i === array.length - 1 && j < array[i].length - 1) {
                    if (array[i - 1][j] === true) {
                        aliveCount++;
                    }
                    if (array[i - 1][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i][j - 1] === true) {
                        aliveCount++;
                    }
                    if (array[i - 1][j - 1] === true) {
                        aliveCount++;
                    }
                }
                if (i === array.length - 1 && j === array[i].length - 1) {
                    if (array[i - 1][j] === true) {
                        aliveCount++;
                    }
                    if (array[i][j - 1] === true) {
                        aliveCount++;
                    }
                    if (array[i - 1][j - 1] === true) {
                        aliveCount++;
                    }
                }
                let position = i + '-' + j;
                console.log('estan vivos ' + aliveCount);

                if (aliveCount < 2 || aliveCount > 3) {
                    array[i][j] = false;
                    secondState[i][j] = false;
                    document.getElementById(position).style.backgroundColor = 'white';
                } else if (aliveCount === 2 || aliveCount === 3) {
                    array[i][j] = true;
                    secondState[i][j] = true;
                
                }
                aliveCount = 0;

            }else if (array[i][j] === false) {
                // debugger;
                if (i === 0 && j === 0) {
                    if (array[i][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j] === true) {
                        aliveCount++;
                    }
                }
                if (i === 0 && (j > 0 && j < array[i].length - 1)) {
                    if (array[i][j - 1] === true) {
                        aliveCount++;
                    }
                    if (array[i][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j - 1] === true) {
                        aliveCount++;
                    }
                }
                if (i === 0 && j === array[i].length - 1) {
                    if (array[i][j - 1] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j - 1] === true) {
                        aliveCount++;
                    }
                }
                if ((i > 0 && i < array.length - 1) && (j === 0)) {
                    if (array[i - 1][j] === true) {
                        aliveCount++;
                    }
                    if (array[i - 1][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j] === true) {
                        aliveCount++;
                    }
                }
                if ((i > 0 && i < array.length - 1) && (j > 0 && j < array[i].length - 1)) {
                    if (array[i - 1][j - 1] === true) {
                        aliveCount++;
                    }
                    if (array[i - 1][j] === true) {
                        aliveCount++;
                    }
                    if (array[i - 1][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j - 1] === true) {
                        aliveCount++;
                    }
                    if (array[i][j - 1] === true) {
                        aliveCount++;
                    }
                }
                if ((i > 0 && i < array.length - 1) && (j > 0 && j === array[i].length - 1)) {
                    if (array[i - 1][j] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j] === true) {
                        aliveCount++;
                    }
                    if (array[i + 1][j - 1] === true) {
                        aliveCount++;
                    }
                    if (array[i][j - 1] === true) {
                        aliveCount++;
                    }
                    if (array[i - 1][j - 1] === true) {
                        aliveCount++;
                    }
                }
                if (i === array.length - 1 && j === 0) {
                    if (array[i - 1][j] === true) {
                        aliveCount++;
                    }
                    if (array[i - 1][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i][j + 1] === true) {
                        aliveCount++;
                    }
                }
                if (i === array.length - 1 && j < array[i].length) {
                    if (array[i - 1][j] === true) {
                        aliveCount++;
                    }
                    if (array[i - 1][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i][j + 1] === true) {
                        aliveCount++;
                    }
                    if (array[i][j - 1] === true) {
                        aliveCount++;
                    }
                    if (array[i - 1][j - 1] === true) {
                        aliveCount++;
                    }
                }
                if (i === array.length - 1 && j === array[i].length - 1) {
                    if (array[i - 1][j] === true) {
                        aliveCount++;
                    }
                    if (array[i][j - 1] === true) {
                        aliveCount++;
                    }
                    if (array[i - 1][j - 1] === true) {
                        aliveCount++;
                    }
                }
                let position = i + '-' + j;
                console.log('estan vivos ' + aliveCount);
                if (aliveCount === 3) {
                    array[i][j] = true;
                    secondState[i][j] = true;
                    document.getElementById(position).style.backgroundColor = color.value;

                }
                aliveCount = 0;
            }
        }
    }
    revertArray(changedGame, elements);
    return aliveCount;
}
        

function revertArray(changedGame, elements) {
    let rowCount = 0;
    let columnCount = 0;
    let secondState = changedGame;

    for (let i = 0; i < seconState.length; i++) {
        for (let j = 0; j < secondState[i].length; j++) {
            let index = i + j;
            if (secondState [i][j] === true) {
                let id = i + '-' + j;
                elements[index].id(id);  
            }
            
        }        
    }
    document.
}
        
    































