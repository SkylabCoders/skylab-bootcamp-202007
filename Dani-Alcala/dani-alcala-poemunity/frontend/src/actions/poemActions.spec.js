import dispatcher from "../appDispatcher";
import {
    loadPoems,
    loadPoem,
    savePoem,
    deletePoem,
    likePoem,
    sortByCriteria
} from "./poemActions";
import axios from 'axios'
import actionTypes from "./actionTypes";

jest.dontMock('./poemActions')
jest.mock('axios')
jest.mock('../appDispatcher')

describe('Poem Actions', () => {


    afterEach(() => {
        dispatcher.dispatch.mockClear()
    })

    it('should call poems api route', async () => {
        axios.get.mockReturnValue(new Promise((resolve) => resolve({
            data: {}
        })))
        await loadPoems()
        expect(axios.get.mock.calls[0][0]).toEqual('/api/poems')
    })

    it('should call dispatch with data', async () => {
        axios.get.mockReturnValue(new Promise ((resolve) => resolve({data: {}})))
        await loadPoems();
        expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
            type: 'LOAD_POEMS',
            data: {}
        })
    })
    it('should call dispatch with data', async () => {
        axios.get.mockReturnValue(new Promise ((resolve) => resolve({data: {}})))
        await loadPoem();
        expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
            type: 'LOAD_POEM',
            data: {}
        })
    })

    it('should call post without id)', async () => {
        axios.post.mockReturnValue(new Promise((resolve, reject) => resolve({author:'Dani'})))
        await savePoem({author:'Dani'})
        const postCall = axios.post.mock.calls[0][0]
        expect(postCall).toEqual('/api/poems')
    })

    it('should call post with id)', async () => {
        axios.post.mockReturnValue(new Promise((resolve, reject) => resolve({author:'Dani', id:1})))
        await savePoem({author:'Dani', id:1})
        const postCall = axios.post.mock.calls[0][0]
        expect(postCall).toEqual('/api/poems')
    })

    it('should call delete)', async () => {
        const id = 1;
        axios.delete.mockReturnValue(new Promise((resolve) => resolve(id)))
        await deletePoem(id)
        const postCall = axios.delete.mock.calls.length
        expect(postCall).toEqual(1)
    })


    it('should call delete)', async () => {
        const _id = 1;
        axios.delete.mockReturnValue(new Promise((resolve) => resolve(_id)))
        await deletePoem(_id)
        const dispatchCallback = {
            type: actionTypes.DELETE_POEM,
            data: {_id}
        }
        expect(dispatcher.dispatch.mock.calls[0][0]).toEqual(dispatchCallback)
    })

    it('should call likePoem)', async () => {
        const poemId = '1';
        const userId = '1';

        axios.put.mockReturnValue(new Promise((resolve, reject) => resolve({userId})))
        await likePoem(poemId, userId)
        const putCall = axios.put.mock.calls.length
        expect(putCall).toEqual(1)
    })

    it('should call sortByCriteria)', async () => {
        const criteria = 'likes';
        
        const dispatchCallback = {
            type: actionTypes.SORT_POEMS,
            data: criteria
        }

        sortByCriteria(criteria)

        dispatcher.dispatch.mockReturnValue(dispatchCallback)

        const sortCall = dispatcher.dispatch.mock.calls.length
        expect(sortCall).toEqual(1)
    })
    

})