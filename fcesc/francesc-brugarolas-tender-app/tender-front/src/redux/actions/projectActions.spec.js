import { loadProjectBySlug, saveProject, deleteProject, loadProjectFlowByUserId, loadBudgetsByProjectId } from './projectActions';
import ACTION_TYPES from './ACTION_TYPES';

describe('PROJECT ACTIONS - REDUX - Test set', () => {

  describe('LOAD PROJECTS BY SLUG method test set', () => {

    it('test', async () => {
      const SLUG = 'house-spanish-wells-bahamas';
      const expectedDispatchFirstCall = { type: ACTION_TYPES.API.BEGIN_API_CALL };
      const expectedDispatchSecondCall = { type: ACTION_TYPES.PROJECT.LOAD_PROJECT_BYSLUG_SUCCESS };
      const expectedDispatchThirdCall = {
        type: ACTION_TYPES.PROJECT.LOAD_PROJECT_BYSLUG,
        payload: { data: 'stuff' }
      }

      const dispatch = jest.fn();
      const returnedFunction = loadProjectBySlug(SLUG);
      await returnedFunction(dispatch);

      expect(dispatch.mock.calls[0][0]).toEqual(expectedDispatchFirstCall);
      expect(dispatch.mock.calls[1][0]).toEqual(expectedDispatchSecondCall);
      expect(dispatch.mock.calls[2][0].type).toBe(expectedDispatchThirdCall.type);
    })
    
  })

  describe('SAVE PROJECT method test set', () => {

    xit('test', async () => {
      const PROJECT = { name: 'dummy project', slug: 'house-spanish-wells-bahamas' };
      const expectedDispatchFirstCall = { type: ACTION_TYPES.API.BEGIN_API_CALL };
      const expectedDispatchSecondCall = { type: ACTION_TYPES.PROJECT.UPDATE_PROJECT_BYSLUG_SUCCESS };
      const expectedDispatchThirdCall = {
        type: ACTION_TYPES.PROJECT.UPDATE_PROJECT_BYSLUG,
        payload: { data: 'stuff' }
      }

      const dispatch = jest.fn();
      const returnedFunction = saveProject(PROJECT);
      await returnedFunction(dispatch);

      expect(dispatch.mock.calls[0][0]).toEqual(expectedDispatchFirstCall);
      expect(dispatch.mock.calls[1][0]).toEqual(expectedDispatchSecondCall);
      expect(dispatch.mock.calls[2][0].type).toBe(expectedDispatchThirdCall.type);
    })

  })

  describe('LOAD PROJECT FLOW BY USER ID method test set', () => {

    it('test', async () => {
      const USER_ID = '5f4faca78b141a231040efad';
      const expectedDispatchFirstCall = { type: ACTION_TYPES.API.BEGIN_API_CALL };
      const expectedDispatchSecondCall = { type: ACTION_TYPES.PROJECT.LOAD_PROJECT_FLOW_SUCCESS };
      const expectedDispatchThirdCall = {
        type: ACTION_TYPES.PROJECT.LOAD_PROJECT_FLOW,
        payload: { data: 'stuff' }
      }

      const dispatch = jest.fn();
      const returnedFunction = loadProjectFlowByUserId(USER_ID);
      await returnedFunction(dispatch);

      expect(dispatch.mock.calls[0][0]).toEqual(expectedDispatchFirstCall);
      expect(dispatch.mock.calls[1][0]).toEqual(expectedDispatchSecondCall);
      expect(dispatch.mock.calls[2][0].type).toBe(expectedDispatchThirdCall.type);
    })

  })

  describe('LOAD BUDGETS BY PROJECT ID method test set', () => {

    it('test', async () => {
      const USER_ID = '5f58e82a91c33d3f4808481e';
      const expectedDispatchFirstCall = { type: ACTION_TYPES.API.BEGIN_API_CALL };
      const expectedDispatchSecondCall = { type: ACTION_TYPES.PROJECT.LOAD_PROJECT_INFO_SUCCESS };
      const expectedDispatchThirdCall = {
        type: ACTION_TYPES.PROJECT.LOAD_PROJECT_INFO,
        payload: { data: 'stuff' }
      }

      const dispatch = jest.fn();
      const returnedFunction = loadBudgetsByProjectId(USER_ID);
      await returnedFunction(dispatch);

      expect(dispatch.mock.calls[0][0]).toEqual(expectedDispatchFirstCall);
      expect(dispatch.mock.calls[1][0]).toEqual(expectedDispatchSecondCall);
      expect(dispatch.mock.calls[2][0].type).toBe(expectedDispatchThirdCall.type);
    })

  })

})