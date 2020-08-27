import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionsTypes";

const CHANGE_EVENT = "change";
let _team = [];

class nbaStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

}

const nbaStore = new nbaStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_TEAM:
      _team = action.data;
      nbaStore.emitChange(_team);
      break;
    default:
      break;
  }
});

export default nbaStore;
