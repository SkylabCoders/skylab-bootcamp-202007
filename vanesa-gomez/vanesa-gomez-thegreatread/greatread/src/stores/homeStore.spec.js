import homeStore from './homeStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../dispatcher';

function reduceAction(action, data) {
    return {
        type: action,
        data
    };
}

describe('HomeStore', () => {
    let action;
    let myCallbackMonckFunction;
    beforeEach(() => {
        myCallbackMonckFunction = jest.fn();
        homeStore.addChangeListener(myCallbackMonckFunction);
        action = reduceAction(actionTypes.GENRE_BOOKS_SEARCH, []);
        dispatcher.dispatch(action);
    });
    afterEach(() => {
        homeStore.removeChangeListener(myCallbackMonckFunction);
    });
    it('should return the books according to the genre', () => {
        expect(homeStore.getBooks()).toEqual(action.data);
    });
});
