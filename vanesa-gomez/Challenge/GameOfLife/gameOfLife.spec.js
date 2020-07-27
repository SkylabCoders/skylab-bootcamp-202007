describe("Testing gameOfLive service implementations", () => {
  describe("ChangeCell function", () => {
    beforeEach(() => {
      let currentState = [];
      let nextState = [];
      for (let i = 0; i < 10; i++) {
        currentState.push([]);
        nextState.push([]);
        for (let j = 0; j < 10; j++) {
          currentState[i].push(0);
          nextState[i].push(0);
        }
      }
    });
    it("CurrentState[i][j] equal than zero function should set currentState[i][j] to one", () => {
      changeCell();
    });
  });
});
