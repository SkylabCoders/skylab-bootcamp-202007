import ACTION_TYPES from '../actions/ACTION_TYPES';
import REDUCERS_INITIAL_STATE from './REDUCERS_INITIAL_STATE';

export default function quotationReducer(state = REDUCERS_INITIAL_STATE.quotation, action = ACTION_TYPES.DEFAULT) {
  switch (action.type) {
    case ACTION_TYPES.QUOTATION.CREATE_QUOTATION:
      return { ...state, itemBeingCreated: action.payload };
    case ACTION_TYPES.QUOTATION.UPDATE_QUOTATION:
      return { ...state, current: action.payload };
    case ACTION_TYPES.QUOTATION.DELETE_QUOTATION:
      return state;
    case ACTION_TYPES.QUOTATION.LOAD_QUOTATION:
      return { ...state, current: action.payload };
    case ACTION_TYPES.QUOTATION.CALCULATE_QUOTATION:
      return { ...state, calculated: action.payload };
    default:
      return state;
  }
}