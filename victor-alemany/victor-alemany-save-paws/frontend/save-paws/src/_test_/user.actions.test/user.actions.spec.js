import dispatcher from '../../dispatcher/dispatcher';
import { loadUser, updateUser, createUser}  from '../../actions/user.actions';
import Axios from 'axios';

jest.dontMock('../../actions/user.actions');
jest.mock('axios');
jest.mock('../../dispatcher/dispatcher');

describe('user actions suite',()=>{
   
    afterEach(()=>{
        Axios.get.mockClear();
        Axios.put.mockClear();
        Axios.post.mockClear();
        dispatcher.dispatch.mockClear();
    })
   
    it('Should call load user api route',async ()=>{
        Axios.get.mockReturnValue(new Promise((resolve)=> resolve({data:{id: 1}})));
        await loadUser(1);
        expect(Axios.get.mock.calls[0][0]).toEqual('/api/user?id=1');
    }) 
    
   it('Should call dispatch with loaded user data',async ()=>{
        Axios.get.mockReturnValue(new Promise((resolve)=> resolve({data:{id: 1}})));
        await loadUser(1);
        expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
            type: 'LOAD_USER',
            data: {id:1}
        });
    })

    it('Should call update user api route',async ()=>{
        Axios.put.mockReturnValue(new Promise((resolve)=> resolve({data:{id:1}})));
        await updateUser('name','lastname','email','address','phone','city',1);
        expect(Axios.put.mock.calls[0][0]).toEqual('/api/user/1');
    }) 
    
   it('Should call dispatch with data',async ()=>{
        Axios.put.mockReturnValue(new Promise((resolve)=> resolve({data:{name:'prueba',lastname:'prueba',email:'prueba',address:'prueba',phone:'prueba',city:'prueba',_id:1}})));
        await updateUser('prueba','prueba','prueba','prueba','prueba','prueba',1);
        expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
            type: 'UPDATE_USER',
            data: {name:'prueba',lastname:'prueba',email:'prueba',address:'prueba',phone:'prueba',city:'prueba',_id:1}
        });
    })

    it('Should call create user api route',async ()=>{
        Axios.post.mockReturnValue(new Promise((resolve)=> resolve({data:{id:1}})));
        await createUser('name','lastname','email','address','phone','city',1);
        expect(Axios.post.mock.calls[0][0]).toEqual('/api/user/register');
    }) 
    
   it('Should call dispatch with created user data',async ()=>{
        Axios.post.mockReturnValue(new Promise((resolve)=> resolve({data:{name:'prueba',lastname:'prueba',email:'prueba',address:'prueba',phone:'prueba',city:'prueba',_id:1}})));
        await createUser('prueba','prueba','prueba','prueba','prueba','prueba',1);
        expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
            type: 'CREATE_USER',
            data: {name:'prueba',lastname:'prueba',email:'prueba',address:'prueba',phone:'prueba',city:'prueba',_id:1}
        });
    })

    
})