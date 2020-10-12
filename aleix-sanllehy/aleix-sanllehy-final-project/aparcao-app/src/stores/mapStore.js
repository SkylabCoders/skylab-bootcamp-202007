import { EventEmitter } from "events";
import dispatcher from "../../dispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";

let _spots = [];

class MapStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getSpots() {
    return _spots;
  }
}

const mapStore = new MapStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_SPOTS:
      _spots = action.data;
      mapStore.emitChange();
      break;
    default:
      break;
  }
});

export default mapStore;
