import authStore from "../stores/authStore";
import dispatcher from "../../Dispatcher";
import actionTypes from "../actions/actionTypes";
import { result } from "lodash";

function reduceAction(action, state) {
  return {
    type: action,
    data: state,
  };
}

describe("Auth Store Test", () => {
  let authStoreCallback;
  let action;

  beforeEach(() => {
    authStoreCallback = jest.fn();
    authStore.addChangeListener(authStoreCallback);
  });
  afterEach(() => {
    authStore.removeAllListeners(authStoreCallback);
  });

  it("Auth store should exist", () => {
    expect(authStore).toBeTruthy();
  });

  it("should return a empty user if no auth action has been called", () => {
    const emptyArray = [];

    expect(authStore.getUser()).toEqual(emptyArray);
  });

  it("should return a user if user has been created succesfully", () => {
    const action = {
      type: actionTypes.CREATE_USER,
      data: { user: { name: "a", token: 1 } },
    };

    dispatcher.dispatch(action);

    expect(authStore.getUser()).toEqual(action.data.user);
  });

  it("should return user info if login has been succesful", () => {
    const action = {
      type: actionTypes.LOGIN_USER,
      data: { user: { name: "a", token: 1 } },
    };

    dispatcher.dispatch(action);

    expect(authStore.getUser()).toEqual(action.data);
  });

  it("it should return a message user exist in db", () => {
    const action = {
      type: actionTypes.USER_EXISTS,
      data: { message: { name: "a", token: 1 } },
    };

    dispatcher.dispatch(action);

    expect(authStore.getResponseMessag()).toEqual(action.data);
  });

  it("it should return a token if a login has been succesful", () => {
    const action = {
      type: actionTypes.CREATE_USER,
      data: { user: { name: "a", token: 1 } },
    };

    dispatcher.dispatch(action);

    expect(authStore.getToken()).toEqual(action.data.user.token);
  });

  it("should delete user's token at logout", () => {
    authStore.logoutUser();
    expect(authStore.getToken()).toEqual(false);
  });
});
