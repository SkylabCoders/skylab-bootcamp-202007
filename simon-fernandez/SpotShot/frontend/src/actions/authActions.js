import axios from "axios";
import dispatcher from "../dispatcher";
import actionTypes from "./actionTypes";

export function logInUser(username, password) {
  return axios
    .post("http://192.168.0.11:4200/auth/login", { username, password })
    .then((user) => {
      dispatcher.dispatch({
        type: actionTypes.LOGIN_USER,
        data: user.data,
      });
    });
}
export function signUpUser(username, password, firstName, lastName) {
  return axios
    .post("http://192.168.0.11:4200/auth/register", {
      username,
      password,
      firstName,
      lastName,
    })
    .then((user) => {
      dispatcher.dispatch({
        type: actionTypes.SIGNUP_USER,
        data: { username, password },
      });
    });
}
export function signOut() {
  dispatcher.dispatch({
    type: actionTypes.SIGNOUT_USER,
  });
}
export function signAsInvitate() {
  dispatcher.dispatch({
    type: actionTypes.SIGN_INVITATE,
    data: [
      {
        firstName: "Guest",
        id: "0",
        lastName: "User",
        token: null,
        username: null,
      },
    ],
  });
}
