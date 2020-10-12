import authStore from "./authStore";
import actionTypes from "../actions/actionTypes";
import dispatcher from "../Dispatcher";


describe('Auth Store', () => {

    let action;
    let myCallbackMockFunction = jest.fn();

    beforeEach(() => {

        authStore.addChangeListener(myCallbackMockFunction);
    });

    afterEach(() => {
        authStore.removeChangeListener(myCallbackMockFunction);
    });

    it('shoul create', () => {
        expect(authStore).toBeDefined();
    });

    it('should get user profile', () => {
        action = {
            type: actionTypes.LOGIN,
            data: {
                user: { email: 'test@gmail.com' },
                password: 123456
            }
        }

        dispatcher.dispatch(action);
        expect(authStore.getUserProfile()).toBeDefined();

    });

    it('should register LOGOUT', () => {
        action = {
            type: actionTypes.LOGOUT
        }

        dispatcher.dispatch(action);

        expect(authStore.isLogged()).toBeDefined();
    });
    it('should register LOGIN', () => {
        action = {
            type: actionTypes.LOGIN,
            data: { user: { email: 'test@gmail.com' } }
        }

        dispatcher.dispatch(action);

        expect(authStore.isLogged()).toBeDefined();
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
            data: {
                user: { email: 'test@gmail.com' },
                password: 123456
            }
        }

        dispatcher.dispatch(action);

        expect(authStore.getUserProfile()).toBeDefined();
    });
    it('should get if user is loged', () => {
        expect(authStore.isLogged()).toBeDefined();
    });
    it('should subscribe to addChangeListener', () => {
        const mockFunct = jest.fn();
        authStore.addChangeListener(mockFunct);
        authStore.emitChange();
        expect(mockFunct).toHaveBeenCalled();
    });

    it('should unsubscribe from addChangeListener', () => {
        const mockFunct = jest.fn();
        authStore.addChangeListener(mockFunct);
        authStore.emitChange();
        authStore.removeChangeListener(mockFunct);
        expect(mockFunct).toHaveBeenCalled();
    });



})