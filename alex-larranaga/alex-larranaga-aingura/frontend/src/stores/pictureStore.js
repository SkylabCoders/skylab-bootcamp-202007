import { EventEmitter } from "events";
import dispatcher from "../../Dispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";

let _pictures = [];
class FeedStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getPictures() {
    return _pictures;
  }
}

const pictureStoe = new FeedStore();

dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_FEED:
      _pictures = action.data;
  }
});

export default feedStore;
