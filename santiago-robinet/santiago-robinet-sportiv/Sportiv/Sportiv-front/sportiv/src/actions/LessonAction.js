import dispatcher from "../dispatcher";
import actionTypes from "./actionTypes";
import axios from 'axios';

export function loadLessons() {
  return axios.get('/api/lessons').then((lessons) =>{
    dispatcher.dispatch({
      type: actionTypes.LOAD_LESSONS,
      data: lessons.data
    })
});
}
