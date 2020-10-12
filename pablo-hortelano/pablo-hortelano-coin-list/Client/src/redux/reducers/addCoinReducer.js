export default function addCoinDetailReducer(state = [], action) {
  switch (action.type) {
    case "INCREMENT":
      return [...state, ...action.newCoins];
    default:
      return state;
  }
}
