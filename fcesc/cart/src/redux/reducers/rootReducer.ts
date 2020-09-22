import { combineReducers } from 'redux';
import cart from './cartReducer';
import totalCart from './totalCartReducer';

const rootReducer = combineReducers({
  cart,
  totalCart
});

export default rootReducer;