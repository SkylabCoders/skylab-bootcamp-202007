const rowColumSeparator = '--';

function Life() {
  let isPlaying;
  let playButton = document.getElementById('life__play');
  let stopButton = document.getElementById('life__stop');
  let clearButton = document.getElementById('life__clear');

  function toggleInlineElement() {
    if (this.style.display === 'none') {
      this.style.display = 'inline';
    } else {
      this.style.display = 'none';
    }
  }

  function play() {
    toggleInlineElement.call(playButton);
    toggleInlineElement.call(stopButton);
    let currentState = setInitialState();

    currentState = this.next(currentState);

    isPlaying = setInterval(() => {
      currentState = this.next([...currentState]);
    }, 500);
  }

  function stop() {
    if (isPlaying) {
      clearInterval(isPlaying);
      isPlaying = null;
      toggleInlineElement.call(playButton);
      toggleInlineElement.call(stopButton);
    }
  }

  function clear() {
    const lifeForm = document.forms[0];

    for (let i = 0; i < lifeForm.length; i++) {
      lifeForm[i].checked = false;
    }

    clearButton.disabled = true;
  }

  function convertToMatrix(accumulator, current) {
    if (!accumulator[current.row]) {
      accumulator[current.row] = [];
    }
    accumulator[current.row][current.column] = current.value;

    return accumulator;
  }

  function splitId(element) {
    const [, row, column] = element.id.split(rowColumSeparator);
    return { row, column };
  }

  function setInitialState() {
    let currentState = [];
    const lifeForm = document.forms[0];

    if (lifeForm) {
      for (let i = 0; i < lifeForm.length; i++) {
        const position = splitId(lifeForm[i]);
        currentState = [
          ...currentState,
          { ...position, value: +lifeForm[i].checked }
        ];
      }

      return currentState.reduce(convertToMatrix, []);
    } else {
      return [];
    }
  }

  function next(initialState) {
    if (!initialState) return;
    let nextState = [];

    for (let rowIndex = 0; rowIndex < initialState.length; rowIndex++) {
      nextState = [...nextState, [...initialState[rowIndex]]];
      for (
        let columnIndex = 0;
        columnIndex < initialState.length;
        columnIndex++
      ) {
        const isAlife = !!initialState[rowIndex][columnIndex];
        const position = { row: rowIndex, column: columnIndex };
        const neighbours = countNeighbours(position, initialState);
        if (isAlife) {
          nextState[rowIndex][columnIndex] =
            neighbours === 2 || neighbours === 3 ? 1 : 0;
        } else {
          if (neighbours === 3) nextState[rowIndex][columnIndex] = 1;
        }
        let isNextCellAlive = nextState[rowIndex][columnIndex];

        updateView({
          ...position,
          isChecked: isNextCellAlive
        });
      }
    }

    return nextState;
  }

  function updateView({ row, column, isChecked }) {
    const element = document.getElementById(`cell--${row}--${column}`);
    if (element) element.checked = !!isChecked;
  }

  function countNeighbours({ row, column }, state) {
    const previousRow = state[row - 1] || [];
    const nextRow = state[row + 1] || [];
    const previousColumn = column - 1;
    const nextColumn = column + 1;

    let neighbours =
      +!!previousRow[previousColumn] +
      +!!previousRow[column] +
      +!!previousRow[nextColumn] +
      +!!state[row][previousColumn] +
      +!!state[row][nextColumn] +
      +!!nextRow[nextColumn] +
      +!!nextRow[column] +
      +!!nextRow[previousColumn];

    return neighbours;
  }

  return { next, play, stop, clear, isPlaying };
}
