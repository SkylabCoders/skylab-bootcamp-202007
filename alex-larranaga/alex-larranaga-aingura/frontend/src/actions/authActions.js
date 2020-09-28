import dispatcher from "../../Dispatcher";
import actionTypes from "./actionTypes";
import axios from "axios";

export async function createNewUser(newUserParams) {
  return axios
    .post("http://192.168.0.35:4200/login/register", newUserParams)
    .then((message) => {
      if (message.data.message.message) {
        dispatcher.dispatch({
          type: actionTypes.USER_EXISTS,
          data: message.data.message.message,
        });
      } else {
        dispatcher.dispatch({
          type: actionTypes.CREATE_USER,
          data: message.data,
        });
      }
    })
    .catch((err) => {
      throw err;
    });
}

export async function loginUser(userParams) {
  return axios
    .post("http://192.168.0.35:4200/login/", userParams)
    .then((user) => {
      dispatcher.dispatch({
        type: actionTypes.LOGIN_USER,
        data: user.data,
      });
    });
}
