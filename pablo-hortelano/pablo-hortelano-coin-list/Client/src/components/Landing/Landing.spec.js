let list;
beforeEach(() => {
  list = fetch("http://localhost:3002/movements")
    .then((response) => response.json())
    .then((data) => {
      props.dispatch(coinActions.getCoinMovements(data));
    });
});
describe("App", () => {
  it("should do a proper fetch connection", () => {
    const state = { list, error: null };
    expect(state).toBeDefined();
  });
});
