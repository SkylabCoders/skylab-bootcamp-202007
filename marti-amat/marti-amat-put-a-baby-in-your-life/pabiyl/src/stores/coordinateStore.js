import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let coordinates = {};

class CoordinateStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getCoordinates() {

        return coordinates;
    }

}

const coordinateStore = new CoordinateStore();

dispatcher.register((action) => {

    switch (action.type) {

        case actionTypes.GET_COORDINATES:
            coordinates = action.data;
            coordinateStore.emitChange(coordinates);
            break;
        default: break;

    }

});

export default coordinateStore;