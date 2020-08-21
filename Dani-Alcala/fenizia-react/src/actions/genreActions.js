import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import Header from "./header"

export function loadGenres(genre) {
    dispatcher.dispatch({
      type: actionTypes.LOAD_GENRE,
      data: genre
    });
};