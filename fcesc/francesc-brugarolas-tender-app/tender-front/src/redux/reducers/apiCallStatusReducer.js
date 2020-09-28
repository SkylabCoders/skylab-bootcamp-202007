import ACTION_TYPES from '../actions/ACTION_TYPES';
import REDUCERS_INITIAL_STATE from './REDUCERS_INITIAL_STATE';

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiCallStatusReducer( state = REDUCERS_INITIAL_STATE.apiCallsInProgress, action = ACTION_TYPES.DEFAULT ) {
  if ( action.type === ACTION_TYPES.API.BEGIN_API_CALL ) {
    return state + 1;
  } else if ( action.type && (action.type === ACTION_TYPES.API.ERROR_API_CALL || actionTypeEndsInSuccess(action.type)) ) {
    return state - 1;
  }

  return state;
}