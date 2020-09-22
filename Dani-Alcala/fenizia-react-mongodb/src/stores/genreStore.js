import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _genre = [];

class GenreStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getGenre() {
    return _genre;
  }
}

const genreStore = new GenreStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_GENRE:
      genreStore.emitChange(_genre);
      break;
    default:
      break;
  }
});

export default genreStore;