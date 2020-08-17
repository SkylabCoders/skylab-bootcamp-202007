import authStore from "./AuthStore";
import actionTypes from "../actions/actionTypes";
import dispatcher from "../Dispatcher";


describe('Auth Store', () => {
    
    let action;
    let myCallbackMockFunction;

    beforeEach(() => {
        myCallbackMockFunction = jest.fn();
        authStore.addChangeListener(myCallbackMockFunction);
    });

    afterEach(() => {
        authStore.removeChangeListener(myCallbackMockFunction);
    })

    it('shoul create', () => {
        expect(authStore).toBeDefined();
    });

    it('should register LOGIN', () => {
        action = {
            type: actionTypes.LOGIN,
            data: {
                email: 'test@gmail.com',
                password: 123456
            }
        }

        dispatcher.dispatch(action);
        expect(myCallbackMockFunction).toHaveBeenCalled();
        expect(myCallbackMockFunction).toHaveBeenCalledTimes(1);

        expect(authStore.getUserProfile()).toEqual(action.data);

    });

    it('should register LOGOUT', () => {
        action = {
            type: actionTypes.LOGOUT
        }

        dispatcher.dispatch(action);

        expect(authStore.isLogged()).toEqual(false);
    });

    it('should register LOGOUT', () => {
        action = {
            type: actionTypes.LOGOUT
        }

        dispatcher.dispatch(action);

        expect(authStore.getUserProfile()).toEqual(null);
    });

    it('should register CREATE_USER', () => {
        action = {
            type: actionTypes.CREATE_USER,
            data:{
                email: 'test@gmail.com',
                password: 123456
            }
        }

        dispatcher.dispatch(action);

        expect(authStore.getUserProfile()).toEqual(action.data);
    });



})