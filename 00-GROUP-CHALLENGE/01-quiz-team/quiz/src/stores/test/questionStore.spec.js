import actionTypes from './../../actions/actionTypes'
import dispatcher from './../../dispatcher';
import questionStore from '../questionStore';
import QUESTIONS_SESSION from './../../mockdata/QUESTION_SESSION'

describe('questionStore',()=>{
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
        questionStore.addChangeListener(myCallbackMockFunction);

        action = reduceAction(actionTypes.GET_QUESTION, [{
            
            data: QUESTIONS_SESSION
        }]);
        
        dispatcher.dispatch(action);
    })

    afterEach(()=>{
        questionStore.removeChangeListener(myCallbackMockFunction);
    })

    it('should create',() =>{
        expect(questionStore).toBeDefined();
    })

    fit('should register a question', () => {
        const request = questionStore.getQuestion();
        dispatcher.dispatch(action)
        console.log(request)
        expect(request).toEqual(action.data);
    });
  

})


