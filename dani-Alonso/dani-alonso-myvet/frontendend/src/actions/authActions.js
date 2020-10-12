import axios from "axios";
import dispatcher from "../../dispatcher";
import actionTypes from "../actions/actionTypes";

const apiUrl = "http://192.168.8.100:4200";

export async function createUser(newUserParams) {
  return axios
    .post(`${apiUrl}/api/auth/register`, newUserParams)
    .then((response) => {
      dispatcher.dispatch({
        type: actionTypes.CREATE_USER,
        data: response.data,
      });
    })
    .catch((error) => {
      throw error;
    });
}

export async function loginUser(userParams) {
  return axios
    .post(`${apiUrl}/api/auth/login`, userParams)
    .then((response) => {
      dispatcher.dispatch({
        type: actionTypes.LOGIN_USER,
        data: response.data,
      });
    })
    .catch((error) => {
      throw error;
    });
}
