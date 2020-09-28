import axios from "axios";
import dispatcher from "../../dispatcher";
import actionTypes from "../actions/actionTypes";

const apiUrl = "http://192.168.8.100:4200";

export function detailVets() {
  return axios
    .get(`${apiUrl}/api/vet`)
    .then((vets) => {
      dispatcher.dispatch({
        type: actionTypes.LOAD_DETAIL_VETS,
        data: vets.data,
      });
    })
    .catch((error) => {
      throw error;
    });
}
