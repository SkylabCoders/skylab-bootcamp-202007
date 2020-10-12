import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _groups = [];
let _group = null;

class GroupStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getGroups() {
    return _groups;
  }

  getGroup() {
    return _group;
  }

  getGroupById(id) {
    return _groups.find((group) => group._id === id);
  }
}

const groupStore = new GroupStore();

dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_GROUPS:
      _groups = action.data;
      groupStore.emitChange();
      break;

    case actionTypes.UPDATE_GROUP:
      _group = action.data;
      groupStore.emitChange();
      break;

    default:
      break;
  }
});

export default groupStore;
