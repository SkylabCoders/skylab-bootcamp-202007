import ACTION_TYPES from './../ACTION_TYPES';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action){
  switch(action.type){
    case ACTION_TYPES.CREATE_COURSE_SUCCESS:
      return [ ...state, { ...action.course } ];
    case ACTION_TYPES.LOAD_COURSES_SUCCESS:
      return action.courses; // what we return from our reducer is our new state, in this case courses are provided by the API
    case ACTION_TYPES.UPDATE_COURSE_SUCCESS:
      return state.map(course => {
        course.id === action.course.id ? action.course: course;
      });
    case ACTION_TYPES.DELETE_COURSE_OPTIMISTIC:
      return state.filter(course => course.id !== action.course.id);
    default:
      return state;
  }
}