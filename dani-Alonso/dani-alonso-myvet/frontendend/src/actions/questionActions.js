import axios from "axios";
import dispatcher from "../../dispatcher";
import actionTypes from "../actions/actionTypes";

const apiUrl = "http://192.168.8.100:4200";

export function createQuestion(user) {
  return axios
    .post(`${apiUrl}/api/question`, user)
    .then((response) => {
      dispatcher.dispatch({
        type: actionTypes.CREATE_QUESTION,
        data: response.data,
      });
    })
    .catch((error) => {
      throw error;
    });
}
