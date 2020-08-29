import ACTION_TYPES from "../ACTION_TYPES";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
  return { type: ACTION_TYPES.CREATE_COURSE, course };
}

export function loadCourseSuccess(courses) {
  return { type: ACTION_TYPES.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}
