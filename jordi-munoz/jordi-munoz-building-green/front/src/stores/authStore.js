import { EventEmitter } from 'events';
import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';

let _user = null;

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

}

const authStore = new AuthStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.SAVE_USER:
      _user = action.data;
      console.log(_user);
      sessionStorage.user = JSON.stringify(_user);
      authStore.emitChange();
      break;

    case actionTypes.REMOVE_USER:
      _user = null;
      authStore.emitChange();
      break;
    default:

  }
});

export default authStore;