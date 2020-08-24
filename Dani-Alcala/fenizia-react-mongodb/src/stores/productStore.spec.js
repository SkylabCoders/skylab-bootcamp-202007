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

    action = reduceAction(actionTypes.LOAD_PRODUCTS, [
      { id: 2, product: { price: 17, novedades: true } },
      { id: 3, product: { price: 19, superventas: true } },
      { id: 4, product: { price: 18, genre: "infantil" } },
    ]);
    dispatcher.dispatch(action);
  });

  afterEach(() => {
    productStore.removeChangeListener(myCallbackMockFunction);
  });

  it("should create", () => {
    expect(productStore).toBeDefined();
    expect(myCallbackMockFunction).toHaveBeenCalled();
    expect(myCallbackMockFunction).toHaveBeenCalledTimes(1);
  });

  // it("get product by ID should be defined", () => {
  //   let id = 3;
  //   expect(productStore.getProductById(id)).toBeDefined();
  // });

  it("get product if criteria === 'todos", () => {
    expect(productStore.getProduct("todos")).toEqual(action.data);
  });

  it("get product if criteria === 'novedades", () => {
    expect(productStore.getProduct("novedades")[0]).toEqual(action.data[0]);
  });

  it("get product if criteria === 'superventas", () => {
    expect(productStore.getProduct("superventas")[0]).toEqual(action.data[1]);
  });

  it("get product if criteria === 'infantil", () => {
    expect(productStore.getProduct("infantil")[0]).toEqual(action.data[2]);
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
