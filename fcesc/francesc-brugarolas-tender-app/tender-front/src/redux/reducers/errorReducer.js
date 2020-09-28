import ACTION_TYPES from './../actions/ACTION_TYPES';
import REDUCERS_INITIAL_STATE from './REDUCERS_INITIAL_STATE';

export default function errorReducer(state = REDUCERS_INITIAL_STATE.errors, action = ACTION_TYPES.DEFAULT) {
  switch (action.type) {
    case ACTION_TYPES.ERROR.LOG_ERROR:
      return [ ...state, action.payload ];
    case ACTION_TYPES.ERROR.REMOVE_ERROR:
      let newState = [ ...state ];
      return (newState.length >= 1) ? newState.slice(0,-1) : state;
    default:
      return state;
  }
}