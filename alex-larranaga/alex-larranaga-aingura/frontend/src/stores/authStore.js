import { EventEmitter } from "events";
import dispatcher from "../../Dispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";

let _user = [];
let _message = "";
let _token = undefined;

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

  getResponseMessag() {
    return _message;
  }

  getToken() {
    return _token;
  }

  logoutUser() {
    _token = false;
    authStore.emitChange();
  }
}

const authStore = new AuthStore();

dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.USER_EXISTS:
      _message = action.data;
      authStore.emitChange();
    case actionTypes.CREATE_USER:
      console.log("ESTO ES AUTH STORE AL CREAR USER");
      console.log(action.data);

      _user = action.data.user;
      _token = action.data.user && action.data.user.token;

      authStore.emitChange();
      break;
    case actionTypes.LOGIN_USER:
      _user = action.data;
      _token = action.data.token;
      _message = action.data.message && action.data.message;
      authStore.emitChange();
      _message = null;
      break;
  }
});

export default authStore;
