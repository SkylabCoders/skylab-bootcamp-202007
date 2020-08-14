import heroStore from './heroStore'
import actionTypes from '../actions/actionTypes'
import dispatcher from '../appDispatcher';

describe('HeroStore', () => {
    let action;
    let myCallbackMockFunction;

    function reduceAction (action, data){
        return {
            type: action,
            data
        }
    }

    beforeEach(()=>{
        myCallbackMockFunction = jest.fn();
        heroStore.addChangeListener(myCallbackMockFunction);

        action = reduceAction(actionTypes.LOAD_HEROES, [
            
            {id: 14, name: 'Celeritas'}]);
        
        dispatcher.dispatch(action);

    })

    afterEach(()=>{
        heroStore.removeChangeListener(myCallbackMockFunction);
    })
    
    it('should create', () => {
        expect(heroStore).toBeDefined();
        expect(myCallbackMockFunction).toHaveBeenCalled();
        expect(myCallbackMockFunction).toHaveBeenCalledTimes(1);
    });

    it('should register LOAD_HEROES', () => {
        expect(heroStore.getHeroes()).toEqual(action.data);
    });

    it('should register UPDATE_HERO', () => {
        action = reduceAction(actionTypes.UPDATE_HERO,{
            id: 14,
            name: 'Updated Celeritas'
        })

        dispatcher.dispatch(action);
        const updateHero = heroStore.getHeroById(action.data.id)
        expect(updateHero).toEqual(action.data);
    });

    //Vamos a cubrir la E que sale en el test por el else porque no tenemos un else en el código pero aquí sí hay que cubrirlo
    it('should register UPDATE_HERO with invalid ID', () => {
        action = reduceAction(actionTypes.UPDATE_HERO,{
            id: 25,
            name: 'Celeritas'
        })

        dispatcher.dispatch(action);
        const updateHero = heroStore.getHeroById(action.data.id);
        expect(updateHero).not.toBeDefined();
    });

    

    it('should create a new hero', () => {
        const name = 'Gilberto';
        action = reduceAction(actionTypes.CREATE_HERO, {name});
        dispatcher.dispatch(action);


        const isSavedHero = heroStore
                                    .getHeroes()
                                    .some(hero => hero.name === name);

    expect(isSavedHero).toEqual(true);

    });

    it('should create a new where there is an ID lower than 0', () => {
        
        action = reduceAction(actionTypes.CREATE_HERO, 
            {id: -1,
            name: 'prueba'});
        dispatcher.dispatch(action);

        const isUndefinedHero = heroStore
                                        .getHeroes()
                                        .some(hero => hero.name === name);

    expect(isUndefinedHero).toEqual(false);

    });

    it('should delete a hero by id', () => {
       const id = 14;
        action = reduceAction(actionTypes.DELETE_HERO, {
            id
        });
        dispatcher.dispatch(action);
        const isDeletedHero = heroStore.getHeroById(id);
                                    
    expect(isDeletedHero).not.toBeDefined();

    });

    it('should handle default case for action types', ()=>{
       try{
        dispatcher.dispatch({});
        expect(heroStore).toBeFalsy();
       }catch(errorMessage){
           const message = `The action type is not unknown: undefined`;
            expect(errorMessage).toEqual(message);
       }
    });

});