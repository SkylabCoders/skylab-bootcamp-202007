import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _cards = [];

class CardStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }


  getCards() {
      return _cards;
  }
}

  const cardStore = new CardStore();
  dispatcher.register((action) => {
    switch (action.type) {
      case actionTypes.LOAD_CARDS:
        _cards = action.data;
        cardStore.emitChange(_cards);
        break;
      default:
        break;
    }
  });
  
  export default cardStore;