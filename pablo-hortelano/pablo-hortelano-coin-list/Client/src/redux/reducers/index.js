import { combineReducers } from "redux";
import movements from "./coinDetailReducer";
import newCoins from "./addCoinReducer";
import moves from "./addMoveReducer";
import userCoins from "./getUserCoinsReducer";

const rootReducer = combineReducers({
  movements,
  newCoins,
  moves,
  userCoins,
});

export default rootReducer;
