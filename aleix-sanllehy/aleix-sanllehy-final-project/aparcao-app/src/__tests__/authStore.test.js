import authStore from "../stores/authStore";
import actionTypes from "../actions/actionTypes";
import dispatcher from "../../dispatcher";

describe("Auth store test", () => {
  let action;
  let mockCallbackFunction;

  beforeEach(() => {
    mockCallbackFunction = jest.fn();
    authStore.addChangeListener(mockCallbackFunction);
  });

  afterEach(() => {
    authStore.removeChangeListener(mockCallbackFunction);
  });

  it("should exist", () => {
    expect(authStore).toBeDefined();
  });

  it("should void token value", () => {
    token = undefined;
    expect(authStore.logout()).toEqual(token);
  });

  it("should emit a user upon login", () => {
    action = {
      type: actionTypes.LOGIN,
      data: { user: "aleix" },
    };
    dispatcher.dispatch(action);
    expect(authStore.getUser()).toEqual(action.data.user);
    expect(authStore.getMessage()).toEqual(null);
    expect(authStore.getToken()).toEqual(action.data.user.token);
  });

  it("should emit a user upon signup", () => {
    action = {
      type: actionTypes.SIGNUP,
      data: { user: "aleix" },
    };
    dispatcher.dispatch(action);
    expect(authStore.getUser()).toEqual(action.data.user);
    expect(authStore.getMessage()).toEqual(null);
    expect(authStore.getToken()).toEqual(action.data.token);
  });

  it("should emit a user upon car select", () => {
    action = {
      type: actionTypes.SELECT_CAR,
      data: { user: undefined },
    };
    dispatcher.dispatch(action);
    expect(authStore.getUser()).toEqual(action.data.user);
    expect(authStore.getMessage()).toEqual(null);
    expect(authStore.getToken()).toEqual(action.data.token);
  });

  it("should emit a user upon user load", () => {
    action = {
      type: actionTypes.LOAD_USER,
      data: { user: "aleix" },
    };
    dispatcher.dispatch(action);
    expect(authStore.getUser()).toEqual(action.data);
  });

  it("should emit a user upon password change", () => {
    action = {
      type: actionTypes.CHANGE_PASSWORD,
      data: { user: "aleix" },
    };
    dispatcher.dispatch(action);

    expect(authStore.getMessage()).toEqual(null);
  });

  it("should use default case", () => {
    action = {
      type: actionTypes.USE_DEFAULT,
      data: { default: "default" },
    };
    dispatcher.dispatch(action);
    expect(authStore).toBeTruthy();
  });
});
