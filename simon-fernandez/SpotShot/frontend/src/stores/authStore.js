import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import actionTypes from "../actions/actionTypes";
import { logInUser } from "../actions/authActions";

const CHANGE_EVENT = "change";

let _user = [];
let _token = null;
let _message = null;
let _err = null;

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
  getToken() {
    return _token;
  }
  getMessage() {
    return _message;
  }
  getErr() {
    return _err;
  }
}

const authStore = new AuthStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      _user = action.data;
      _token = action.data.token && action.data.token;
      _message = action.data.message && action.data.message;
      authStore.emitChange(_user);
      authStore.emitChange(_token);
      authStore.emitChange(_message);

      break;

    case actionTypes.SIGNUP_USER:
      _user = action.data;
      logInUser(_user.username, _user.password);
      _err = action.data.err && action.data.err;
      authStore.emitChange(_user);
      authStore.emitChange(_err);

      break;
    case actionTypes.SIGNOUT_USER:
      _user = null;
      _token = null;
      _message = null;
      _err = null;
      authStore.emitChange(_user);
      authStore.emitChange(_token);
      authStore.emitChange(_message);
      authStore.emitChange(_err);
      break;
    case actionTypes.SIGN_INVITATE:
      _user = action.data;
      authStore.emitChange(_user);
      break;
    default:
      break;
  }
});

export default authStore;
