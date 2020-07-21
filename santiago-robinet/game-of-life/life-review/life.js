const isAlive = 1;
const isDead = 0;
const interval = null;
idSeparator = '--';
function Life() {

    function countNeighbours({ row = 0, column = 0 }, state) {
        const rowBefore = state[row - 1] || []; //Con esto le decimos que nos devuelva state[row - 1] 
        const rowAter = state [row + 1] || [];// y si es null o undefined devuelva un string vacio.

        let neighbourCounter = 
            + !! rowBefore[column - 1] +
            + !! rowBefore[column] +
            + !! rowBefore[column + 1] +        //La negacion de la negacion  convierte cualquier valor a booleano
            + !! state[row][column - 1] +       //y el signo + delante de cualquier expresion la convierte en NUMERO
            + !! state[row][column + 1] +       //matematicamente false = 0 y true = 1;
            + !! rowAter[column - 1] +
            + !! rowAter[column] +
            + !! rowAter[column + 1];

        return neighbourCounter || 0;
    }

    function next(initialState) {
        if (!initialState) return;

        let nextState = [];

        for (let rowIndex = 0; rowIndex < initialState.length; rowIndex++) {debugger

            nextState = [...nextState, [...initialState[rowIndex]]];

            for (let columnIndex = 0; columnIndex < initialState[rowIndex].length; columnIndex++) {


                const isCellAlive = initialState[rowIndex][columnIndex] === isAlive;
                const position = { row: rowIndex, column: columnIndex };
                const neighbours = countNeighbours(position, initialState);

                if (isCellAlive) {

                    nextState[rowIndex][columnIndex] = 
                    neighbours < 2 || neighbours > 3 ? isDead : isAlive;

                } else {
                    if (neighbours === 3) nextState[rowIndex][columnIndex] = isAlive;
                };

                nextState[rowIndex][columnIndex] = nextGenerationLife;

                writeCell(position, nextGenerationLife);
            }

        }

        return nextState;
    }


    function play(){
        let currentState = readCells();

        interval = setInterval(() => {
            currentState = this.next(currentState)
            
        }, 500);
    }

    function stop(){
        clearInterval(interval);
    }

    function readCells(){
        let matrix=[];
        const formElement = document.getElementsByTagName('form')[0];

        for (let controlIndex = 0; controlIndex < formElement.elements.length;){
            const{row, column} = getRowAndColumn(formElement.elements[controlIndex].id);
            
            if(matrix[row]){
                matrix[row][column] = +formElement.elements[controlIndex].checked;
            } else {
                matrix = [...matrix, [+formElement.elements[controlIndex].checked]];
            }
        }
    }

    function writeCells({row = 0, column = 0}, isAlive){
        document.getElementById(`cell--${row}--${column}`).checked = !!isAlive;
    }

    // function clear(){
    //     this.next()
    // }

    function toggleButton(elementId){
        document.getElementById(elementId).style.display = 'none';
    }

    function getRowAndColumn(elementId){
        const [, row, column] = elementId.split(idSeparator);
        return{row, column}
    }


    return { next, play };
}


