import heroStore from './heroStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../appDispatcher'

function reduceAction(action, data) {
    return {
        type: action,
        data
    };
}

describe('HeroStore', () => {
    let action;
    let callbackMockFunction;
    beforeEach(() => {
        callbackMockFunction = jest.fn();
        heroStore.addChangeListener(callbackMockFunction);
        action = reduceAction(actionTypes.LOAD_HERO, [{ id: 14, name: 'Celeritas' }])
        dispatcher.dispatch(action);

    });

    afterEach(() => {
        heroStore.removeChangeListener(callbackMockFunction);
    });

    it('should create', () => {
        expect(heroStore).toBeDefined();
        expect(callbackMockFunction).toHaveBeenCalled();
        expect(callbackMockFunction).toHaveBeenCalledTimes(1);
        console.log('create store');
    });

    it('should register LOAD_HEROES', () => {
        expect(heroStore.getHeroes()).toEqual(action.data);

    })

    it('should register UPDATE_HERO', () => {
        action = reduceAction(actionTypes.UPDATE_HERO, [{ id: 14, name: 'Celeritas' }])
        dispatcher.dispatch(action);

        expect(heroStore.getHeroes()).toEqual(action.data);

    })

    it('should not register UPDATE_HERO with invalid ID', () => {
        action = reduceAction(actionTypes.UPDATE_HERO, { id: 25, name: 'Celeritas' })


        dispatcher.dispatch(action);
        const updateHero = heroStore.getHeroById(action.data.id);
        expect(updateHero).not.toBeDefined();


    });
    it('should create a new hero', () => {
        const name = 'Gilberto'

        action = reduceAction(actionTypes.CREATE_HERO, { name });
        dispatcher.dispatch(action)
        const savedHero = heroStore
            .getHeroes()
            .filter(hero => hero.name === name);

        expect(savedHero[0].name).toEqual(name);
        expect(savedHero[0].id).toEqual(15);
    });

    it('should delete a hero given an id', () => {
        const id = 14;
        action = reduceAction(actionTypes.DELETE_HERO, { id })
        dispatcher.dispatch(action);
        expect(heroStore.getHeroById(id)).not.toBeDefined();
    });

    it('should handel default case for action types', () => {
        try {

            dispatcher.dispatch({});
            expect(heroStore).toBeFalsy();
        } catch (error) {
            const message = `The action type is unkown. action.type: undefined`;
            expect(error).toEqual(message);
        }
    });
});






