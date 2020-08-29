import ACTION_TYPES from '../ACTION_TYPES';

export function beginApiCall(){
  return { type: ACTION_TYPES.BEGIN_API_CALL };
}

export function apiCallError(){
  return { type: ACTION_TYPES.API_CALL_ERROR };
}