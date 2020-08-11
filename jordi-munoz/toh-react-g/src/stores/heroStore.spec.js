import heroStore from './heroStore';
import { hasUncaughtExceptionCaptureCallback } from 'process';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../appDispatcher';

describe('HeroStore', () => {
    it('should create', () => {
        expect(heroStore).toBeDefined();
    });

    it('should register LOAD_HEROES', () => {
        const action = {
            type: actionTypes.LOAD_HEROES,
            data: [{ id: 14, name: 'Celeritas' }]
        };

        dispatcher.dispatch(action);

        expect(heroStore.getHeroes()).toEqual(action.data);
    });

    it('should register UPDATE_HERO', () => {

        let action = {
            type: actionTypes.LOAD_HEROES,
            data: [{ id: 14, name: 'Celeritas' }]
        };
        dispatcher.dispatch(action);

        action = {
            type: actionTypes.UPDATE_HERO,
            data: { id: 14, name: 'updated Celeritas' }
        };
        dispatcher.dispatch(action);

        const updateHero = heroStore.getHeroById(action.data.id);
        expect(updateHero).toEqual(action.data);
    });

    it('should register UPDATE_HERO with invalid ID', () => {
        let action = {
            type: actionTypes.LOAD_HEROES,
            data: [{ id: 14, name: 'Celeritas' }]
        };

        dispatcher.dispatch(action);

        action = {
            type: actionTypes.UPDATE_HERO,
            data: { id: 25, name: 'Celeritas' }
        };

        dispatcher.dispatch(action);

        const updateHero = heroStore.getHeroById(action.data.id);
        expect(updateHero).not.toBeDefined();
    });

});