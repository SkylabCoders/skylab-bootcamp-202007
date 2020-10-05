import axios from 'axios';
import { createAction } from 'redux-actions';

import types from '../actionTypes';
import { error } from './infoActions';

// Sync
export const saveUser = createAction(types.SAVE_USER);
export const userEditName = createAction(types.USER_EDIT_NAME);
export const userEditBio = createAction(types.USER_EDIT_BIO);
export const userEdit = createAction(types.USER_EDIT);

// Async
const getUserSuccess = createAction(types.GET_USER);
export const getUser = (user) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`
    };
    const response = await axios.post(
      `/auth/${user.sub}`,
      { nickname: user.nickname, photo: user.picture, email: user.email },
      { headers }
    );
    return dispatch(getUserSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};

const addFollowSuccess = createAction(types.ADD_FOLLOW);
export const addFollow = (userId, bandId) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`
    };
    const response = await axios.post(
      `/auth/follow/${userId}`,
      { band: bandId },
      { headers }
    );
    response.data.following.push(bandId);
    return dispatch(addFollowSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};

const removeFollowSuccess = createAction(types.REMOVE_FOLLOW);
export const removeFollow = (userId, bandId) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`
    };
    const response = await axios.post(
      `/auth/followDelete/${userId}`,
      { band: bandId },
      { headers }
    );
    response.data.following.filter((item) => item !== bandId);
    return dispatch(removeFollowSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};

const sendUserEditInfoSuccess = createAction(types.SEND_USER_EDIT_INFO);
export const sendUserEditInfo = (userId, userEditInfo) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`
    };
    const response = await axios.patch(`/auth/${userId}`, userEditInfo, {
      headers
    });
    return dispatch(sendUserEditInfoSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};

const newBandSuccess = createAction(types.NEW_BAND);
export const newBand = (userId) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`
    };
    const response = await axios.post(
      `/auth/newBand/${userId}`,
      {},
      {
        headers
      }
    );
    return dispatch(newBandSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};
