
import heroStore from './heroStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../appDispatcher'
function reduceAction(action, data) {
    return {
        type: action,
        data: data
    };
}
let myCallbackMockFunction;

describe('Hero Store Snapshot', function () {
    let action;
    beforeEach(() => {
        myCallbackMockFunction = jest.fn();
        heroStore.addChangeListener(myCallbackMockFunction);

        action = reduceAction(actionTypes.LOAD_HEROES, [{ id: 14, name: 'gabriel' }])

        dispatcher.dispatch(action)
    })
    afterEach(() => {
        heroStore.removeChangeListener(myCallbackMockFunction);
    })
    it('should create', () => {
        expect(myCallbackMockFunction).toHaveBeenCalled();
        expect(myCallbackMockFunction).toHaveBeenCalledTimes(1);
        expect(heroStore).toBeDefined();
    });
    it('should register LOAD_HEROS', () => {

        expect(heroStore.getHeroes()).toEqual(action.data);
    });
    it('should register LOAD_HEROS with id les than 0', () => {
        action = reduceAction(actionTypes.LOAD_HEROES, [{ id: -2, name: 'gabriel' }])

        dispatcher.dispatch(action)
        expect(myCallbackMockFunction).toHaveBeenCalled();
        expect(myCallbackMockFunction).toHaveBeenCalledTimes(2);
        expect(heroStore.getHeroes()).toEqual(action.data);
    });

    it('should register UPDATE_HERO', () => {
        action = reduceAction(actionTypes.UPDATE_HERO, {
            id: 14, name: 'gabriel Guapo'
        })
        dispatcher.dispatch(action)
        const updateHero = heroStore.getHeroById(action.data.id)

        expect(myCallbackMockFunction).toHaveBeenCalled();
        expect(myCallbackMockFunction).toHaveBeenCalledTimes(2);
        expect(updateHero).toEqual(action.data);
    });
    it('should register UPDATE_HERO with invalid ID', () => {
        action = reduceAction(actionTypes.UPDATE_HERO, {
            id: 25, name: 'gabriel Guapo'
        })
        dispatcher.dispatch(action)
        const updateHero = heroStore.getHeroById(action.data.id);
        expect(updateHero).not.toBeDefined();
    });
    it('should create a new hero', () => {
        const name = 'gabriel';
        action = reduceAction(actionTypes.CREATE_HERO, { name: name })
        dispatcher.dispatch(action);

        const isThere = heroStore.getHeroes().some((hero) => hero.name === name);
        expect(isThere).toEqual(true);
    });


    it('should Delete a hero given an id', () => {
        const id = 14;
        action = reduceAction(actionTypes.DELETE_HERO, { id });
        dispatcher.dispatch(action);
        const isThere = heroStore.getHeroes().some((hero) => hero.id === idToDel);
        expect(isThere).toEqual(false)
    });
    it('should handdle default case for action types', () => {
        try {
            dispatcher.dispatch({ type: 'error' });
            expect(heroStore).toBeFalsy();
        } catch (error) {
            const message = `action type is not handled. action.type: error`;
            expect(error).toEqual(message)

        }
    });
    // it('should invoke change listener callback', () => {


    //     heroStore.addChangeListener(myCallbackMockFunction);
    //     heroStore.emitChange();

    //     const callback = jest.fn();
    //     expect(callback).toHaveBeenCalled();
    //     expect(callback).toHaveBeenCalledTimes(1);
    // });
});
