import groupStore from '../stores/GroupStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../dispatcher';

describe('Group Store', () => {
    let action;
    let mockCallbackFunction;

    beforeEach(() => {
        mockCallbackFunction = jest.fn();
        groupStore.addChangeListener(mockCallbackFunction);
    })
    afterEach(() => {
        groupStore.removeChangeListener(mockCallbackFunction);
    })

    it('should exist', () => {
        expect(groupStore).toBeDefined();
    });

    it("should load groups", () => {
        action = {
            type: actionTypes.LOAD_GROUPS,
            data: { groupName: 'Walkers'} 
        }

        dispatcher.dispatch(action);
        expect(groupStore.getGroups()).toEqual(action.data);
    });

    it('should update group', () => {
        action = {
            type: actionTypes.UPDATE_GROUP,
            data: { groupName: 'Lobos De Wall Street'} 
        }
        dispatcher.dispatch(action);

        expect(groupStore.getGroup()).toEqual(action.data);
    });

    it('should get group by id', () => {
        action = {
            type: actionTypes.LOAD_GROUPS,
            data: [{ _id: 1, groupName: 'Whish'}, { _id: 2, groupName: 'Whish List'}]
        }
        dispatcher.dispatch(action);

        expect(groupStore.getGroupById(1)).toEqual({ _id: 1, groupName: 'Whish'});
    })

    it('should use the default case when the action type dos not exist', () => {
        action ={
            type: actionTypes.RENAME_GROUP,
            data: { groupName: 'Lobos Street'} 
        }

        dispatcher.dispatch(action);
        expect(groupStore).toBeTruthy();
    })

})