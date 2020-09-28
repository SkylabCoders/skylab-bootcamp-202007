import { EventEmitter } from "events";
import dispatcher from "../../dispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";

let _user = {};

let _token = "";
let _message = "";

class AuthStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeChangeListener(CHANGE_EVENT, callback);
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
}

const authStore = new AuthStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.CREATE_USER:
      _user = action.data.user;
      _token = action.data.user.token;
      _message = action.data.message;
      authStore.emitChange();
      _message = null;
      break;
    case actionTypes.LOGIN_USER:
      _user = action.data.user;
      _token = action.data.user.token;
      _message = action.data.message;
      authStore.emitChange();
      _message = null;
      break;
    default:
      break;
  }
});

export default authStore;
