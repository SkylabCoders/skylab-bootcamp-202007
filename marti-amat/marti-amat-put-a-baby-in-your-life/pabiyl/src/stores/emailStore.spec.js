import emailStore from './emailStore';
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
describe('EmailStore', () => {
    beforeEach(() => {
        emailStore.addChangeListener(callback);
        action = reduceAction(actionTypes.LOAD_EMAILS, [
            {
                _id: '5f52243873d494545cfbadfe',
                name: 'EvaFernández',
                receptor: 'martiamat@gmail.com'
            }
        ]);

        dispatcher.dispatch(action);
    });
    afterEach(() => {
        emailStore.removeChangeListener(callback);
    });
    it('should create', () => {
        expect(callback).toBeCalled();
        expect(emailStore).toBeDefined();
    });
    it('should register LOAD_EMAILS', () => {
        expect(emailStore.getEmails()).toEqual(action.data);
    });
    it('should get email by id', () => {
        expect(
            emailStore.getEmailById('5f52243873d494545cfbadfe')
        ).toEqual(action.data[0]);
    });
    it('should get email by receptor', () => {
        expect(
            emailStore.getEmailsByReceptor('martiamat@gmail.com')
        ).toEqual(action.data);
    });
    it('should subscribe to addChangeListener', () => {
        const mockFunct = jest.fn();
        emailStore.addChangeListener(mockFunct);
        emailStore.emitChange();
        expect(mockFunct).toHaveBeenCalled();
    });

    it('should unsubscribe from addChangeListener', () => {
        const mockFunct = jest.fn();
        emailStore.addChangeListener(mockFunct);
        emailStore.emitChange();
        emailStore.removeChangeListener(mockFunct);
        expect(mockFunct).toHaveBeenCalled();
    });
});