import axios from 'axios';
import { createAction } from 'redux-actions';

import types from '../actionTypes';

export const error = createAction(types.ERROR);
export const loading = createAction(types.LOADING);
export const clearImage = createAction(types.CLEAR_IMAGE);

const uploadImageSuccess = createAction(types.UPLOAD_IMAGE);
export const uploadImage = (url, img, identifier) => async (dispatch) => {
  try {
    const header = { 'Content-Type': 'multipart/form-data' };
    const response = await axios.post(`/images/${url}`, img, { header });
    response.data.identifier = identifier;
    return dispatch(uploadImageSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};
