import carsStore from "../stores/carsStore";
import actionTypes from "../actions/actionTypes";
import dispatcher from "../../dispatcher";

describe("Cars store test", () => {
  let action;
  let mockCallbackFunction;

  beforeEach(() => {
    mockCallbackFunction = jest.fn();
    carsStore.addChangeListener(mockCallbackFunction);
  });

  afterEach(() => {
    carsStore.removeChangeListener(mockCallbackFunction);
  });

  it("should exist", () => {
    expect(carsStore).toBeDefined();
  });

  it("should load all makes", () => {
    action = {
      type: actionTypes.LOAD_MAKES,
      data: [{ make: "Audi" }, { make: "BMW" }],
    };
    dispatcher.dispatch(action);
    expect(carsStore.getMakes()).toEqual(action.data);
  });

  it("should load all models given a make", () => {
    action = {
      type: actionTypes.LOAD_MODELS,
      data: [
        { make: "Volkswagen", model: "Golf" },
        { make: "Volkswagen", model: "Polo" },
      ],
    };
    dispatcher.dispatch(action);
    expect(carsStore.getModels()).toEqual(action.data);
  });

  it("should use default case", () => {
    action = {
      type: actionTypes.USE_DEFAULT,
      data: { default: "default" },
    };
    dispatcher.dispatch(action);
    expect(carsStore).toBeTruthy();
  });
});
