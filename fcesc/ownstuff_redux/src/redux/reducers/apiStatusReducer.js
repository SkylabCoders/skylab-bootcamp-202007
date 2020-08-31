import ACTION_TYPES from '../ACTION_TYPES';
import initialState from './initialState';

function actionTypeEndsInSuccess(type){
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiCallStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type == ACTION_TYPES.BEGIN_API_CALL){
    return state + 1;
  } else if (action.type === ACTION_TYPES.API_CALL_ERROR || actionTypeEndsInSuccess(action.type)){
    return state - 1;
  }
  return state;
}