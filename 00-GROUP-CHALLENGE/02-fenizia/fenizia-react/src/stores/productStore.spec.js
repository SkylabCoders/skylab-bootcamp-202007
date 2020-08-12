import productStore from "./productStore";
import actionTypes from "../actions/actionTypes";
import dispatcher from "../appDispatcher";

function reduceAction(action, data) {
  return {
    type: action,
    data,
  };
}

describe("productStore", () => {
  let action;
  let myCallbackMockFunction;

  beforeEach(() => {
    myCallbackMockFunction = jest.fn();
		productStore.addChangeListener(myCallbackMockFunction);
    
    action = reduceAction(actionTypes.LOAD_PRODUCTS, {
      id: 2, product: { price: 17 } },
    );
    dispatcher.dispatch(action);
  });

  afterEach(() => {
		productStore.removeChangeListener(myCallbackMockFunction);
	});

  it("should create", () => {
    expect(productStore).toBeDefined();
  });

  // it('should handle default case for action types', () => {
	// 	// try {
	// 	// 	dispatcher.dispatch({});
	// 	// 	expect(productStore).toBeFalsy();
	// 	// } catch (errorMessage) {
	// 	// 	const message = `The action type is unknown. action.type: undefined`;
	// 	// 	expect(errorMessage).toEqual(message);
	// 	}
	// });
});
