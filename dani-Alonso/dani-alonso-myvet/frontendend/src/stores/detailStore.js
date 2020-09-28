import { EventEmitter } from "events";
import dispatcher from "../../dispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";

let _vetDetails = [];
let _vetQuestions = [];
let _showVetQuestions = [];

class DetailStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getVetDetails() {
    return _vetDetails;
  }
  getVetQuestions() {
    return _vetQuestions;
  }
  getShowVetQuestions() {
    return _showVetQuestions;
  }

  getVetById(id) {
    return _vetDetails.find((vets) => vets.id === id);
  }
}

const detailStore = new DetailStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_DETAIL_VETS:
      _vetDetails = action.data;

      detailStore.emitChange();
      break;
    case actionTypes.CREATE_QUESTION:
      _vetQuestions = action.data;
      detailStore.emitChange();
      break;
    case actionTypes.LOAD_VET_QUESTION:
      _showVetQuestions = action.data;
      detailStore.emitChange();
      break;
    default:
      break;
  }
});

export default detailStore;
