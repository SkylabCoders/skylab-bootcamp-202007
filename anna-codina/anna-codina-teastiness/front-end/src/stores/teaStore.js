import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _princpialTeas = [];
let _varietiesTeas = [];
let _teasSearchList = [];

class TeaStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  getPrincipalTeas() {
    return _princpialTeas;
  }
  getVarietiesTeas() {
    return _varietiesTeas;
  }
  getSearchResults() {
    return _teasSearchList;
  }
  getTeaVarietieId(_id) {
    return _varietiesTeas.find((tea) => tea._id === _id);
  }
  getResultById(_id) {
    return _teasSearchList.find((tea) => tea._id === _id);
  }
  getTeaVarietieByName(name) {
    return _varietiesTeas.find((tea) => tea.name === name);
  }
  getPrincipalTeasById(_id) {
    return _princpialTeas.find((tea) => tea._id === _id);
  }
}

const teaStore = new TeaStore();

dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_TEA_VARIETY:
      _varietiesTeas = action.data;
      teaStore.emitChange(_varietiesTeas);
      break;
    case actionTypes.LOAD_TEA_PRINCIPAL:
      _princpialTeas = action.data;
      teaStore.emitChange(_princpialTeas);
      break;
    case actionTypes.CREATE_TEA_VARIETY:
      _varietiesTeas = [_varietiesTeas, action.data];
      teaStore.emitChange(_varietiesTeas);
      break;
    case actionTypes.UPDATE_TEA_VARIETY:
      _varietiesTeas = _varietiesTeas.map((tea) => {
        if (tea._id === action.data._id) {
          tea = action.data;
        }
        return tea;
      });
      teaStore.emitChange(_varietiesTeas);
      break;
    case actionTypes.LOAD_TEA_SEARCH:
      _teasSearchList = action.data;
      teaStore.emitChange(_teasSearchList);
      break;
    case actionTypes.DELETE_TEA_VARIETY:
      _varietiesTeas = _varietiesTeas.filter(
        (tea) => tea._id !== action.data._id
      );
      _teasSearchList = _teasSearchList.filter(
        (tea) => tea._id !== action.data._id
      );
      teaStore.emitChange(_varietiesTeas);
      break;
    default:
      break;
  }
});

export default teaStore;
