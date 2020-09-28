import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';

let _user = null;

class UserStore extends EventEmitter {
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
  getOwnShopById(_id) {
    return _user.owner.find((shop) => shop._id === _id);
  }
}

const userStore = new UserStore();

dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_USER:
      _user = action.data;
      userStore.emitChange(_user);
      break;
    case actionTypes.LOGOUT_USER:
      _user = null;
      userStore.emitChange(_user);
      break;
    default:
      break;
  }
});

export default userStore;
