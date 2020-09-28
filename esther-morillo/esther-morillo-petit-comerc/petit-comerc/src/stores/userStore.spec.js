import userStore from './userStore';
import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

describe('User Store', () => {
    let action = {
        type: actionTypes.LOAD_USER,
        data: {id: '3'}
    }

    let myCallbackMockFunction;

    beforeEach(() => {
        myCallbackMockFunction = jest.fn();
        userStore.addChangeListener(myCallbackMockFunction);
    });

    afterEach(() => {
        userStore.removeChangeListener(myCallbackMockFunction);
    });

    it('should create store', () => {
        expect(userStore).toBeDefined();
    });

    it('should call user', () => {
        dispatcher.dispatch(action);
        expect(userStore.getUser()).toEqual(action.data);
    });

    it('should defaul case when the action type does not exist', () => {
        action = {
            type: actionTypes.DELETE_USER,
            data: {id: 3}
        }
        dispatcher.dispatch(action);
        expect(userStore).toBe.truthy;
    })

    it('should add to cart', () =>  {
        action = {
            type: actionTypes.ADD_CART,
            data: {
                _id: '11',
                cart: '13'
            }
        }        
        dispatcher.dispatch(action);
        expect(userStore).toBe.truthy;
    })
})

