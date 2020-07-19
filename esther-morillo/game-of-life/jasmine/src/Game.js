function Game(initialState, finalState) {
  this.start = function () {
    return gameOfLife(initialState);
  };

  this.final = function () {
    return gameOfLife(finalState);
  };
}