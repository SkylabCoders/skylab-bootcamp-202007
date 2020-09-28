import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';


export function saveUser(user_Id) {
  const token = JSON.parse(sessionStorage.getItem('USER_TOKEN'));
  return axios.post('api/users/', { user: user_Id },
    { headers: { Authorization: 'Bearer ' + token } }
  ).then((user) => {
    console.log(user);
    dispatcher.dispatch({
      type: actionTypes.SAVE_USER,
      data: user
    });

  });
}


export function removeUser() {
  return dispatcher.dispatch({
    type: actionTypes.REMOVE_USER
  });
}