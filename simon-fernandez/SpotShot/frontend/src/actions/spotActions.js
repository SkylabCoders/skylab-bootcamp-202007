import axios from "axios";
import dispatcher from "../dispatcher";
import actionTypes from "./actionTypes";
import uploadPhotoBySpottId from "../logic/uploadPhotoBySpottId";

export function loadSpots() {
  return axios.get("http://192.168.0.11:4200/api/spots").then((spotList) => {
    dispatcher.dispatch({
      type: actionTypes.LOAD_SPOT,
      data: spotList.data,
    });
  });
}
export function createSpot(
  username,
  title,
  spotStyle,
  lat,
  lgn,
  description,
  locationInfo
) {
  return axios
    .post("http://192.168.0.11:4200/api/spots", {
      username,
      title,
      spotStyle,
      lat,
      lgn,
      description,
      locationInfo,
    })
    .then((response) => {
      if (response.status === 208) {
        return true;
      }
      dispatcher.dispatch({
        type: actionTypes.CREATE_SPOT,
        data: response,
      });
    });
}
export function deleteSpot(spotId) {
  return axios
    .post("http://192.168.0.11:4200/api/spots/remove", spotId)
    .then((response) => {
      dispatcher.dispatch({
        type: actionTypes.DELETE_SPOT,
        data: response,
      });
    });
}

export async function uploadSpotPhoto(spotId, image) {
  await uploadPhotoBySpottId(spotId, image);
  dispatcher.dispatch({
    type: actionTypes.UPLOAD_SPOT_PHOTO,
  });
}
