export default function addMoveReducer(state = [], action) {
  switch (action.type) {
    case "INCREMENTMOVE":
      return [...state, action.moves];
    default:
      return state;
  }
}
