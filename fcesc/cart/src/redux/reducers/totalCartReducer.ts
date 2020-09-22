import ACTION_TYPES from '../actions/ACTION_TYPES';

export default function totalCartReducer(state: any = [], action: { type: string, payload: number }) {
  switch (action.type) {
    case ACTION_TYPES.TOTAL_CART.CALCULATE_CART:
      return [ ...state, action.payload ];
    default:
      return state;
  }
}