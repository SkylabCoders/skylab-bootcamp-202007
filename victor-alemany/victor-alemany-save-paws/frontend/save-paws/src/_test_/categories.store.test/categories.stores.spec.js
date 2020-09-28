import React from 'react';
import categoriesStore, { getCategories } from '../../stores/categoriesStore';
import dispatcher from '../../dispatcher/dispatcher';
import actionTypes from '../../actions/action.types'


describe('alert store suite',()=>{
    let action;
    let data;
    let mockCallbackFunction;

    beforeEach(()=>{
        data = [{
            kind: 'cat',
            image: 'true'
        },{
            kind: 'dog',
            image: 'true'
        },]

        mockCallbackFunction = jest.fn();
        categoriesStore.addChangeListener(mockCallbackFunction);

        action = reduceAction(actionTypes.LOAD_CATEGORIES, data);
        dispatcher.dispatch(action);
    });

    afterEach(()=>{
        categoriesStore.removeChangeListener(mockCallbackFunction);
    })

    function reduceAction(action,data){
        return {
            type: action,
            data
        }
    }

    it('Should store to be defined',()=>{
        expect(categoriesStore).toBeDefined();
    })

    it('Should calls the mockCallbackFunction', ()=>{
        expect(mockCallbackFunction).toHaveBeenCalled();
        expect(mockCallbackFunction).toHaveBeenCalledTimes(1);
    })

    it('Should returns all list of alerts', ()=>{
        expect(categoriesStore.getCategories()).toEqual(action.data);
    })

    it('Should use default case when the action type doesnt exist', ()=>{
        action = reduceAction('', data);
        dispatcher.dispatch(action);
    })
    
})