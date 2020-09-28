import dispatcher from '../Dispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';

export function getTeasVarieties() {
  return axios.get('/api/teaVarieties').then((teas) => {
    if (teas.status === 200) {
      dispatcher.dispatch({
        type: actionTypes.LOAD_TEA_VARIETY,
        data: teas.data
      });
    }
  });
}
export function getPrincipalTeas() {
  return axios.get('/api/principalTeas').then((teas) => {
    if (teas.status === 200) {
      dispatcher.dispatch({
        type: actionTypes.LOAD_TEA_PRINCIPAL,
        data: teas.data
      });
    }
  });
}

export function getTeaVarById(id) {
  return axios.get(`/api/teaVarieties/${id}`).then((tea) => {
    if (tea.status === 200) {
      dispatcher.dispatch({
        type: actionTypes.LOAD_TEA_VARIETY,
        data: tea.data
      });
    }
  });
}

export function createTeaVar(newinfo) {
  return axios.post(`/api/teaVarieties/`, newinfo).then((tea) => {
    if (tea.status === 201) {
      dispatcher.dispatch({
        type: actionTypes.CREATE_TEA_VARIETY,
        data: tea.data
      });
    }
  });
}

export function updateTeaVar(teaId, newinfo) {
  return axios.put(`/api/teaVarieties/${teaId}`, newinfo).then((tea) => {
    if (tea.status === 200) {
      dispatcher.dispatch({
        type: actionTypes.UPDATE_TEA_VARIETY,
        data: tea.data
      });
    }
  });
}

export function getTeasVarietiesSearch(query, search) {
  return axios.get(`/api/teaVarieties/?${query}=${search}`).then((teaList) => {
    if (teaList.status === 200) {
      dispatcher.dispatch({
        type: actionTypes.LOAD_TEA_SEARCH,
        data: teaList.data
      });
    }
  });
}

export async function deleteTeaVarieties(id) {
  return await axios.delete(`/api/teaVarieties/${id}`).then((tea) => {
    if (tea.status === 200) {
      dispatcher.dispatch({
        type: actionTypes.DELETE_TEA_VARIETY,
        data: tea.data
      });
    }
  });
}
