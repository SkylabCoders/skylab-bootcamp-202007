import axios from "axios";
import dispatcher from "../../dispatcher";
import actionTypes from "../actions/actionTypes";

const apiUrl = "http://192.168.8.100:4200";

export function loadVets() {
  return axios
    .get(`${apiUrl}/api/vet`)
    .then((vets) => {
      dispatcher.dispatch({
        type: actionTypes.LOAD_VETS,
        data: vets.data,
      });
    })
    .catch((error) => {
      throw error;
    });
}
