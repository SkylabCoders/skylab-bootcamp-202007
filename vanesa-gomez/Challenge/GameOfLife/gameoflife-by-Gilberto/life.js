const isAlive = 1;
const isDead = 0;
const idSeparator = '--';
const interval = null;
function Life() {
  function countNeighbours({ row = 0, column = 0 }, state) {
    const rowBefore = state[row - 1] || [];
    const rowAfter = state[row + 1] || [];

    let neighbourCounter =
      +!!rowBefore[column - 1] +
      +!!rowBefore[column] +
      +!!rowBefore[column + 1] +
      +!!state[row][column - 1] +
      +!!state[row][column + 1] +
      +!!rowAfter[column - 1] +
      +!!rowAfter[column] +
      +!!rowAfter[column + 1];

    return neighbourCounter;
  }

  function next(initialState) {
    if (!initialState) return;

    let nextState = [];

    for (let rowIndex = 0; rowIndex < initialState.length; rowIndex++) {
      // copy each row to the next state array
      nextState = [...nextState, [...initialState[rowIndex]]];

      // Read each cell
      for (
        let columnIndex = 0;
        columnIndex < initialState[rowIndex].length;
        columnIndex++
      ) {
        const isCellAlive = initialState[rowIndex][columnIndex] === isAlive;
        const position = { row: rowIndex, column: columnIndex };
        const neighbours = countNeighbours(position, initialState);

        if (isCellAlive) {
          nextState[rowIndex][columnIndex] =
            neighbours < 2 || neighbours > 3 ? isDead : isAlive;
        } else {
          if (neighbours === 3) nextState[rowIndex][columnIndex] = isAlive;
        }
      }
    }

    return nextState;
  }

  function play() {
    // get intinital state fron html inputs
    let currentState = readCells();
    if (!currentState)
      //call next again after an interval of time with the new state
      interval = setInterval(() => {
        currentState = this.next(currentState);
      }, 500);
  }

  function stop() {
    clearInterval(interval);
  }

  function readCells() {
    let matrix = [];
    const formElement = document.getElementsByTagName('form')[0];
    for (
      let controlIndex = 0;
      controlIndex < formElement.elements.length;
      controlIndex++
    ) {
      const { row, column } = getRowAndColumn(
        formElement.elements[controlIndex].id
      );
      if (matrix[row]) {
        matrix[row][column] = +formElement.elements[controlIndex].checked;
      } else {
        matrix = [...matrix, [+formElement.elements[controlIndex].checked]];
      }
    }
    return matrix;
  }

  function getRowAndColumn(elementId) {
    const [, row, column] = elementId.split(idSeparator);
    return { row, column };
  }
  return { next, play, stop, isAlive };
}
