import { createAction } from 'redux-actions';

import types from '../actionTypes';
import { error } from './infoActions';
import axios from 'axios';

//Sync
export const showDisc = createAction(types.SHOW_DISC);
export const showPhoto = createAction(types.SHOW_PHOTO);

//Edit band profile
export const bandEdit = createAction(types.BAND_EDIT);

//Async
const getBandSuccess = createAction(types.GET_BAND);
export const getBand = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/band/${id}`);
    return dispatch(getBandSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};

const searchBandSuccess = createAction(types.SEARCH_BAND);
export const searchBand = (text) => async (dispatch) => {
  try {
    const response = await axios.get(`/band/search/${text}`);
    return dispatch(searchBandSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};

const followSuccess = createAction(types.FOLLOW_BAND);
export const follow = (userIdentifier) => async (dispatch) => {
  try {
    const response = await axios.get(`/band/follow/${userIdentifier}`);
    return dispatch(followSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};

const sendBandEditInfoSuccess = createAction(types.SEND_BAND_EDIT_INFO);
export const sendBandEditInfo = (bandId, editInfo) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`
    };
    const response = await axios.patch(`/auth/band/${bandId}`, editInfo, {
      headers
    });
    return dispatch(sendBandEditInfoSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};

const createDiscSuccess = createAction(types.CREATE_DISC);
export const createDisc = (bandId, discInfo, imageId) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`
    };
    const response = await axios.post(
      `/auth/newDisc/${bandId}`,
      { ...discInfo, img: imageId },
      {
        headers
      }
    );
    return dispatch(createDiscSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};

const deleteDiscSuccess = createAction(types.DELETE_DISC);
export const deleteDisc = (bandId, deleteId) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`
    };
    const response = await axios.patch(
      `/auth/newDisc/${bandId}`,
      { deleteId },
      {
        headers
      }
    );
    return dispatch(deleteDiscSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};

const createConcertSuccess = createAction(types.CREATE_CONCERT);
export const createConcert = (bandId, concertInfo) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`
    };
    const response = await axios.post(
      `/auth/newConcert/${bandId}`,
      concertInfo,
      {
        headers
      }
    );
    return dispatch(createConcertSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};

const deleteConcertSuccess = createAction(types.DELETE_CONCERT);
export const deleteConcert = (bandId, deleteId) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`
    };
    const response = await axios.patch(
      `/auth/newConcert/${bandId}`,
      { deleteId },
      {
        headers
      }
    );
    return dispatch(deleteConcertSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};

const createPhotoSuccess = createAction(types.CREATE_PHOTO);
export const createPhoto = (bandId, PhotoId) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`
    };
    const response = await axios.post(
      `/auth/newPhoto/${bandId}`,
      { PhotoId },
      {
        headers
      }
    );
    return dispatch(createPhotoSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};

const deletePhotoSuccess = createAction(types.DELETE_PHOTO);
export const deletePhoto = (bandId, deleteId) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`
    };
    const response = await axios.patch(
      `/auth/newPhoto/${bandId}`,
      { deleteId },
      {
        headers
      }
    );
    return dispatch(deletePhotoSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};
