import ACTION_TYPES from '../ACTION_TYPES';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case ACTION_TYPES.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
