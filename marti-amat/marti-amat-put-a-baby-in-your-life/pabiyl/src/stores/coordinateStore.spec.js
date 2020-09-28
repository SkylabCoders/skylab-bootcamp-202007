import coordinateStore from './coordinateStore';
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
describe('coordinateStore', () => {
    beforeEach(() => {
        coordinateStore.addChangeListener(callback);
        action = reduceAction(actionTypes.GET_COORDINATES, [
            {
                lat: 2.333,
                lon: 45.344
            }
        ]);

        dispatcher.dispatch(action);
    });
    afterEach(() => {
        coordinateStore.removeChangeListener(callback);
    });
    it('should create', () => {
        expect(callback).toBeCalled();
        expect(coordinateStore).toBeDefined();
    });
    it('should register GET_COORDINATES', () => {
        expect(coordinateStore.getCoordinates()).toEqual(action.data);
    });

    it('should subscribe to addChangeListener', () => {
        const mockFunct = jest.fn();
        coordinateStore.addChangeListener(mockFunct);
        coordinateStore.emitChange();
        expect(mockFunct).toHaveBeenCalled();
    });

    it('should unsubscribe from addChangeListener', () => {
        const mockFunct = jest.fn();
        coordinateStore.addChangeListener(mockFunct);
        coordinateStore.emitChange();
        coordinateStore.removeChangeListener(mockFunct);
        expect(mockFunct).toHaveBeenCalled();
    });
});