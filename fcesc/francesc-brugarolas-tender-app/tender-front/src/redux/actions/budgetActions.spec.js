import { loadBudgetById, updateOrCreateBudget, deleteBudgetOptimistic, loadQuotationsByBudgetId } from './budgetActions';
import ACTION_TYPES from './ACTION_TYPES';

describe('API STATUS ACTIONS - REDUX - Test set', () => {

  describe('LOAD BUDGET BY BUDGET ID method test set', () => {

    it('test', async () => {
      const BUDGET_ID = '5f5692eec76df948689ed9ba';
      const expectedDispatchFirstCall = { type: ACTION_TYPES.API.BEGIN_API_CALL };
      const expectedDispatchSecondCall = { type: ACTION_TYPES.BUDGET.LOAD_BUDGET_SUCCESS };
      const expectedDispatchThirdCall = {
        type: ACTION_TYPES.BUDGET.LOAD_BUDGET,
        payload: { data: 'stuff' }
      }

      const dispatch = jest.fn();
      const returnedFunction = loadBudgetById(BUDGET_ID);
      await returnedFunction(dispatch);

      expect(dispatch.mock.calls[0][0]).toEqual(expectedDispatchFirstCall);
      expect(dispatch.mock.calls[1][0]).toEqual(expectedDispatchSecondCall);
      expect(dispatch.mock.calls[2][0].type).toBe(expectedDispatchThirdCall.type);
    })

  })

  describe('LOAD QUOTATIONS BY BUDGET ID method test set', () => {

    it('test', async () => {
      const BUDGET_ID = '5f5692eec76df948689ed9ba';
      const expectedDispatchFirstCall = { type: ACTION_TYPES.API.BEGIN_API_CALL };
      const expectedDispatchSecondCall = { type: ACTION_TYPES.BUDGET.LOAD_BUDGET_INFO_SUCCESS };
      const expectedDispatchThirdCall = {
        type: ACTION_TYPES.BUDGET.LOAD_BUDGET_INFO,
        payload: { data: 'stuff' }
      }

      const dispatch = jest.fn();
      const returnedFunction = loadQuotationsByBudgetId(BUDGET_ID);
      await returnedFunction(dispatch);

      expect(dispatch.mock.calls[0][0]).toEqual(expectedDispatchFirstCall);
      expect(dispatch.mock.calls[1][0]).toEqual(expectedDispatchSecondCall);
      expect(dispatch.mock.calls[2][0].type).toBe(expectedDispatchThirdCall.type);
    })

  })

  describe('UPDATE BUDGET method test set', () => {

    it('test update', async () => {
      const BUDGET = { _id: '5f5692eec76df948689ed9ba', data: 'stuff' };
      const expectedDispatchFirstCall = { type: ACTION_TYPES.API.BEGIN_API_CALL };
      const expectedDispatchSecondCall = { type: ACTION_TYPES.BUDGET.UPDATE_BUDGET_SUCCESS };
      const expectedDispatchThirdCall = {
        type: ACTION_TYPES.BUDGET.UPDATE_BUDGET,
        payload: { data: 'stuff' }
      }

      const dispatch = jest.fn();
      const returnedFunction = updateOrCreateBudget(BUDGET);
      await returnedFunction(dispatch);

      expect(dispatch.mock.calls[0][0]).toEqual(expectedDispatchFirstCall);
      expect(dispatch.mock.calls[1][0]).toEqual(expectedDispatchSecondCall);
      expect(dispatch.mock.calls[2][0].type).toBe(expectedDispatchThirdCall.type);
    })

  })

  describe('UPDATE BUDGET method test set', () => {

    xit('test create', async () => {
      const BUDGET = { id_: '___new_budget_mock_id___', data: 'stuff' };

      const expectedDispatchFirstCall = { type: ACTION_TYPES.API.BEGIN_API_CALL };
      const expectedDispatchSecondCall = { type: ACTION_TYPES.BUDGET.CREATE_BUDGET_SUCCESS };
      const expectedDispatchThirdCall = {
        type: ACTION_TYPES.BUDGET.CREATE_BUDGET,
        payload: { data: 'stuff' }
      }

      const dispatch = jest.fn();
      const returnedFunction = updateOrCreateBudget(BUDGET);
      await returnedFunction(dispatch);

      expect(dispatch.mock.calls[0][0]).toEqual(expectedDispatchFirstCall);
      expect(dispatch.mock.calls[1][0]).toEqual(expectedDispatchSecondCall);
      expect(dispatch.mock.calls[2][0].type).toBe(expectedDispatchThirdCall.type);
    })

  })

  describe('DELETE BUDGET OPTIMISTIC method test set', () => {

    it('Should return an action type of ERROR_API_CALL when method apiCallError is called', () => {
      const expectedDispatchFirstCall = { type: ACTION_TYPES.BUDGET.DELETE_BUDGET };
      const BUDGET_ID = '5f5692eec76df948689ed9ba';
  
      const dispatch = jest.fn();
      deleteBudgetOptimistic(BUDGET_ID)(dispatch);
  
      expect(dispatch.mock.calls[0][0]).toEqual(expectedDispatchFirstCall);
    });

  })

})