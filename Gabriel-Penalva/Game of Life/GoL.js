
const HEIGHT = 25;
const WIDTH = 40;

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
            if(childDiv.style.backgroundColor === "white"){
                childDiv.style.backgroundColor = "black" 
            }else{
                childDiv.style.backgroundColor = "white"}};
        childDiv.className = 'child';
        childDiv.id = "" + i + "" + j;
        fatherDiv.appendChild(childDiv);
    }
}


function SuperCell(yPos, xPos, initialState = 0) {
    //Propierties:
    this.xPos = xPos;
    this.yPos = yPos;
    this.initialState = initialState;
    this.numberOfNeig = 0;

    //SETTERS
    this.setInitialState = function (gridState) {
        this.initialState = (gridState[yPos][xPos])
        return this.initialState;
    };
    this.setNumberOfNeig = function (gridState) {
        let nAlive = 0;
        for (let i = this.yPos - 1; i <= this.yPos + 1; i++) {
            for (let j = this.xPos - 1; j <= this.xPos + 1; j++) {
                if ((i >= 0) && (j >= 0) && (i < WIDTH) && (j < HEIGHT)) {
                    if (j !== this.xPos || i !== this.yPos) {
                        if (gridState[i][j] === 1) {
                            nAlive++;
                        }
                    }
                }
            }
        }
        this.numberOfNeig = nAlive;
    };

    //GETTERS
    this.getNextState = function () {

        if (this.initialState === 0 && this.numberOfNeig === 3) {

            this.numberOfNeig = 0;
            return 1;
        }
        if (this.initialState === 1 && (this.numberOfNeig === 2 || this.numberOfNeig === 3)) {

            this.numberOfNeig = 0;
            return 1;
        }
        this.numberOfNeig = 0;
        return 0;
    };

}

class GoL {
    //Constructor 
    constructor(gridInitialState) {
        let GridSCA = [];
        let GridSCB = [];
        for (let i = 0; i < WIDTH; i++) {
            for (let j = 0; j < HEIGHT; j++) {
                GridSCA.push(new SuperCell(i, j, gridInitialState[i][j]));
            }
            GridSCB.push(GridSCA);
            GridSCA = [];
        }

        this.gridCell = GridSCB;
        this.gridState = gridInitialState;
    }

    setNewState() {
        for (let i = 0; i < WIDTH; i++) {
            for (let j = 0; j < HEIGHT; j++) {
                this.gridCell[i][j].setInitialState(this.gridState);
            }
        }
        for (let i = 0; i < WIDTH; i++) {
            for (let j = 0; j < HEIGHT; j++) {
                this.gridCell[i][j].setNumberOfNeig(this.gridState);
            }
        }
        for (let i = 0; i < WIDTH; i++) {
            for (let j = 0; j < HEIGHT; j++) {
                this.gridState[i][j] = this.gridCell[i][j].getNextState();
            }
        }
        return this.gridState;
    }
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


function startGame () {
    let grid = getHtmlState();
    game = new GoL(grid);

    setInterval('y()', 300);

}
function y() {
    setHtmlState(game.setNewState());
}

