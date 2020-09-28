import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _books = [];
let _book = null;

class SearchStore extends EventEmitter {
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

    getBookById(id) {
        if (id) _book = _books.find((book) => book.id === id);
        return _book;
    }

    setBook(book) {
        _book = book;
    }
}

const searchStore = new SearchStore();

dispatcher.register((action) => {
    switch (action.type) {
        case actionTypes.SEARCH_BOOKS:
            _book = null;
            _books = action.data;
            searchStore.emitChange();
            break;
        case actionTypes.LOAD_BOOK:
            _book = action.data;
            searchStore.emitChange();
            break;
        default:
            break;
    }
});

export default searchStore;
