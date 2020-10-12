import React from 'react';
import alertStore from '../../stores/alertStore';
import dispatcher from '../../dispatcher/dispatcher';
import actionTypes from '../../actions/action.types'


describe('alert store suite',()=>{
    let action;
    let data;
    let mockCallbackFunction;

    beforeEach(()=>{
        data = [{
            _id: 1,
            animal: 'cat',
            active: true,
            created: 1,
            followed:[1] 
        },{
            _id: 2,
            animal: 'cat',
            active: true,
            created: 2,
            followed:[2]
        },]

        mockCallbackFunction = jest.fn();
        alertStore.addChangeListener(mockCallbackFunction);

        action = reduceAction(actionTypes.LOAD_ALERTS, data);
        dispatcher.dispatch(action);
    });

    afterEach(()=>{
        alertStore.removeChangeListener(mockCallbackFunction);
    })

    function reduceAction(action,data){
        return {
            type: action,
            data
        }
    }

    it('Should store to be defined',()=>{
        expect(alertStore).toBeDefined();
    })

    it('Should calls the mockCallbackFunction', ()=>{
        expect(mockCallbackFunction).toHaveBeenCalled();
        expect(mockCallbackFunction).toHaveBeenCalledTimes(1);
    })

    it('Should returns all list of alerts', ()=>{
        expect(alertStore.getAlerts()).toEqual(action.data);
    })

    it('Should returns only the alert with id = 1', ()=>{
        action = reduceAction(actionTypes.LOAD_ALERT_BYID, data);
        dispatcher.dispatch(action);
        expect(alertStore.getAlertById(1)).toEqual(action.data);
    })

    it('Should doesnt return an alert when the id is wrong', ()=>{
        action = reduceAction(actionTypes.LOAD_ALERT_BYID, data);
        dispatcher.dispatch(action);
        expect(alertStore.getAlertById(2)).not.toEqual(action.data[0]);
    })

    it('Should use default case when the action type doesnt exist', ()=>{
        action = reduceAction('', data);
        dispatcher.dispatch(action);
    })

    it('Should returns all list of alerts filtered by active', ()=>{
        expect(alertStore.getAlertsFiltered()).toEqual(action.data);
    })

    it('Should returns all list of alerts filtered by category', ()=>{
        expect(alertStore.getAlertsByCategories('cat')).toEqual(action.data);
    })

    it('Should returns all list of alerts filtered by user', ()=>{
        expect(alertStore.getAlertsFilteredByUser(1)).toEqual([action.data[0]]);
    })

    it('Should returns all list of alerts filtered by followed', ()=>{
        expect(alertStore.getAlertsFilteredByFollow(1)).toEqual([action.data[0]]);
    })

    it('Should dispatch when Close alert action is loaded', ()=>{
        action = reduceAction(actionTypes.CLOSE_ALERT, '');
        dispatcher.dispatch(action);
    })

    it('Should dispatch when follow alert action is loaded', ()=>{
        action = reduceAction(actionTypes.FOLLOW_ALERT, data);
        dispatcher.dispatch(action);
    })

    it('Should dispatch when update comments alert action is loaded', ()=>{
        action = reduceAction(actionTypes.UPDATE_COMMENTS_ALERT, data);
        dispatcher.dispatch(action);
    })
    
})