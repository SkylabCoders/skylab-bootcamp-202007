import ACTION_TYPES from './ACTION_TYPES';
import { beginApiCall, apiCallError } from './apiStatusActions';
import { getPortfolioFlowByUserId, getProjectsByUserId } from '../../api/api';

export function loadPortfolioFlowByUserId(_userId) {
  return function(dispatch) {
    dispatch(beginApiCall());

    return getPortfolioFlowByUserId(_userId)
      .then(response => {
        dispatch({ type: ACTION_TYPES.PORTFOLIO.LOAD_PORTFOLIO_FLOW_SUCCESS });
        dispatch({
          type: ACTION_TYPES.PORTFOLIO.LOAD_PORTFOLIO_FLOW,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function loadProjectsByUserId(_userId) { 
  return function (dispatch) {
  dispatch(beginApiCall());
  
  return getProjectsByUserId(_userId)
    .then(response => {
      dispatch({ type: ACTION_TYPES.PORTFOLIO.LOAD_PORTFOLIO_INFO_SUCCESS });
      dispatch({
        type: ACTION_TYPES.PORTFOLIO.LOAD_PORTFOLIO_INFO,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch(apiCallError(error));
      throw error;
    });
  }
}
