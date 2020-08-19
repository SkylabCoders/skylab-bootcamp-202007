import heroStore from './heroStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../appDispatcher';

//Recibo action y estado y devuelvo un nuevo estado, este concepto se llama reduce
function reduceAction(action, data) {
    return {
        type: action,
        data
    }
}

describe('HeroStore', () => {
let action;
let myCallbackMockFunction;

    beforeEach(() => {
        myCallbackMockFunction = jest.fn();
        heroStore.addChangeListener(myCallbackMockFunction);
        //Metemos por todo la función porque devolvemos directamente type y data solo pasándole parámetros. Está hecha arriba
        action = reduceAction(actionTypes.LOAD_HEROES, [{id: 14, name: 'Celeritas'}])
        dispatcher.dispatch(action);

    });

    afterEach(() => {
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
        action = reduceAction(actionTypes.UPDATE_HERO, {
            id: 14, 
            name: 'Update Celeritas'
        })

        dispatcher.dispatch(action);

        const updateHero = heroStore.getHeroById(action.data.id)
        
        expect(myCallbackMockFunction).toHaveBeenCalled();
        expect(myCallbackMockFunction).toHaveBeenCalledTimes(2);
        expect(updateHero).toEqual(action.data);
    });

    //Vamos a cubrir la E que sale en el test por el else porque no tenemos un else en el código pero aquí sí hay que cubrirlo
    it('should register UPDATE_HERO with invalid ID', () => {
        action = reduceAction(actionTypes.UPDATE_HERO, {id: 25, name: 'Update Celeritas'});
        
        dispatcher.dispatch(action);

        const updateHero = heroStore.getHeroById(action.data.id)
        expect(updateHero).not.toBeDefined();
    });


    it('should create a new hero', () => {
        const name = 'Gilberto';
        action = reduceAction(actionTypes.CREATE_HERO, { name });
        dispatcher.dispatch(action);

        // Solo puedo asegurar que dentro del array de héroes hay al menos un héroe que tiene ese nombre
        const isSavedHero = heroStore
            .getHeroes()
            .some(hero => hero.name === name);

        expect(isSavedHero).toEqual(true)
    })

    it('should delete a hero given and id', () => {
        const deleteId = 14;

        action = reduceAction(actionTypes.DELETE_HERO, {id: deleteId});

        dispatcher.dispatch(action);

        // Busca si está ese id, no está, pues lo ha eliminado bien y es igual a false
        // const isSavedHeroId = heroStore
        //     .getHeroes()
        //     .some(hero => hero.id === deleteId);

        // expect(isSavedHeroId).toEqual(false)

        //Esto es lo mismo que estas líneas anteriores
        expect(heroStore.getHeroById(deleteId)).not.toBeDefined();
    });

    it('should handle default case for action types', () => {
        try {
            dispatcher.dispatch({ type: 'error' });
            expect(heroStore).toBeFalsy();
        } catch (error) {
            const message = `The action type is unknown. action.type: ${action.type}`;
            expect(error).toEqual(message);
        }
    })

    // Callaback de listener en details // En el Store hay por todo emitChange(). Pues declaro la función en el beforeEach
    it('should invoke change listener callback', () => {
        const myCallbackMockFunction = jest.fn();

        // Registro el callback
        heroStore.addChangeListener(myCallbackMockFunction)
    })

});