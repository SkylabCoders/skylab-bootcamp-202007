import authStore from './authStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../appDispatcher';
const data = {
    user: {
        displayName: 'name',
        photoURL: 'URL'
    }
}

describe('HeroStore', () => {

    beforeEach(() => {
    });

    it('should create', () => {

        expect(authStore).toBeTruthy();

    });

    it('should check is is Logged', () => {
        expect(authStore.isLogged()).toEqual(false);
    });

    it('should Login LOGIN', () => {
        let action = {
            type: actionTypes.LOGIN,
            data
        };
        let myCallbackMockFunction = jest.fn();
        authStore.addChangeListener(myCallbackMockFunction);
        dispatcher.dispatch(action);

        expect(myCallbackMockFunction).toHaveBeenCalled();
        expect(myCallbackMockFunction).toHaveBeenCalledTimes(1);
        expect(authStore.isLogged()).toEqual(true);
        expect(authStore.getUserName()).toEqual(data.user.displayName);
        expect(authStore.getUserPhoto()).toEqual(data.user.photoURL);
        expect(authStore.getUserProfile()).toEqual(data);

        authStore.removeChangeListener(myCallbackMockFunction);

    });

    it('should LOGOUT', () => {
        let action = {
            type: actionTypes.LOGOUT
        };
        dispatcher.dispatch(action);

        expect(authStore.isLogged()).toEqual(false);
        expect(authStore.getUserProfile()).toBeNull();

    });

    it('should create a New User', () => {
        let action = {
            type: actionTypes.CREATE_PROFILE,
            data
        };
        dispatcher.dispatch(action);
        expect(authStore.getUserProfile()).toEqual(data);
    });
    it('should create a New User', () => {
        let action = {
            type: 'error'
        };
        dispatcher.dispatch(action);
        expect(authStore.getUserProfile()).toEqual(data);
    });


});
