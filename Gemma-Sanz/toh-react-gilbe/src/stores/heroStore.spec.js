import heroStore from './heroStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../appDispatcher';

function reduceAction(action, data) {
    return {
        type: action,
        data
    };
}

describe('HeroStore', () => {
    let action;
    beforeEach(() => {
        action = reduceAction(actionTypes.LOAD_HEROES, [
            { id: 14, name: 'Celeritas' },
            //            { id: 13, name: 'NOT Celeritas' }

        ]);
        dispatcher.dispatch(action);
    });

    it('should create', () => {
        expect(heroStore).toBeDefined();
    });

    it('should register LOAD_HEROES', () => {
        expect(heroStore.getHeroes()).toEqual(action.data);
    });

    it('should register UPDATE_HERO', () => {

        action = reduceAction(actionTypes.UPDATE_HERO, {
            id: 14,
            name: ' Updated Celeritas'
        });

        dispatcher.dispatch(action)
        const updateHero = heroStore.getHeroById(action.data.id);
        expect(updateHero).toEqual(action.data);
    });

    it('should register UPDATE_HERO with invalid ID', () => {

        action = reduceAction(actionTypes.UPDATE_HERO, {
            id: 25,
            name: ' Updated Celeritas'
        });

        //        console.log(heroStore.getHeroes())

        dispatcher.dispatch(action);

        const updateHero = heroStore.getHeroById(action.data.id);
        expect(updateHero).not.toBeDefined();
    });

    it('should register CREATE_HERO a new hero', () => {
        const name = 'Gemma';
        action = reduceAction(actionTypes.CREATE_HERO,
            { name })
        dispatcher.dispatch(action);

        const isSavedHero = heroStore
            .getHeroes()
            .filter((hero) => hero.name === name);

        expect(isSavedHero).toBeTruthy();
        expect(isSavedHero[0].name).toEqual(name);
    });

    it('should register CREATE_HERO when there is an ID lower than 0', () => {
        const name = 'Gemma';
        action = reduceAction(actionTypes.LOAD_HEROES, [
            { id: -1, name: 'Celeritas' }
        ]);
        dispatcher.dispatch(action);


        expect(heroStore.getHeroes().length).toEqual(1);
    });

    it('should register DELETE_HERO', () => {
        const id = 14;
        //Pasamos el 20 argumento como objeto porque en el heroActions la data que le pasamos es un objeto
        action = reduceAction(actionTypes.DELETE_HERO,
            { id })
        dispatcher.dispatch(action);

        const deletedHero = heroStore
            .getHeroById(id)
        //        console.log(heroStore.getHeroes())
        expect(deletedHero).not.toBeDefined();
    })
    it('should handle default case for action types', () => {
        try {
            dispatcher.dispatch({});
            expect(heroStore).toBeFalsy();
        } catch (errorMessage) {
            const message = `The action type is unknown. action.type: undefined`;
            expect(errorMessage).toEqual(message)
        }
    })
});