import axios from "axios";
import dispatcher from "../../dispatcher";
import actionTypes from "../actions/actionTypes";

const apiUrl = "http://192.168.8.100:4200";

export function loadVetsQuestionList() {
  return axios
    .get(`${apiUrl}/api/questionVet`)
    .then((response) => {
      dispatcher.dispatch({
        type: actionTypes.LOAD_VET_QUESTION,
        data: response.data,
      });
    })
    .catch((error) => {
      throw error;
    });
}
