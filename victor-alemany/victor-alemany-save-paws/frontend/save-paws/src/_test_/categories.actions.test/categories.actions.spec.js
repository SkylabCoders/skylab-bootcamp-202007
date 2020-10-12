import dispatcher from '../../dispatcher/dispatcher';
import { loadCategories}  from '../../actions/categories.actions';
import Axios from 'axios';

jest.dontMock('../../actions/categories.actions');
jest.mock('axios');
jest.mock('../../dispatcher/dispatcher');

describe('categories actions suite',()=>{
   
    afterEach(()=>{
        Axios.get.mockClear();
        dispatcher.dispatch.mockClear();
    })
   
    it('Should call load user api route',async ()=>{
        Axios.get.mockReturnValue(new Promise((resolve)=> resolve({data:{}})));
        await loadCategories();
        expect(Axios.get.mock.calls[0][0]).toEqual('/api/categories');
    }) 
    
   it('Should call dispatch with loaded user data',async ()=>{
        Axios.get.mockReturnValue(new Promise((resolve)=> resolve({data:{}})));
        await loadCategories();
        expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
            type: 'LOAD_CATEGORIES',
            data: {}
        });
    })


    
})