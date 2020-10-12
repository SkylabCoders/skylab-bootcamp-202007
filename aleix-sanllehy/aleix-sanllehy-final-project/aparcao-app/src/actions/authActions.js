import axios from "axios";
import dispatcher from "../../dispatcher";
import actionTypes from "./actionTypes";
import authStore from "../stores/authStore";
import { url } from "../_helpers/dbConnection";
import { storeData } from "../_helpers/storeData";

export async function login(params) {
  return axios
    .post(`${url}/auth/`, params)
    .then((response) => {
      storeData(response.data.user);
      dispatcher.dispatch({
        type: actionTypes.LOGIN,
        data: response.data,
      });
    })
    .catch((err) => {
      throw err;
    });
}

export async function signUp(params) {
  return axios
    .post(`${url}/auth/signup`, params)
    .then((response) => {
      storeData(response.data.user);
      dispatcher.dispatch({
        type: actionTypes.SIGNUP,
        data: response.data,
      });
    })
    .catch((err) => {
      throw err;
    });
}

export async function loadUser(params) {
  const token = authStore.getToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios
    .post(`${url}/auth/loaduser`, params, config)
    .then((response) => {
      dispatcher.dispatch({
        type: actionTypes.LOAD_USER,
        data: response.data,
      });
    })
    .catch((err) => {
      throw err;
    });
}

export async function changePassword(params) {
  const token = authStore.getToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios
    .post(`${url}/auth/changepassword`, params, config)
    .then((response) => {
      dispatcher.dispatch({
        type: actionTypes.CHANGE_PASSWORD,
        data: response.data,
      });
    })
    .catch((err) => {
      throw err;
    });
}
