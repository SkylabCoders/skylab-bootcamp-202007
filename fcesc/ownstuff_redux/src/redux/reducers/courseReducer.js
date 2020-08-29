import ACTION_TYPES from './../ACTION_TYPES';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action){
  switch(action.type){
    case ACTION_TYPES.CREATE_COURSE:
      return [ ...state, { ...action.course } ];
    case ACTION_TYPES.LOAD_COURSES_SUCCESS:
      return action.courses; // what we return from our reducer is our new state, in this case courses are provided by the API
    default:
      return state;
  }
}