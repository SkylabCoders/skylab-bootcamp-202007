import { loadPortfolioFlowByUserId, loadProjectsByUserId } from './portfolioActions';
import ACTION_TYPES from './ACTION_TYPES';

describe('PORTFOLIO ACTIONS - REDUX - Test set', () => {

  describe('LOAD PORTFOLIO FLOW BY USER ID method test set', () => {

    it('test', async () => {
      const USER_ID = '5f4faca78b141a231040efad';
      const expectedDispatchFirstCall = { type: ACTION_TYPES.API.BEGIN_API_CALL };
      const expectedDispatchSecondCall = { type: ACTION_TYPES.PORTFOLIO.LOAD_PORTFOLIO_FLOW_SUCCESS };
      const expectedDispatchThirdCall = {
        type: ACTION_TYPES.PORTFOLIO.LOAD_PORTFOLIO_FLOW,
        payload: { data: 'stuff' }
      }

      const dispatch = jest.fn();
      const returnedFunction = loadPortfolioFlowByUserId(USER_ID);
      await returnedFunction(dispatch);

      expect(dispatch.mock.calls[0][0]).toEqual(expectedDispatchFirstCall);
      expect(dispatch.mock.calls[1][0]).toEqual(expectedDispatchSecondCall);
      expect(dispatch.mock.calls[2][0].type).toBe(expectedDispatchThirdCall.type);
    })

  })

  describe('LOAD PROJECTS BY PORTFOLIO ID method test set', () => {

    it('test', async () => {
      const USER_ID = '5f4faca78b141a231040efad';
      const expectedDispatchFirstCall = { type: ACTION_TYPES.API.BEGIN_API_CALL };
      const expectedDispatchSecondCall = { type: ACTION_TYPES.PORTFOLIO.LOAD_PORTFOLIO_INFO_SUCCESS };
      const expectedDispatchThirdCall = {
        type: ACTION_TYPES.PORTFOLIO.LOAD_PORTFOLIO_INFO,
        payload: { data: 'stuff' }
      }

      const dispatch = jest.fn();
      const returnedFunction = loadProjectsByUserId(USER_ID);
      await returnedFunction(dispatch);

      expect(dispatch.mock.calls[0][0]).toEqual(expectedDispatchFirstCall);
      expect(dispatch.mock.calls[1][0]).toEqual(expectedDispatchSecondCall);
      expect(dispatch.mock.calls[2][0].type).toBe(expectedDispatchThirdCall.type);
    })

  })

})