import ACTION_TYPES from '../actions/ACTION_TYPES';
import REDUCERS_INITIAL_STATE from './REDUCERS_INITIAL_STATE';

export default function cartReducer(state: any = REDUCERS_INITIAL_STATE.cart, action: { type: string, payload: { name: string, price: number, quantity: number }[]|void[] }) {
  switch (action.type) {
    case ACTION_TYPES.CART.ADD_TO_CART:
      return [ ...state, action.payload ];
    case ACTION_TYPES.CART.REMOVE_FROM_CART:
      let newState: any = state;
      newState.filter((element: any) => action.payload[0] !== element);
      return newState;
    default:
      return state;
  }
}