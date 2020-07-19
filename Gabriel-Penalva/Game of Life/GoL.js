//Developed by Gabriel Penalva
const HEIGHT = 100;
const WIDTH = 100;

// prints the Grid on HTML
let grand = document.getElementById("grand");

for (let i = 0; i < WIDTH; i++) {
    let fatherDiv = document.createElement('div');
    fatherDiv.className = 'father';
    fatherDiv.id = i;
    grand.appendChild(fatherDiv);
    for (let j = 0; j < HEIGHT; j++) {
        let childDiv = document.createElement('div');
        childDiv.style.backgroundColor = "white";
        childDiv.onclick = function () {
            if (childDiv.style.backgroundColor === "white") {
                childDiv.style.backgroundColor = "black"
            } else {
                childDiv.style.backgroundColor = "white"
            }
        };
        childDiv.className = 'child';
        childDiv.id = "" + i + "" + j;
        fatherDiv.appendChild(childDiv);
    }
}

function SuperCell(gridState) {
    let actGridState = gridState;
    let newGridState = [];
    
    let setNumberOfNeig = function (yPos, xPos) {
        let nAlive = 0;
        for (let i = yPos - 1; i <= yPos + 1; i++) {
            for (let j = xPos - 1; j <= xPos + 1; j++) {
                if ((i >= 0) && (j >= 0) && (i < WIDTH) && (j < HEIGHT)) {
                    if (j !== xPos || i !== yPos) {
                        if (actGridState[i][j] === 1) {
                            nAlive++;
                        }
                    }
                }
            }
        }
        return nAlive;
    };

    let getNextState = function (numberOfNeig, yPos, xPos) {

        if (actGridState[yPos][xPos] === 0 && numberOfNeig === 3) {

            numberOfNeig = 0;
            return 1;
        }
        if (actGridState[yPos][xPos] === 1 && (numberOfNeig === 2 || numberOfNeig === 3)) {

            numberOfNeig = 0;
            return 1;
        }
        return 0;
    };

    let getNewState = function () {
        let row = [];
        let neig = 0;
        let newState = 0;
        for (let i = 0; i < WIDTH; i++) {
            for (let j = 0; j < HEIGHT; j++) {
                neig = setNumberOfNeig(i, j);
                newState = getNextState(neig, i, j);
                row.push(newState);
            }
            newGridState.push(row);
            row = [];
        }
        return newGridState;
    }
    return getNewState;
}

//Gets the initial state from HTML
function getHtmlState() {
    let grid = [];
    let gredIn = [];
    let fathers = document.getElementById("grand").childNodes;
    for (let i = 1; i < fathers.length; i++) {
        let childs = fathers[i].childNodes;
        for (let j = 0; j < childs.length; j++) {
            if (childs[j].style.backgroundColor === "black") {
                grid.push(1);
            } else { grid.push(0); }
        }
        gredIn.push(grid);
        grid = [];
    }
    return gredIn;
};

function setHtmlState(newGridState) {

    let fathers = document.getElementById("grand").childNodes;
    for (let i = 1; i < fathers.length; i++) {
        let childs = fathers[i].childNodes;
        for (let j = 0; j < childs.length; j++) {
            if (newGridState[i - 1][j] === 1) {
                childs[j].style.backgroundColor = "black";
            } else { childs[j].style.backgroundColor = "white" }
        }
    }
};

function startGame() {

    setInterval('y()', 300);
}
function y() {
    let newState = getHtmlState();
    let game = SuperCell(newState);
    setHtmlState(game());
}

