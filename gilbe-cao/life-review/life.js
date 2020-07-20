'use strict';

function Life() {
  const idSeparator = '--';
  const isAlive = 1;
  const isDead = 0;
  let interval = null;

  function countNeighbours({ row = 0, column = 0 }, state) {
    const rowBefore = state[row - 1] || [];
    const rowAfter = state[row + 1] || [];

    // !! double negation converts to booleand
    // + sum sign converts to number
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
          /*  
            Any live cell with fewer than two live neighbours dies, as if by underpopulation.
            Any live cell with two or three live neighbours lives on to the next generation.
            Any live cell with more than three live neighbours dies, as if by overpopulation.
        */
          nextState[rowIndex][columnIndex] =
            neighbours < 2 || neighbours > 3 ? isDead : isAlive;
        } else {
          // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
          if (neighbours === 3) nextState[rowIndex][columnIndex] = isAlive;
        }
      }
    }

    return nextState;
  }

  function play() {
    // get initial state from html inputs
    let currentState = readCells();

    // call next again after an interval of time with the new state
    interval = setInterval(() => {
      currentState = this.next(currentState);
      console.log(currentState);
    }, 500);
  }

  function stop() {
    clearInterval(interval);
  }

  function readCells() {
    debugger;
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
