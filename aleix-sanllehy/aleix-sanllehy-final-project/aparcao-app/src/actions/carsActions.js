import axios from "axios";
import dispatcher from "../../dispatcher";
import actionTypes from "./actionTypes";
import authStore from "../stores/authStore";
import { url } from "../_helpers/dbConnection";

export async function loadMakes() {
  const token = authStore.getToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const bodyParameters = {
    key: "value",
  };
  return axios
    .post(`${url}/cars`, bodyParameters, config)
    .then((makes) => {
      dispatcher.dispatch({
        type: actionTypes.LOAD_MAKES,
        data: makes.data,
      });
    })
    .catch((error) => {
      throw error;
    });
}

export async function loadModels(params) {
  const token = authStore.getToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return axios
    .post(`${url}/cars/modelsbymake`, params, config)
    .then((models) => {
      dispatcher.dispatch({
        type: actionTypes.LOAD_MODELS,
        data: models.data,
      });
    })
    .catch((error) => {
      throw error;
    });
}

export async function selectCar(params) {
  const token = authStore.getToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return axios
    .post(`${url}/cars/selectcar`, params, config)
    .then((response) => {
      dispatcher.dispatch({
        type: actionTypes.SELECT_CAR,
        data: response.data,
      });
    })
    .catch((error) => {
      throw error;
    });
}
