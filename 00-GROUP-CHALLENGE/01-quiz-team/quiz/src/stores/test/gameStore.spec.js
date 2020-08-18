import gameStore from './../gameStore';
import actionTypes from './../../actions/actionTypes'
import dispatcher from './../../dispatcher';
import THEMES_LIST from './../../mockdata/THEMES_LIST'

describe('gameStore',()=>{
    let action;
    let myCallbackMockFunction;

    function reduceAction (actionType, data){
        return {
            type: actionType,
            data
        }
    }

    beforeEach(()=>{
        myCallbackMockFunction = jest.fn();
        gameStore.addChangeListener(myCallbackMockFunction);

        action = reduceAction(actionTypes.GET_THEMES, {
            data: THEMES_LIST
        });

        dispatcher.dispatch(action);
        
    })

    afterEach(()=>{
        gameStore.removeChangeListener(myCallbackMockFunction);
    })

    it('should create',() =>{
        expect(gameStore).toBeDefined();
    })

    it('should load themes', () => {
        const request = gameStore.getThemes();
        expect(request).toEqual(action.data);
    });

})


