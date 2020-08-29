import ACTION_TYPES from '../ACTION_TYPES';
import * as authorApi from '../../api/authorApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function loadAuthorsSuccess(authors) {
  return { type: ACTION_TYPES.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return authorApi
      .getAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
