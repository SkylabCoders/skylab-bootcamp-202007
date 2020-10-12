import types from '../actionTypes';

import { handleActions } from 'redux-actions';

export default handleActions(
  {
    //Load band data
    [types.GET_BAND]: (state, action) => {
      return { ...state, band: action.payload };
    },
    [types.SHOW_DISC]: (state, action) => {
      return { ...state, disc: action.payload };
    },
    [types.SEARCH_BAND]: (state, action) => {
      return { ...state, search: action.payload };
    },
    [types.FOLLOW_BAND]: (state, action) => {
      return { ...state, bandFollowers: action.payload };
    },

    //Edit band info

    [types.BAND_EDIT]: (state, action) => {
      return { ...state, editInfo: action.payload };
    },
    [types.SEND_BAND_EDIT_INFO]: (state, action) => {
      return { ...state, band: action.payload };
    },

    [types.CREATE_DISC]: (state, action) => {
      return { ...state, band: action.payload };
    },
    [types.DELETE_DISC]: (state, action) => {
      return { ...state, band: action.payload };
    },
    [types.CREATE_CONCERT]: (state, action) => {
      return { ...state, band: action.payload };
    },
    [types.DELETE_CONCERT]: (state, action) => {
      return { ...state, band: action.payload };
    },
    [types.CREATE_PHOTO]: (state, action) => {
      return { ...state, band: action.payload };
    },
    [types.DELETE_PHOTO]: (state, action) => {
      return { ...state, band: action.payload };
    },
    [types.SHOW_PHOTO]: (state, action) => {
      return { ...state, showPhoto: action.payload };
    }
  },
  {}
);
