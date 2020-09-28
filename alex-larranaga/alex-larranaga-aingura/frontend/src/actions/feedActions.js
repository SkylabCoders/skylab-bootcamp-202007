import dispatcher from "../../Dispatcher";
import actionTypes from "../actions/actionTypes";
import axios from "axios";
import authStore from "../stores/authStore";

export async function loadFeed() {
  const token = authStore.getToken();

  const headers = { headers: { Authorization: `Bearer ${token}` } };

  return axios
    .post("http://192.168.0.35:4200/api/updatefeed", { key: "value" }, headers)
    .then((ainguraData) => {
      if (ainguraData) {
        dispatcher.dispatch({
          type: actionTypes.LOAD_FEED,
          data: ainguraData.data,
        });
      }
    })
    .catch((error) => {
      throw error;
    });
}

export async function loadAinguraById(id) {
  const token = authStore.getToken();

  const headers = { headers: { Authorization: `Bearer ${token}` } };
  console.log(token);
  return axios
    .get(`http://192.168.0.35:4200/api/${id}`, { key: "value" }, headers)
    .then((ainguraData) => {
      if (ainguraData) {
        dispatcher.dispatch({
          type: actionTypes.LOAD_ONE_AINGURA,
          data: ainguraData.data,
        });
      }
    })
    .catch((error) => {
      throw error;
    });
}

export async function createAingura(ainguraParams) {
  return axios
    .post("http://192.168.0.35:4200/api/create", ainguraParams)
    .catch((err) => {
      throw err;
    });
}

export function validateGeoLocation(geoLocParams) {
  return axios.post("http://192.168.0.35:4200/api/geovalidation", geoLocParams);
}

export function validateReachAingura(ainguraData) {
  return axios
    .post("http://192.168.0.35:4200/api/reachaingura", ainguraData)
    .then((message) => {
      dispatcher.dispatch({
        type: actionTypes.REACH_AINGURA,
        data: message.data,
      });
    })
    .catch((err) => {
      console.log(`Reach Aingura error: ${err}`);
    });
}
