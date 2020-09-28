import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import actionTypes from "../actions/actionTypes";
import React from "react";
import SpotCarousel from "../components/SpotCarousel";
import { loadSpots } from "../actions/spotActions";

const CHANGE_EVENT = "change";

let _spot = [];

class SpotStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  // eslint-disable-next-line class-methods-use-this
  getSpots() {
    return _spot;
  }

  // eslint-disable-next-line class-methods-use-this
  getSpotById(id) {
    const selectedSpot = _spot.find((spot) => spot._id === id);

    return selectedSpot;
  }

  // eslint-disable-next-line class-methods-use-this
  getCoordenates() {
    const reduceSpots = _spot.reduce((accumulator, currrentObject) => {
      const newObject = {
        _id: currrentObject._id,
        title: currrentObject.title,
        lat: currrentObject.lat,
        lgn: currrentObject.lgn,
        image: currrentObject.image,
        render: () => <SpotCarousel spot={currrentObject} />,
      };
      accumulator.push(newObject);
      return accumulator;
    }, []);

    return reduceSpots;
  }

  getSuggestions() {
    const reduceSpotsSuggestions = _spot.reduce(
      (accumulator, currrentObject) => {
        const newObject = {
          _id: currrentObject._id,
          title: currrentObject.title,
          render: () => <SpotCarousel spot={currrentObject} />,
        };
        accumulator.push(newObject);
        return accumulator;
      },
      []
    );

    return reduceSpotsSuggestions;
  }

  getCreatedSpots(username) {
    const createdSpots = _spot.filter((spot) => spot.username === username);
    return createdSpots;
  }
}

const spotStore = new SpotStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_SPOT:
      _spot = action.data;
      spotStore.emitChange(_spot);
      break;
    case actionTypes.CREATE_SPOT:
      loadSpots();
      break;
    case actionTypes.DELETE_SPOT:
      loadSpots();
      spotStore.emitChange(_spot);
      break;
    case actionTypes.UPLOAD_SPOT_PHOTO:
      loadSpots();
      spotStore.emitChange(_spot);
      break;
    default:
      break;
  }
});

export default spotStore;
