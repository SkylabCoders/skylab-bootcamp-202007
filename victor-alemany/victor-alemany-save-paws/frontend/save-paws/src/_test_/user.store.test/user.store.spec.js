import React from 'react';
import userStore, { getUser } from '../../stores/userStore';
import dispatcher from '../../dispatcher/dispatcher';
import actionTypes from '../../actions/action.types'


describe('alert store suite',()=>{
    let action;
    let data;
    let mockCallbackFunction;

    beforeEach(()=>{
        data = [{
           user: 'prueba',
           name: 'prueba'
        }]

        mockCallbackFunction = jest.fn();
        userStore.addChangeListener(mockCallbackFunction);

        action = reduceAction(actionTypes.LOAD_USER, data);
        dispatcher.dispatch(action);
    });

    afterEach(()=>{
        userStore.removeChangeListener(mockCallbackFunction);
    })

    function reduceAction(action,data){
        return {
            type: action,
            data
        }
    }

    it('Should store to be defined',()=>{
        expect(userStore).toBeDefined();
    })

    it('Should calls the mockCallbackFunction', ()=>{
        expect(mockCallbackFunction).toHaveBeenCalled();
        expect(mockCallbackFunction).toHaveBeenCalledTimes(1);
    })

    it('Should returns a user', ()=>{
        expect(userStore.getUser()).toEqual(action.data);
    })

    it('Should use default case when the action type doesnt exist', ()=>{
        action = reduceAction('', data);
        dispatcher.dispatch(action);
    })

    it('Should create a user', ()=>{
        action = reduceAction(actionTypes.CREATE_USER);
        dispatcher.dispatch(action);
        expect(userStore).toBe.Truthy;
    })

    it('Should dispatch update user action when is called', ()=>{
        action = reduceAction(actionTypes.UPDATE_USER, data);
        dispatcher.dispatch(action);
    })
    
})