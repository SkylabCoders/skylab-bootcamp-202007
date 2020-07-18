
const HEIGHT = 5;
const WIDTH = 5;
var gridState = [];

function SuperCell(yPos, xPos,initialState = 0) {
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
                if ((i >= 0) && (j >= 0) && (i < HEIGHT) && (j < WIDTH)) {
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
        this.numberOfNeig =0;
        return 0;
    };
    
}

 class GoL{
    //Constructor 
    constructor (gridInitialState) {
        let GridSCA = [];
        let GridSCB = [];
        for (let i = 0; i < WIDTH; i++) {
            for (let j = 0; j < HEIGHT; j++) {
                GridSCA.push(new SuperCell(i, j,gridInitialState[i][j]));
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


gridState =
    [
        [0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 1, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1]];

console.log(gridState);

let Game = new GoL(gridState);

console.log(Game.setNewState());
console.log(Game.setNewState());
console.log(Game.setNewState());
console.log(Game.setNewState());
console.log(Game.setNewState());
console.log(Game.setNewState());
console.log(Game.setNewState());
console.log(Game.setNewState());
