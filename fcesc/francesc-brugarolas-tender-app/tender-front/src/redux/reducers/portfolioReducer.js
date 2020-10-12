import ACTION_TYPES from './../actions/ACTION_TYPES';
import REDUCERS_INITIAL_STATE from './REDUCERS_INITIAL_STATE';

export default function portfolioReducer(state = REDUCERS_INITIAL_STATE.portfolio, action = ACTION_TYPES.DEFAULT) {
  switch (action.type) {
    case ACTION_TYPES.PORTFOLIO.CALCULATE_PORTFOLIO:
      return { ...state, calculated: action.payload };
    case ACTION_TYPES.PORTFOLIO.LOAD_PORTFOLIO_FLOW:
      return { ...state, flow: action.payload };
    case ACTION_TYPES.PORTFOLIO.LOAD_PORTFOLIO_INFO:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}