import actionTypes from '../../actions/actionTypes'
import dispatcher from './../../dispatcher';
import leaderboardStore from '../leaderboardStore';
import LEADERBOARD from './../../mockdata/Leaderboard'

describe('leaderboardStore',()=>{
    let action;
    let myCallbackMockFunction;

    function reduceAction (actionType, data){
        return {
            type: actionType,
            data
        }
    }

    beforeEach(()=>{
        myCallbackMockFunction = jest.fn();
        leaderboardStore.addChangeListener(myCallbackMockFunction);

        action = reduceAction(actionTypes.GET_LEADERBOARD, [{
            
            data: LEADERBOARD
        }]);
        
        dispatcher.dispatch(action);
    })

    afterEach(()=>{
        leaderboardStore.removeChangeListener(myCallbackMockFunction);
    })

    it('should create leaderboardStore',()=>{
        expect(leaderboardStore).toBeDefined();
    })

    it('should register GET_LEADERBOARD', () => {
        const request = leaderboardStore.getLeaderboard();
        console.log(request)
        expect(request).toEqual(action.data);
    });

})


