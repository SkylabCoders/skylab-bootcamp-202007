import dispatcher from '../dispatcher';
import axios from 'axios';
import actionTypes from '../actions/actionTypes';
import{ loadGroups, memberJoin } from '../actions/GroupActions';

jest.dontMock('../actions/GroupActions');
jest.mock('../dispatcher');
jest.mock('axios');


describe('Group Action', () => {

    let id = 13;
    let user = {
        _id: '3135152asd5s1s',
        userName: 'Pepelete'
    };

    afterEach(() => {
        dispatcher.dispatch.mockClear();
    });

    it('should call group api route GET method', async () => {
        axios.get.mockReturnValue(new Promise ((resolve) => resolve({ data: {}})));
        await loadGroups();
        expect(axios.get.mock.calls[0][0]).toEqual("/api/groups");
    });

    it("should call dispatch with data", async () => {
        axios.get.mockReturnValue(new Promise ((resolve) => resolve({ data: {}})));
        await loadGroups();
        expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
            type: actionTypes.LOAD_GROUPS,
            data: {}
        });
    });

    it('should call group api route PUT method', async () => {
        axios.put.mockReturnValue(new Promise ((resolve) => resolve({ data: {}})));
        await memberJoin(id , user);
        expect(axios.put.mock.calls[0][0]).toEqual("/api/groups/13");
    });

    it("should call dispatch with data", async () => {
        axios.put.mockReturnValue(new Promise ((resolve) => resolve({ data: {}})));
        await memberJoin(id, user);
        expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
            type: actionTypes.UPDATE_GROUP,
            data: {}
        });
    })

})