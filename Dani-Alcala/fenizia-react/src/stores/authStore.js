import EventEmiter from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _isLogged = false;
let _userProfile = null;
let _errorData = null;

class AuthStore extends EventEmiter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  isLogged() {
    return _isLogged;
  }

  getUserProfile() {
    return _userProfile;
  }
  getSignError() {
    return _errorData;
  }
}

const authStore = new AuthStore();

dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      _userProfile = action.user;
      _isLogged = !!action.user;
      authStore.emitChange();
      break;
    case actionTypes.LOGOUT:
      _isLogged = false;
      _userProfile = [];
      authStore.emitChange();
      break;
    case actionTypes.SIGN_IN:
      _errorData = action.data;
    default:
      break;
  }
});

export default authStore;
