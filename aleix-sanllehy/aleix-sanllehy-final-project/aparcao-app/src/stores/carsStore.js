import { EventEmitter } from "events";
import dispatcher from "../../dispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";

let _makes = [];
let _models = [];

class CarsStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getMakes() {
    return _makes;
  }

  getModels() {
    return _models;
  }
}

const carsStore = new CarsStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_MAKES:
      _makes = action.data;
      carsStore.emitChange();
      break;
    case actionTypes.LOAD_MODELS:
      _models = action.data;
      carsStore.emitChange();
      break;
    default:
      break;
  }
});

export default carsStore;
