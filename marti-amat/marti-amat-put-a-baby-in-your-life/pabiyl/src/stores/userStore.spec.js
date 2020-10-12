
import userStore from './userStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../Dispatcher';
let action = null;
function reduceAction(type, data = {}) {
    return {
        type,
        data
    };
}
const callback = jest.fn();
describe('UserStore', () => {
    beforeEach(() => {
        userStore.addChangeListener(callback);
        action = reduceAction(actionTypes.LOAD_DETAIL_USER, [
            {
                _id: '5f52243873d494545cfbadfe',
                name: 'EvaFernández'
            }
        ]);

        dispatcher.dispatch(action);
    });
    afterEach(() => {
        userStore.removeChangeListener(callback);
    });
    it('should create', () => {
        expect(callback).toBeCalled();
        expect(userStore).toBeDefined();
    });
    it('should register LOAD_USERS', () => {
        expect(userStore.getDetailUsers()).toEqual(action.data);
    });
    it('should get user by id', () => {
        expect(
            userStore.getDetailUserById('5f52243873d494545cfbadfe')
        ).toEqual(action.data[0]);
    });
    it('should subscribe to addChangeListener', () => {
        const mockFunct = jest.fn();
        userStore.addChangeListener(mockFunct);
        userStore.emitChange();
        expect(mockFunct).toHaveBeenCalled();
    });

    it('should unsubscribe from addChangeListener', () => {
        const mockFunct = jest.fn();
        userStore.addChangeListener(mockFunct);
        userStore.emitChange();
        userStore.removeChangeListener(mockFunct);
        expect(mockFunct).toHaveBeenCalled();
    });


});
