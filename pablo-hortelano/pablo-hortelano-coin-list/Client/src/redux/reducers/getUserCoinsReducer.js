export default function getUserCoins(state = [], action) {
  switch (action.type) {
    case "USERMOVEMENTS":
      return [...state, ...action.userMovements];
    default:
      return state;
  }
}
