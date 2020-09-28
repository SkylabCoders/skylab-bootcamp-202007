import ACTION_TYPES from './ACTION_TYPES';
import { beginApiCall, apiCallError } from './apiStatusActions';
import { checkIsNewUser } from '../../api/api';

export function saveCurrentUser(uniqueUserId) {
  return {
      type: ACTION_TYPES.USER.SAVE_CURRENT_USER,
      payload: uniqueUserId
    }
}

export function removeCurrentUser() {
  return {
      type: ACTION_TYPES.USER.REMOVE_CURRENT_USER
    }
}

export function existCurrentUser(user) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return checkIsNewUser(user)
      .then( response => { 
        dispatch({ type: ACTION_TYPES.USER.EXIST_CURRENT_USER_SUCCESSFUL });
        dispatch({
          type: ACTION_TYPES.USER.EXIST_CURRENT_USER,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
