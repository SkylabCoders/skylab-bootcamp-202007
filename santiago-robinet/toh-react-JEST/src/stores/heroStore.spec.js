import heroStore from "./heroStore";
import actionTypes from "../actions/actionTypes";
import dispatcher from "../appDispatcher";

function reduceAction(action, data){
    return {
        type: action,
        data
    };
}

describe('HeroStore', () => {

    let action;

    beforeEach(() => {
        const myCallbackMockFunction = jest.fn();
        heroStore.addChangeListener(myCallbackMockFunction);

        action = reduceAction(actionTypes.LOAD_HEROES, [{ id: 14 , name: 'Celeritas' }] )
        dispatcher.dispatch(action);
    })

    afterEach(() => heroStore.removeChangeListener(myCallbackMockFunction))

    it('should create', () => {
        expect(myCallbackMockFunction).toHaveBeenCalled()
        expect(myCallbackMockFunction).toHaveBeenCalledTimes(1)
        expect(heroStore).toBeDefined();
    });

    it('should register LOAD_HEROES', () => {
        expect(heroStore.getHeroes()).toEqual(action.data);
    });


    it('should register UPDATE_HERO', () => {
       action = reduceAction(actionTypes.UPDATE_HERO, { id: 14 , name: 'Updated Celeritas' })
    
        dispatcher.dispatch(action);

        const updateHero = heroStore.getHeroById(action.data.id);
        
        expect(myCallbackMockFunction).toHaveBeenCalled()
        expect(myCallbackMockFunction).toHaveBeenCalledTimes(2)
        
        expect(updateHero).toEqual(action.data);
    });

    it('should register UPDATE_HERO with invalid ID', () => {

        let action = {
            type: actionTypes.LOAD_HEROES,
            data: [{ id: 14 , name: 'Celeritas' }]
        };

        dispatcher.dispatch(action)

        action = {
            type: actionTypes.UPDATE_HERO,
            data: { id: 25 , name: 'Celeritas' }
        };

        dispatcher.dispatch(action);
        const updateHero = heroStore.getHeroById(action.data.id);
        expect(updateHero).not.toBeDefined();
    });

    it('should create a new hero', () => {
        const name = 'Gilbeto'
        
        action = reduceAction(actionTypes.CREATE_HERO, { name } )
        dispatcher.dispatch(action);

        const savedHero = heroStore.getHeroes().some((hero) => hero.name === name)

        expect(savedHero).toEqual(true);
    })

    it('should delete hero', () => {
        const id = 15;
        
        action = reduceAction(actionTypes.DELETE_HERO, { id } )
        dispatcher.dispatch(action);

        const savedHero = heroStore.getHeroes().some((hero) => hero.name === name)

        expect(savedHero).toEqual(false);
    });

    it('should handle default case for action types', () => {
        try{
            dispatcher.dispatch({});
            expect(heroStore).toBeFalsy();
        } catch (errorMessage) {
            const message = `The action type is unknown. action.type: undefined`;
            expect(errorMessage).toEqual(message)
        }
    });

    it('should invoke change listener callback', () => {
        heroStore.emitChange();


        expect(myCallbackMockFunction).toHaveBeenCalled()
        expect(myCallbackMockFunction).toHaveBeenCalledTimes(1)
        
    })



})