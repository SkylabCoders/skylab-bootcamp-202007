import heroStore from './heroStore';
import { hasUncaughtExceptionCaptureCallback } from 'process';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../appDispatcher';

function reduceAction(action, data) {
    return {
        type: action,
        data
    };
}

describe('HeroStore', () => {
    let callback;
    let action;

    beforeEach(() => {
        callback = jest.fn();
        heroStore.addChangeListener(callback);

        action = {
            type: actionTypes.LOAD_HEROES,
            data: [{ id: 14, name: 'Celeritas' }]
        };
    });

    afterEach(() => {
        heroStore.removeChangeListener(callback);
    });

    it('should create', () => {
        expect(heroStore).toBeDefined();
    });

    it('should register LOAD_HEROES', () => {

        dispatcher.dispatch(action);

        expect(heroStore.getHeroes()).toEqual(action.data);
    });

    it('should register UPDATE_HERO', () => {

        dispatcher.dispatch(action);

        action = reduceAction(actionTypes.UPDATE_HERO, { id: 14, name: 'updated Celeritas' });
        dispatcher.dispatch(action);

        const updateHero = heroStore.getHeroById(action.data.id);
        expect(updateHero).toEqual(action.data);
    });

    it('should register UPDATE_HERO with invalid ID', () => {

        dispatcher.dispatch(action);

        action = reduceAction(actionTypes.UPDATE_HERO, { id: 25, name: 'Celeritas' });
        dispatcher.dispatch(action);

        const updateHero = heroStore.getHeroById(action.data.id);
        expect(updateHero).not.toBeDefined();
    });

    it('should create a new hero', () => {
        const name = 'Gilberto';

        action = reduceAction(actionTypes.CREATE_HERO, { name });
        dispatcher.dispatch(action);

        const isSavedHero = heroStore
            .getHeroes()
            .some((hero) => hero.name === name);

        expect(isSavedHero).toEqual(true);
    });

    it('should delete a hero', () => {
        let id = 14;

        action = reduceAction(actionTypes.DELETE_HERO, { id });
        dispatcher.dispatch(action);

        expect(heroStore.getHeroById(id)).not.toBeDefined();
    });

    it('should handle default case for action types', () => {
        try {
            dispatcher.dispatch({});
            expect(heroStore).toBeFalsy();
        } catch (error) {
            const message = `The action type is unknown. action.type: undefined`;
            expect(error).toEqual(message)
        }
    });




});