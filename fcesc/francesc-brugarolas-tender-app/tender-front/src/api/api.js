import axios from 'axios';
import getHeaders from './getHeaders';
const ROOT = 'http://localhost:3010/api';

export function getProjectsByUserId(_userId) {
  const headers = getHeaders();
  return axios.get(`${ROOT}/projects/byUser/${_userId}`, { headers } )
    .then( data=>{
      return data;
    })
    .catch(error=>{
      return error;
  });
}

export function getProjectBySlug(slug) {
  const headers = getHeaders();
  return axios.get(`${ROOT}/projects/bySlug/${slug}`, { headers } )
    .then( data=>{
      return data;
    })
    .catch(error=>{
      return error;
  });
}

export function getBudgetsByProjectId(_projectId, _userId) {
  const headers = getHeaders();
  return axios.get(`${ROOT}/budgets/byProject/${_projectId}`, { headers } )
    .then( data=>{
      return data;
    })
    .catch(error=>{
      return error;
  });
}

export function getBudgetById(_budgetId, _userId) {
  const headers = getHeaders();
  return axios.get(`${ROOT}/budgets/${_budgetId}`, { headers } )
    .then( data=>{
      return data;
    })
    .catch(error=>{
      return error;
  });
}

export function getBudgetsByUserId(_userId) {
  const headers = getHeaders();
  return axios.get(`${ROOT}/budgets/byUser/${_userId}`, { headers } )
    .then( data=>{
      console.log('%cDATA from db arrived at front @ getBudgetsByUserId - api', 'color: blue')
      return data;
    })
    .catch(error=>{
      return error;
  });
}

export function getQuotationsByUserId(_userId) {
  const headers = getHeaders();
  return axios.get(`${ROOT}/quotations/byUser/${_userId}`, { headers } )
    .then( data=>{
      console.log('%cDATA from db arrived at front @ getQuotationsByUserId - api', 'color: blue')
      return data;
    })
    .catch(error=>{
      return error;
  });
}

export function getQuotationsByBudgetId(_budgetId) {
  const headers = getHeaders();
  return axios.get(`${ROOT}/quotations/byBudget/${_budgetId}`, { headers } )
    .then( data=>{
      console.log('%cDATA from db arrived at front @ getQuotationsByBudgetId - api', 'color: blue')
      return data;
    })
    .catch(error=>{
      return error;
  });
}

export function getQuotationById(_quotationId, _userId) {
  const headers = getHeaders();
  return axios.get(`${ROOT}/quotations/${_quotationId}`, { headers } )
    .then( data=>{
      return data;
    })
    .catch(error=>{
      return error;
  });
}

export function checkIsNewUser(user) {
  const headers = getHeaders();
  return axios.post(`${ROOT}/users/${user.sub}`, { user }, { headers } )
  .then( data=>{
    return data;
  })
  .catch(error=>{
    return error;
  });
}

export function getPortfolioFlowByUserId(_userId){
  const headers = getHeaders();
  return axios.get(`${ROOT}/projects/flow/byUser/${_userId}`, { headers } )
    .then( data=>{
      return data;
    })
    .catch(error=>{
      return error;
  });
}

export function getProjectFlowByUserId(_userId){
  const headers = getHeaders();
  return axios.get(`${ROOT}/budgets/flow/byUser/${_userId}`, { headers } )
    .then( data=>{
      return data;
    })
    .catch(error=>{
      return error;
  });
}