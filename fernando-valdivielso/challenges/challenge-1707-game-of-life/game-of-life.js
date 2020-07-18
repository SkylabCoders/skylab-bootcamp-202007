// Select color input
let color = document.querySelector('#colorPicker');

// Select size input
let myTable = document.getElementById('pixelCanvas');

// Event listener on Submit button
let picker = document.getElementById('sizePicker');

picker.addEventListener('submit', grid);

// Game


let row = null;;
let column = null;

// When size is submitted by the user, call grid()
function grid(event) {
    myTable.innerHTML = '';
    event.preventDefault();
    row = parseInt(document.getElementById('inputHeight').value);
    column = parseInt(document.getElementById('inputWidth').value);
    makeGrid(row, column);
    makeArray(row, column);
}

// When grid() runs, call makeGrid()

function makeGrid(row, column, game) {
    for (let i = 0; i <= row - 1; i++) {
        let myRow = myTable.insertRow();
        for (let j = 0; j <= column - 1; j++) {
            let myCell = myRow.insertCell();
            myCell.addEventListener('click', function () {
                myCell.style.backgroundColor = color.value;
                myCell.id = i + '-' + j;
                let elements = Array.from(document.getElementsByTagName('td'));
                changeArray(makeArray(row, column), elements);
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
            width.push(0);
        }
        game.push(width);
    }
    return game;
}

function changeArray(game, elements) {
    console.log(game);
    let rowCount = 0;
    let columnCount = 0;

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].id === (rowCount + '-' + columnCount)) {
            game[rowCount][columnCount] = 1;
            console.log(game);
        }
        columnCount++;
        if(columnCount === column){
            rowCount++;
            columnCount = 0;
        }
    }
}











