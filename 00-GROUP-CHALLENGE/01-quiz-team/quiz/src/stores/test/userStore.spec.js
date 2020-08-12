import userStore from './../userStore';
import actionTypes from '../../actions/actionTypes'
import dispatcher from './../../dispatcher';

let action;
let actionSecondary;
let sessionMockData;
let mockCallback;

function reduceAction (actionType, data){
    return {
        type: actionType,
        data
    }
}

beforeEach(()=>{
    sessionMockData = {
        isLogged: false,
        userProfile: 'me@test.mail'
    }


    mockCallback = jest.fn();
    userStore.addChangeListener(mockCallback);

    action = reduceAction(actionTypes.GET_USER_DATA, [{
        
        data: 'prueba'
    }]);

    actionSecondary = reduceAction(actionTypes.UPDATE_USER_DATA, [{
        
        data: 'prueba'
    }]);
    
    dispatcher.dispatch(action);
    dispatcher.dispatch(actionSecondary);
})

afterEach(()=>{
    userStore.removeChangeListener(mockCallback);
})

describe('userStore',()=>{

    it('should create',() =>{
        expect(userStore).toBeDefined();
    })

})





