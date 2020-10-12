import dispatcher from "../dispatcher";
import actionTypes from "./actionTypes";
import axios from 'axios';

export function loadGroups() {
  return axios.get('/api/groups').then((groups) =>{
    dispatcher.dispatch({
      type: actionTypes.LOAD_GROUPS,
      data: groups.data
    })
});
}

export function memberJoin(id,  user){

  return axios.put(`/api/groups/${id}`, { user }).then((group) => {
    
  dispatcher.dispatch({
      type: actionTypes.UPDATE_GROUP,
      data: group.data
    })
  })
}