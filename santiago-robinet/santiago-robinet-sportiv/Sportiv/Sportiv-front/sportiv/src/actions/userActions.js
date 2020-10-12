import dispatcher from "../dispatcher";
import actionTypes from "./actionTypes";
import axios from 'axios';

export function createUser(firstName,lastName ,userName, userAuth ) {
  return axios.post('/api/user',{firstName, lastName, userName, email: userAuth.email, authid: userAuth.sub, firstTime:false }).then((user) =>{
    dispatcher.dispatch({
      type: actionTypes.CREATE_USER,
      data: user.data
    })
}).catch((error) => {
  console.error(error)
})
}

export function loadUser(authid) {
  return axios.get(`/api/user/${authid}`).then((user) =>{
    
    dispatcher.dispatch({
      type: actionTypes.LOAD_USER,
      data: user.data
    })
}).catch((error) => (console.error(error)))
}
