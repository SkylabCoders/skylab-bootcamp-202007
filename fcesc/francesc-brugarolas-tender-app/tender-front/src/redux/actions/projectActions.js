import ACTION_TYPES from './ACTION_TYPES';
import { beginApiCall, apiCallError } from './apiStatusActions';
import { getProjectFlowByUserId, getBudgetsByProjectId, getProjectBySlug } from '../../api/api';

export function loadProjectBySlug(slug) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return getProjectBySlug(slug)
      .then(response => {
        dispatch({ type: ACTION_TYPES.PROJECT.LOAD_PROJECT_BYSLUG_SUCCESS });
        dispatch({
          type: ACTION_TYPES.PROJECT.LOAD_PROJECT_BYSLUG,
          payload: (response.data) ? response.data[0] : null
        });
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function loadProjectFlowByUserId(_userId) {
  return function(dispatch) {
    dispatch(beginApiCall());

    return getProjectFlowByUserId(_userId)
      .then(response => {
        dispatch({ type: ACTION_TYPES.PROJECT.LOAD_PROJECT_FLOW_SUCCESS });
        dispatch({
          type: ACTION_TYPES.PROJECT.LOAD_PROJECT_FLOW,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function loadBudgetsByProjectId(_projectId, _userId) { 
  return function (dispatch) {
  dispatch(beginApiCall());
  
  return getBudgetsByProjectId(_projectId, _userId)
    .then(response => {
      dispatch({ type: ACTION_TYPES.PROJECT.LOAD_PROJECT_INFO_SUCCESS });
      dispatch({
        type: ACTION_TYPES.PROJECT.LOAD_PROJECT_INFO,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch(apiCallError(error));
      throw error;
    });
  }
}
