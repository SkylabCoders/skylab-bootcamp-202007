import authStore from './../authStore';
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
    authStore.addChangeListener(mockCallback);

    action = reduceAction(actionTypes.LOGIN, [{
        data: 'prueba'
    }]);

    actionSecondary = reduceAction(actionTypes.LOGOUT, [{
        data: 'prueba'
    }]);
    
    dispatcher.dispatch(action);
    dispatcher.dispatch(actionSecondary);
})

afterEach(()=>{
    authStore.removeChangeListener(mockCallback);
})

describe('authStore',()=>{

    it('should create',() =>{
        expect(authStore).toBeDefined();
    })

    it('should get user profile',()=>{
        expect(authStore.getUserProfile()).toBeDefined();
    })

    it('should get if user is loged',()=>{
        expect(authStore.isLogged()).toBeDefined();
    })

})

