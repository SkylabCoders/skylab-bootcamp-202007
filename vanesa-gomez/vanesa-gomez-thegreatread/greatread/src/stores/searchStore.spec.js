import searchStore from './searchStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../dispatcher';

function reduceAction(action, data) {
    return {
        type: action,
        data
    };
}

describe('SearchStore', () => {
    let action;
    let myCallbackMockFunction;
    beforeEach(() => {
        myCallbackMockFunction = jest.fn();
        searchStore.addChangeListener(myCallbackMockFunction);
        action = reduceAction(actionTypes.SEARCH_BOOKS, [
            { id: 1, bookTitle: 'Postales del Este' }
        ]);
        dispatcher.dispatch(action);
    });
    afterEach(() => {
        searchStore.removeChangeListener(myCallbackMockFunction);
    });

    it('should return the books according to the search', () => {
        expect(searchStore.getBooks()).toEqual(action.data);
    });

    it('should return', () => {
        myCallbackMockFunction = jest.fn();
        searchStore.addChangeListener(myCallbackMockFunction);
        action = reduceAction(actionTypes.LOAD_BOOK, [
            { id: 1, bookTitle: 'Postales del Este' }
        ]);
        dispatcher.dispatch(action);
        expect(searchStore.getBookById()).toEqual(action.data);
    });
});
