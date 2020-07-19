function Life() {
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
        const neighbours = countNeighbours(
          { row: rowIndex, column: columnIndex },
          initialState
        );

        if (isAlife) {
          nextState[rowIndex][columnIndex] =
            neighbours === 2 || neighbours === 3 ? 1 : 0;
        } else {
          if (neighbours === 3) nextState[rowIndex][columnIndex] = 1;
        }
      }
    }

    console.log(nextState);

    return nextState;
  }

  function countNeighbours({ row, column }, state) {
    const previousRow = state[row - 1] || [];
    const nextRow = state[row + 1] || [];
    const previousColumn = column - 1;
    const nextColumn = column + 1;
    let neighbours =
      previousRow[previousColumn] +
      previousRow[column] +
      previousRow[nextColumn] +
      state[row][previousColumn] +
      state[row][nextColumn] +
      nextRow[nextColumn] +
      nextRow[column] +
      nextRow[previousColumn];

    return neighbours || 0;
  }

  return { next };
}
