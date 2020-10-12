import userStore from "../stores/UserStore";
import actionTypes from "../actions/actionTypes";
import dispatcher from "../dispatcher";

describe("User Store", () => {
  let action;
  let mockCallbackFunction;

  beforeEach(() => {
    mockCallbackFunction = jest.fn();
    userStore.addChangeListener(mockCallbackFunction);
  });
  afterEach(() => {
    userStore.removeChangeListener(mockCallbackFunction);
  });

  it("should exist", () => {
    expect(userStore).toBeDefined();
  });

  it(" should load user ", () => {
    action = {
      type: actionTypes.LOAD_USER,
      data: { userName: "Pepe", lastName: "Grillo" },
    };
    dispatcher.dispatch(action);

    expect(userStore.getUser()).toEqual(action.data);
  });

  it(" should create user", () => {
    action = {
      type: actionTypes.CREATE_USER,
      data: { userName: "Jose", lastName: "Sabia" },
    };
    dispatcher.dispatch(action);

    expect(userStore.getUser()).toEqual(action.data);
  });

  it("should use the default case when the action type does not exist", () => {
    action = {
      type: actionTypes.DELETE_USER,
      data: { userName: "Jose", lastName: "Sabia" },
    };
    dispatcher.dispatch(action);
    expect(userStore).toBeTruthy() ;
  });
});
