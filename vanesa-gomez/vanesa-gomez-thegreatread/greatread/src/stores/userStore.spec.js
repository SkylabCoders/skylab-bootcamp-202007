import userStore from './userStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../dispatcher';

function reduceAction(action, data) {
    return {
        type: action,
        data
    };
}

describe('UserStore', () => {
    let action;
    let myCallbackMockFunction;
    beforeEach(() => {
        myCallbackMockFunction = jest.fn();
        userStore.addChangeListener(myCallbackMockFunction);

        action = reduceAction(actionTypes.LOAD_USER, [{ id: '123' }]);
        dispatcher.dispatch(action);
    });
    afterEach(() => {
        userStore.removeChangeListener(myCallbackMockFunction);
    });

    it('should call user', () => {
        dispatcher.dispatch(action);
        expect(userStore.getUser()).toEqual(action.data);
    });

    it('should put and delete favoriteBook', () => {
        action = reduceAction(actionTypes.ADD_FAVORITE_BOOK, [
            { _user: 'abc123', favoriteBooks: '1234' }
        ]);
        dispatcher.dispatch(action);
        expect(userStore.getUser()).toBeTruthy();
    });
});
