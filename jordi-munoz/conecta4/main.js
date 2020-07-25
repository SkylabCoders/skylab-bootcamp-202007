"use strict";

var game =
    [[],
    [],
    [],
    [],
    [],
    []];

var column1 = document.querySelectorAll("#f1c1, #f2c1, #f3c1, #f4c1, #f5c1, #f6c1");
var column2 = document.querySelectorAll("#f1c2, #f2c2, #f3c2, #f4c2, #f5c2, #f6c2");
var column3 = document.querySelectorAll("#f1c3, #f2c3, #f3c3, #f4c3, #f5c3, #f6c3");
var column4 = document.querySelectorAll("#f1c4, #f2c4, #f3c4, #f4c4, #f5c4, #f6c4");
var column5 = document.querySelectorAll("#f1c5, #f2c5, #f3c5, #f4c5, #f5c5, #f6c5");
var column6 = document.querySelectorAll("#f1c6, #f2c6, #f3c6, #f4c6, #f5c6, #f6c6");
var column7 = document.querySelectorAll("#f1c7, #f2c7, #f3c7, #f4c7, #f5c7, #f6c7");
var showDiv = document.querySelector('.hidden');
var allDiscs = document.querySelectorAll('.panel > div');
var currentTurn = document.getElementById('colTurn');

var resetButton = document.getElementById('reset');
var exitButton = document.getElementById('exit');
var endGame = false;
var colorTurn = 'red';
var resetColor = 'rgb(220, 231, 235)';
var allMatch = 0;

function DiscConstructor(status, color, row, column) {
    this.status = status;
    this.color = color;
    this.rowIndex = row;
    this.columnIndex = column;
}

function createDiscs() {
    for (var row = 0; row < game.length; row++) {
        do {
            var disc = new DiscConstructor(0, resetColor, row, game[row].length);
            game[row].push(disc);
        } while (game[row].length < 7);
    }
}
createDiscs();

function newTurn(colNumb) {
    var onePlay = false;
    for (var row = 5; row >= 0; row--) {
        for (var col = 0; col < game[row].length; col++) {
            if (game[row][col].columnIndex === colNumb && game[row][col].status === 0
                && !onePlay) {
                game[row][col].color = colorTurn;
                game[row][col].status = 1;
                allMatch++;
                var position = 'f' + (row + 1) + 'c' + (colNumb + 1);
                document.getElementById(position).style.backgroundColor = colorTurn;
                onePlay = true;
            }
        }
    }
    if (allMatch === 42) {
        finalTie();
        endGame = true;
    }
    if (checkRow(colorTurn) || checkColumn(colorTurn) || checkDiagonal(colorTurn)) {
        finalWin();
        endGame = true;
    }
}

function checkRow(currentColor) {
    var count = 0;

    for (var row = 0; row < game.length; row++) {
        for (var col = 0; col < game[row].length; col++) {
            if (game[row][col].color === currentColor) {
                count++;
            } else {
                count = 0;
            }
            if (count === 4) {
                return true;
            }
        }
        count = 0;
    }
    return false;
}

function checkColumn(currentColor) {
    var countCol = 0;

    for (var col = 0; col < game[0].length; col++) {
        for (var row = 0; row < game.length; row++) {
            if (game[row][col].color === currentColor) {
                countCol++;
            } else {
                countCol = 0;
            }
            if (countCol === 4) {
                return true;
            }
        }
        countCol = 0;
    }
    return false;
}

function checkDiagonal(currentColor) {
    var downRight = false;
    var downLeft = false;

    for (var row = 0; row < 3; row++) {
        for (var col = 0; col < 4; col++) {
            if (game[row][col].color === currentColor && game[row+1][col+1].color === currentColor &&
                game[row+2][col+2].color === currentColor && game[row+3][col+3].color === currentColor) {
                downRight = true;
            }
            if (downRight) {
                return true;
            }
        }
    }
    for (var row = 3; row < game.length; row++) {
        for (var col = 0; col < 4; col++) {
            if (game[row][col].color === currentColor && game[row-1][col+1].color === currentColor &&
                game[row-2][col+2].color === currentColor && game[row-3][col+3].color === currentColor) {
                downLeft = true;
            }
            if (downLeft) {
                return true;
            }
        }
    }
    return false;
}

function finalWin() {
    showDiv.innerHTML = `The winner is: color ${colorTurn}!!`;
    showDiv.style.display = 'block';
    showDiv.style.backgroundColor = colorTurn;
}
function finalTie() {
    showDiv.innerHTML = 'End of the game, you have tied.';
    showDiv.style.display = 'block';
    showDiv.style.backgroundColor = rgb(21, 174, 230);
}

function fullColumn(indexCol) {
    var countMatch = 0;

    for (var col = 0; col < game[0].length; col++) {
        for (var row = 0; row < game.length; row++) {
            if (game[row][col].status === 1 && game[row][col].columnIndex === indexCol) {
                countMatch++;
            }
            if (countMatch === 6) {
                return true;
            }
        }
        countMatch = 0;
    }
    return false;
}

function switchColor() {
    if (colorTurn === 'red') {
        colorTurn = 'green';
    } else {
        colorTurn = 'red';
    }
    currentTurn.style.backgroundColor = colorTurn;
}

//onclick functions
for (var click of column1) {
    click.onclick = function () {
        if (!fullColumn(0) && !endGame) {
            newTurn(0);
            switchColor();
        }
    }
}
for (var click of column2) {
    click.onclick = function () {
        if (!fullColumn(1) && !endGame) {
            newTurn(1);
            switchColor();
        }
    }
}
for (var click of column3) {
    click.onclick = function () {
        if (!fullColumn(2) && !endGame) {
            newTurn(2);
            switchColor();
        }
    }
}
for (var click of column4) {
    click.onclick = function () {
        if (!fullColumn(3) && !endGame) {
            newTurn(3);
            switchColor();
        }
    }
}
for (var click of column5) {
    click.onclick = function () {
        if (!fullColumn(4) && !endGame) {
            newTurn(4);
            switchColor();
        }
    }
}
for (var click of column6) {
    click.onclick = function () {
        if (!fullColumn(5) && !endGame) {
            newTurn(5);
            switchColor();
        }
    }
}
for (var click of column7) {
    click.onclick = function () {
        if (!fullColumn(6) && !endGame) {
            newTurn(6);
            switchColor();
        }
    }
}

resetButton.onclick = function () {
    game = [[], [], [], [], [], []];
    createDiscs();
    allDiscs.forEach(function (element) {
        element.style.backgroundColor = resetColor;
      });
    currentTurn.style.backgroundColor = 'red';
    showDiv.style.display = 'none';
    showDiv.style.backgroundColor = 'rgb(21, 174, 230)';
    endGame = false;
    allMatch = 0;
}
exitButton.onclick = function () {
    var exit = window.confirm('Do you really want to leave?');
    if (exit) {
        showDiv.innerHTML = 'Thanks to use CONNECT 4!!';
        showDiv.style.display = 'block';
        showDiv.style.backgroundColor = 'rgb(21, 174, 230)';
        endGame = true;
    }
}

