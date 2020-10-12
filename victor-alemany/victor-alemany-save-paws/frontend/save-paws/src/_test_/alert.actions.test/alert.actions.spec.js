import dispatcher from '../../dispatcher/dispatcher';
import {loadAlerts,loadAlertById,foundAlert, followAlert, updateAlertComments, createAlert}  from '../../actions/alert.actions';
import Axios from 'axios';

jest.dontMock('../../actions/alert.actions');
jest.mock('axios');
jest.mock('../../dispatcher/dispatcher');

describe('alert actions suite',()=>{
   
    afterEach(()=>{
        Axios.get.mockClear();
        Axios.put.mockClear();
        Axios.post.mockClear();
        dispatcher.dispatch.mockClear();
    })
   
    it('Should call alerts api route',async ()=>{
        Axios.get.mockReturnValue(new Promise((resolve)=> resolve({data:{}})));
        await loadAlerts();
        expect(Axios.get.mock.calls[0][0]).toEqual('/api/alerts');
    }) 
    
   it('Should call dispatch with data',async ()=>{
        Axios.get.mockReturnValue(new Promise((resolve)=> resolve({data:{}})));
        await loadAlerts();
        expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
            type: 'LOAD_ALERTS',
            data: {}
        });
    })

    it('Should call alert api route with id',async ()=>{
        Axios.get.mockReturnValue(new Promise((resolve)=> resolve({data:{id:1}})));
        await loadAlertById(1);
        expect(Axios.get.mock.calls[0][0]).toEqual('/api/alerts/1');
    }) 

    it('Should call dispatch with data of alert by id',async ()=>{
        Axios.get.mockReturnValue(new Promise((resolve)=> resolve({data:{id:1}})));
        await loadAlertById(1);
        expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
            type: 'LOAD_ALERT_BYID',
            data: {id:1}
        });
    })

    it('Should call alert found property by id api route',async ()=>{
        Axios.put.mockReturnValue(new Promise((resolve)=> resolve({data:{id:1, active:true}})));
        await foundAlert(1);
        expect(Axios.put.mock.calls[0][0]).toEqual('/api/alerts/1');
    }) 

    it('Should returns true if active is true',async ()=>{
        Axios.put.mockReturnValue(new Promise((resolve)=> resolve({data:{id: '1',active:true}})));
        await foundAlert(1);
        expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
            type: 'CLOSE_ALERT',
            data: {id:'1',active:true}
        });
    })

    it('Should returns false if active is false',async ()=>{
        Axios.put.mockReturnValue(new Promise((resolve)=> resolve({data:{id: '1',active:false}})));
        await foundAlert(1);
        expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
            type: 'CLOSE_ALERT',
            data: {id:'1',active:false}
        });
    })

    it('Should call alert by id api route',async ()=>{
        Axios.put.mockReturnValue(new Promise((resolve)=> resolve({data:{id:1, followed:[]}})));
        await followAlert(1);
        expect(Axios.put.mock.calls[0][0]).toEqual('/api/alerts/1');
    }) 

    it('Should returns an object by id added to followed property',async ()=>{
        Axios.put.mockReturnValue(new Promise((resolve)=> resolve({data:{id: 1, followed:[1]}})));
        await followAlert(1);
        expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
            type: 'FOLLOW_ALERT',
            data: {id:1, followed:[1]}
        });
    })

    it('Should add new comments on property comments by alert id',async ()=>{
        Axios.put.mockReturnValue(new Promise((resolve)=> resolve({data:{id:1}})));
        await updateAlertComments(1,'test');
        expect(Axios.put.mock.calls[0][0]).toEqual('/api/alerts/1');
    }) 

    it('Should returns an object with active property disable',async ()=>{
        Axios.put.mockReturnValue(new Promise((resolve)=> resolve({data:{id: '1',comments:'prueba'}})));
        await updateAlertComments(1,'test');
        expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
            type: 'UPDATE_COMMENTS_ALERT',
            data: {id:'1',comments:'prueba'}
        });
    })

    it('Should call create alert api route',async ()=>{
        Axios.post.mockReturnValue(new Promise((resolve)=> resolve({data:{id:1}})));
        await createAlert('prueba','prueba','prueba','prueba','prueba','prueba','prueba','prueba','prueba','prueba',1,true);
        expect(Axios.post.mock.calls[0][0]).toEqual('/api/alerts/newalert');
    }) 
    
   it('Should call dispatch with created user data',async ()=>{
        Axios.post.mockReturnValue(new Promise((resolve)=> resolve({data:{name:'prueba',lastname:'prueba',email:'prueba',address:'prueba',phone:'prueba',city:'prueba',_id:1}})));
        await createAlert('prueba','prueba','prueba','prueba','prueba','prueba','prueba','prueba','prueba','prueba',1,true);
        expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
            type: 'CREATE_ALERT',
            data: {name:'prueba',lastname:'prueba',email:'prueba',address:'prueba',phone:'prueba',city:'prueba',_id:1}
        });
    })

    it('Should call dispatch with created user data',async ()=>{
        Axios.post.mockReturnValue(new Promise((resolve)=> resolve({data:{name:'prueba',lastname:'prueba',email:'prueba',address:'prueba',phone:'prueba',city:'prueba',_id:1}})));
        await createAlert('prueba','','prueba','prueba','prueba','prueba','prueba','prueba','prueba','prueba',1,true);
        expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
            type: 'CREATE_ALERT',
            data: {name:'prueba',lastname:'prueba',email:'prueba',address:'prueba',phone:'prueba',city:'prueba',_id:1}
        });
    })

    
})