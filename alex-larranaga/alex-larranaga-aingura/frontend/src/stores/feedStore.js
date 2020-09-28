import { EventEmitter } from "events";
import dispatcher from "../../Dispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";

let _feed = [];
let _aingura = [];
let _validationMessage = null;
let _userGeoLocation = null;

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

  getFeed() {
    return _feed;
  }
  getAingura() {
    return _aingura;
  }
  getValidationMessage() {
    return _validationMessage;
  }

  setUserGeoLocation(geoLocation) {
    _userGeoLocation = geoLocation;
  }

  getUserGeoLocation() {
    return _userGeoLocation;
  }

  getUsersAinguras(userName) {
    console.log(userName);
    const userAingura = _feed.filter((aingura) => aingura.author === userName);
    return userAingura;
  }

  getGeoLocation() {
    const geoLocation = _feed.reduce((acc, cur) => {
      const geoElement = {
        _id: cur._id,
        lat: cur.lat,
        lng: cur.lng,
        name: cur.name,
        image: cur.images[0],
        rating: cur.rating,
      };

      acc.push(geoElement);
      return acc;
    }, []);

    return geoLocation;
  }
}

const feedStore = new FeedStore();

dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_FEED:
      _feed = action.data;

      feedStore.emitChange(_feed);
      break;
    case actionTypes.LOAD_AINGURA:
      _feed = action.data;
      feedStore.emitChange(_feed);
      break;
    case actionTypes.LOAD_ONE_AINGURA:
      _aingura = action.data;
      feedStore.emitChange(_aingura);
      break;
    case actionTypes.REACH_AINGURA:
      _validationMessage = action.data;
      feedStore.emitChange(_validationMessage);
      _validationMessage = null;
  }
});

export default feedStore;
