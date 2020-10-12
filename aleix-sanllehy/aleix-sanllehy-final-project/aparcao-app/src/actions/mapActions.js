import axios from "axios";
import dispatcher from "../../dispatcher";
import actionTypes from "./actionTypes";
import authStore from "../stores/authStore";
import { url } from "../_helpers/dbConnection";

export async function loadSpots(params) {
  const token = authStore.getToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios
    .post(`${url}/spots`, params, config)
    .then((spots) => {
      dispatcher.dispatch({
        type: actionTypes.LOAD_SPOTS,
        data: spots.data,
      });
    })
    .catch((error) => {
      throw error;
    });
}

export async function aparcao(params) {
  const token = authStore.getToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios
    .post(`${url}/spots/aparcao`, params, config)
    .then((response) => {
      dispatcher.dispatch({
        type: actionTypes.LOAD_USER,
        data: response.data,
      });
    })
    .catch((error) => {
      throw error;
    });
}

export async function desaparcao(params) {
  const token = authStore.getToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios
    .post(`${url}/spots/desaparcao`, params, config)
    .then((response) => {
      dispatcher.dispatch({
        type: actionTypes.LOAD_USER,
        data: response.data,
      });
    })
    .catch((error) => {
      throw error;
    });
}

export async function createSpot(params) {
  const token = authStore.getToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios
    .post(`${url}/spots/create`, params, config)
    .then((spots) => {
      dispatcher.dispatch({
        type: actionTypes.CREATE_SPOT,
        data: spots.data,
      });
    })
    .catch((error) => {
      throw error;
    });
}

export async function destroySpot(params) {
  const token = authStore.getToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios
    .post(`${url}/spots/destroy`, params, config)
    .then((spots) => {
      dispatcher.dispatch({
        type: actionTypes.DESTROY_SPOT,
        data: spots.data,
      });
    })
    .catch((error) => {
      throw error;
    });
}
