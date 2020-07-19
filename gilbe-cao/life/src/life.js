function Life() {
  function next(initialState) {
    if (!initialState) return;

    for (let index = 0; index < initialState.length; index++) {
      console.log(initialState[index]);
    }
  }

  function countNeighbours({ row = 0, column = 0 }, initialState) {
    const previousRow = row - 1 || 0;
    const previousColumn = row - 1 || 0;
    const nextRow = row + 1 || 0;
    const nextColumn = column + 1 || 0;

    const neighbours =
      initialState[previousRow][previousColumn] +
      initialState[previousRow][column] +
      initialState[previousRow][nextColumn] +
      initialState[row][nextColumn] +
      initialState[nextRow][nextColumn] +
      initialState[nextRow][column] +
      initialState[nextRow][previousColumn];

    return neighbours;
  }
  return { next };
}

const life = new Life();
