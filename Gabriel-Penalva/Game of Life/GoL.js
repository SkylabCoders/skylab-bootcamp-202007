
const HEIGHT = 5;
const WIDTH = 5;
let grid =[[],[]];

function SuperCell(initial = 0,xPos,ypos){
    this.xPos = xPos;
    this.yPos = ypos;
    this.initialState = initial;
    this.nextState = function (){
        if (this.initialState === 0 && this.numberOfNeig === 3){
            return 1;
        }
        if (this.initialState === 1 && (this.numberOfNeig === 2 || this.numberOfNeig === 3)){
            return 1;
        }
        return 0;
    };
    this.numberOfNeig = 0;
    this.calcNumberOfNeig = function (){
        let nAlive = 0;
        for (let i = this.yPos-1; i <= this.yPos +1; i++){
            for (let j = this.xPos-1; j <= this.xPos +1; j++){
                if (x !== this.xPos || y !== this.yPos){
                    if (grid[x][y] !== undefined){
                        if(grid[x][y].initialState === 1){
                            nAlive++;
                        }
                    }
                } 
            }
        }
        return nAlive;

    };
    this.askNeig = function (x,y){
        if (grid[x][y] !== undefined)
            return grid[x][y].initialState;
        return undefined;
    }

}