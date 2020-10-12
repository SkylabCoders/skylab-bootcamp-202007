import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _events = [];
let _event = null;

class EventStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getEvents() {
    return _events;
  }

  setEvents(data) {
    _events = data;
  }

  setEvent(data) {
    _event = data;
  }

  getEvent() {
    return _event;
  }

  getEventById(id) {
    return _events.find((event) => event._id === id);
  }

  isSubscribed(userId) {
    return (
      _event &&
      _event.participants &&
      _event.participants.some(
        (participant) => participant === userId || participant._id === userId
      )
    );
  }
}

const eventStore = new EventStore();

dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_EVENTS:
      _event = null;
      _events = action.data;
      eventStore.emitChange();
      break;
    case actionTypes.LOAD_EVENT:
      _event = action.data;
      eventStore.emitChange();
      break;

    case actionTypes.CREATE_EVENT:
      _event = action.data;
      eventStore.emitChange();
      break;

    case actionTypes.DELETE_EVENT:
      console.log(action.data);
      _events = _events.filter((element) => element !== action.data);
      eventStore.emitChange();
      break;

    case actionTypes.JOIN_EVENT:
      _event = action.data;
      eventStore.emitChange();
      break;

    case actionTypes.UPDATE_EVENT:
      _event = action.data;
      eventStore.emitChange();
      break;

    default:
      break;
  }
});

export default eventStore;
