import store from './store';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../appDispatcher';

describe('Store Component', () => {
    let callback;

    beforeEach(() => {
        callback = jest.fn();
        store.addChangeListener(callback);
    });

    afterEach(() => {
        store.removeChangeListener(callback);
    });

    it('should create store', () => {
        expect(store).toBeDefined();
    });

    it('should add wins', () => {

        let action = {
            type: actionTypes.WIN_INC
        };
        dispatcher.dispatch(action);

        expect(store.getWins()).toEqual(1);
    });

    it('should add loss', () => {

        let action = {
            type: actionTypes.LOSS_INC
        };
        dispatcher.dispatch(action);

        expect(store.getLoss()).toEqual(1);
    });

    it('should load a filter list', () => {
        let action = {
            type: actionTypes.GLOBAL_SEARCH,
            data: { text: '', filter: 'planet', name: 'Namek' }
        };
        dispatcher.dispatch(action);

        expect(store.getSearchValue()).toEqual(action.data);

    });

    it('should get planets filtered', () => {
        let planets = [];
        expect(store.getPlanetsFiltered()).toEqual(planets);
    });

    it('should get sagas filtered', () => {
        let sagas = [];
        expect(store.getSagasFiltered()).toEqual(sagas);
    });

    it('should get chars filtered', () => {
        let chars = [];
        expect(store.getCharactersFiltered()).toEqual(chars);
    });

});