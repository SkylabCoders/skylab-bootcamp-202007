/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */

import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/actionTypes';
import store from '../store/store';
import errorsHandle from '../errors/errorsHandle';

jest.mock('../errors/errorsHandle')

function reduceAction(action, state) {
    return {
        type: action,
        data: state
    };
}
const comments = [
    {
        _id: 1,
        content: 'gg',
        likes: 3
    }, {
        _id: 2,
        content: 'ee',
        likes: 2
    }, {
        _id: 3,
        content: 'ff',
        likes: 2
    }
]

const entries = [
    {
        _id: 1,
        entryCommentList: [1, 2, 3]
    },
    { _id: 2, entryCommentList: [4, 5] }
]

const user = {
    name: 'Gabriel'
}
const user2 = {
    name: 'Susy'
}
const data = [{
    _id: 1,
    isBackend: true,
    isFrontend: true,
    isFullstack: false,
    isJunior: true,
    isSenior: true,
    haveFile: true,
    isQuestion: true,
    description: '¿quiestion here okay?',
    entryCommentList: [1, 2, 3, 4, 5],
    entryPopularity: 9,
    entryRating: 4,

},
{
    _id: 2,
    isBackend: false,
    isFrontend: false,
    isFullstack: true,
    isJunior: false,
    isSenior: true,
    haveFile: false,
    isQuestion: false,
    description: 'This is another interview question',
    entryCommentList: [1, 2, 3, 4, 5],
    entryPopularity: 2,
    entryRating: 7,

}];
describe('Store', () => {
    let action;
    let myCallbackMockFunction;

    beforeEach(() => {
        myCallbackMockFunction = jest.fn();
        store.addChangeListener(myCallbackMockFunction);

    });
    afterEach(() => {
        action = reduceAction(actionTypes.LOAD_DETAIL, []
        );
        dispatcher.dispatch(action)
        store.removeChangeListener(myCallbackMockFunction);
    });
    it('should create', () => {
        action = reduceAction(actionTypes.LOAD_DETAIL, data
        );
        dispatcher.dispatch(action);
        expect(myCallbackMockFunction).toHaveBeenCalledTimes(1);
        expect(store).toBeDefined();

    });
    it('should return all info', () => {
        action = reduceAction(actionTypes.LOAD_DETAIL, data
        );
        dispatcher.dispatch(action);
        expect(store.getDetail()).toEqual(data)

        expect(store.getOneEntry(1)).toEqual(data[0])
    });
    it('should return no info', () => {
        action = reduceAction('error', data
        );
        dispatcher.dispatch(action);
        expect(store.getDetail()).toEqual([])
    });
    it('should set a new user', () => {
        JSON.parse = jest.fn().mockImplementationOnce(() => {
            return user
        });

        action = reduceAction(actionTypes.LOGIN, user
        );
        dispatcher.dispatch(action);
        expect(store.getUser()).toEqual(user)
    });
    JSON.parse = jest.fn().mockImplementationOnce(() => {
        return user
    });
    it('should set a new user', () => {
        JSON.parse = jest.fn().mockImplementationOnce(() => {
            return global.sessionStorage.getItem('user')
        });
        action = reduceAction(actionTypes.LOGIN, user
        );
        dispatcher.dispatch(action);
        store.setUser(user2);
        JSON.parse = jest.fn().mockImplementationOnce(() => {
            return global.sessionStorage.getItem('user')
        });
        expect(store.getUser()).toEqual(JSON.stringify(user2))
        store.logout()
        expect(store.getUser()).toEqual(undefined)
    });
    it('should load all entries', () => {

        action = reduceAction(actionTypes.LOAD_ENTRIES, entries
        );
        dispatcher.dispatch(action);

        expect(store.getEntriesDetail()).toEqual(entries);
    });
    it('should load all comments', () => {

        action = reduceAction(actionTypes.LOAD_COMMENTS, comments
        );
        dispatcher.dispatch(action);

        expect(store.getUserComments(entries[0])).toEqual(comments);
        expect(store.getUserComments(entries[1])).toEqual([]);
    });
    it('should sepct a exception else', () => {

        action = reduceAction(actionTypes.LOAD_COMMENTS, []
        );
        dispatcher.dispatch(action);

        expect(store.getUserComments(entries[0])).toEqual([]);
    });
    it('should not return nothing because is not set', () => {

        expect(store.getMessage()).toEqual(undefined);
    });
    it('should create a new comment', () => {
        expect(store.isNewComment()).toBe(false);

        action = reduceAction(actionTypes.ADD_COMMENT, { error: { message: 'a', code: 1 } }
        );
        dispatcher.dispatch(action);
        expect(store.isNewComment()).toBe(true);

    });
    it('should return popupComponet', () => {
        errorsHandle.mockImplementationOnce(() => {
            return 'something'
        })
        store.setMessage('something');
        expect(store.getMessage()).toEqual('something');
    });
    it('should Register', () => {
        expect(store.getRegister()).toEqual(false);
        action = reduceAction(actionTypes.REGISTER, entries
        );
        dispatcher.dispatch(action);

        expect(store.getRegister()).toEqual(true);
        store.setRegister();

        expect(store.getRegister()).toEqual(false);
    });

});
