import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _books = [];

class HomeStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }
    getBooks() {
        return _books;
    }
}

const homeStore = new HomeStore();
dispatcher.register((action) => {
    if (action.types === actionTypes.GENRE_BOOKS_SEARCH) {
        _books = action.data;
        homeStore.emitChange();
    }
    // switch (action.types) {
    //     case actionTypes.GENRE_BOOKS_SEARCH:
    //         _books = action.data;
    //         homeStore.emitChange();
    //         break;
    //     default:
    //         break;
    // }
});

export default homeStore;
