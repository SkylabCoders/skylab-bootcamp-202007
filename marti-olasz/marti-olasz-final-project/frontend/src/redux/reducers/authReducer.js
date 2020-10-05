import types from '../actionTypes';

import { handleActions } from 'redux-actions';

export default handleActions(
  {
    [types.SAVE_USER]: (state, action) => {
      return { ...state, userIdentifier: action.payload };
    },
    [types.REMOVE_USER]: (state, action) => {
      return { ...state, userIdentifier: null };
    },
    [types.GET_USER]: (state, action) => {
      return { ...state, user: action.payload };
    },
    [types.ADD_FOLLOW]: (state, action) => {
      return { ...state, user: action.payload };
    },
    [types.REMOVE_FOLLOW]: (state, action) => {
      return { ...state, user: action.payload };
    },
    [types.SEND_USER_EDIT_INFO]: (state, action) => {
      return { ...state, user: action.payload };
    },

    [types.USER_EDIT]: (state, action) => {
      return { ...state, editInfo: action.payload };
    },
    [types.USER_EDIT_NAME]: (state, action) => {
      return {
        ...state,
        editInfo: { ...state.editInfo, user: action.payload }
      };
    },
    [types.USER_EDIT_BIO]: (state, action) => {
      return { ...state, editInfo: { ...state.editInfo, bio: action.payload } };
    },
    [types.NEW_BAND]: (state, action) => {
      return { ...state, user: action.payload };
    }
  },
  {}
);
