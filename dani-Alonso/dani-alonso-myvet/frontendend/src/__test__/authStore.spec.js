import authStore from "../stores/authStore";
import actionTypes from "../actions/actionTypes";
import dispatcher from "../../dispatcher";

describe("authStore", () => {
  let action;
  let mockCallbackFunction;
  let token;

  beforeEach(() => {
    mockCallbackFunction = jest.fn();
    authStore.addChangeListener(mockCallbackFunction);
  });
  afterEach(() => {
    authStore.removeChangeListener(mockCallbackFunction, callback);
  });
  it("should exist", () => {
    expect(authStore).toBeDefined();
  });

  it("should create user", () => {
    action = {
      type: actionTypes.CREATE_USER,
      data: {
        user: {
          username: "Dani",
          token: "token",
        },
      },
    };
    dispatcher.dispatch(action);
    expect(authStore.getUser()).toEqual(action.data.user);
    expect(authStore.getToken()).toEqual(action.data.user.token);
    expect(authStore.getMessage()).toEqual(null);
  });

  it("should login user", () => {
    action = {
      type: actionTypes.CREATE_USER,
      data: {
        user: {
          username: "Dani",
          token: "token",
        },
      },
    };
    dispatcher.dispatch(action);
    expect(authStore.getUser()).toEqual(action.data.user);
    expect(authStore.getToken()).toEqual(action.data.token);
    expect(authStore.getMessage()).toEqual(null);
  });

  it("should use default", () => {
    action = {
      type: actionTypes.USE_DEFAULT,
      data: {
        default: "default",
      },
    };
    dispatcher.dispatch(action);
    expect(authStore).toBeTruthy();
  });
});
