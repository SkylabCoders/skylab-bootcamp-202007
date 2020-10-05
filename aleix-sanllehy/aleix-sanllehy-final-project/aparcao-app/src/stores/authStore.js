import { EventEmitter } from "events";
import dispatcher from "../../dispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";

let _user = {};
let _message = "";
let _token = "";

class AuthStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getUser() {
    return _user;
  }

  getMessage() {
    return _message;
  }

  getToken() {
    return _token;
  }

  logout() {
    _token = null;
    authStore.emitChange();
  }
}

const authStore = new AuthStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
    case actionTypes.SIGNUP:
      _message = action.data.message;
      _user = action.data.user;
      _token = action.data.user && action.data.user.token;
      authStore.emitChange();
      _message = null;
      break;

    case actionTypes.SELECT_CAR:
      _message = action.data.message;
      _user = action.data.newUser;
      authStore.emitChange();
      _message = null;
      break;

    case actionTypes.LOAD_USER:
      _user = action.data;
      authStore.emitChange();
      break;

    case actionTypes.CHANGE_PASSWORD:
      _message = action.data.message;
      authStore.emitChange();
      _message = null;
      break;

    default:
      break;
  }
});

export default authStore;
