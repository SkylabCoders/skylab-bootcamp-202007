import dispatcher from "../../dispatcher";
import axios from "axios";
import {
  login,
  signUp,
  loadUser,
  changePassword,
} from "../actions/authActions";
import actionTypes from "../actions/actionTypes";
jest.dontMock("../actions/authActions.js");
jest.mock("axios");
jest.mock("../../dispatcher.js");

describe("Auth actions test", () => {
  afterEach(() => {
    dispatcher.dispatch.mockClear();
  });

  it("Login - should log a user", async () => {
    axios.post.mockReturnValue(
      new Promise((resolve, reject) => resolve({ data: {} }))
    );
    await login();
    expect(axios.post.mock.calls[0][0]).toEqual(
      "http://192.168.0.34:3000/auth/"
    );
  });

  it("Login - should dispatch the action", async () => {
    const user = { name: "aleix" };
    axios.post.mockReturnValue(
      new Promise((resolve, reject) => resolve({ data: {} }))
    );
    await login(user);
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOGIN,
      data: {},
    });
  });

  it("Login - should throw an error", async () => {
    axios.get.mockReturnValue(
      new Promise((resolve, reject) => resolve(throwError("error")))
    );
    await login();
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOGIN,
      data: {},
    });
  });

  it("Sign up - should create a user", async () => {
    axios.post.mockReturnValue(
      new Promise((resolve, reject) => resolve({ data: {} }))
    );
    await signUp();
    expect(axios.post.mock.calls[0][0]).toEqual(
      "http://192.168.0.34:3000/auth/"
    );
  });

  it("Sign up - should dispatch the action", async () => {
    const user = { name: "aleix" };
    axios.post.mockReturnValue(
      new Promise((resolve, reject) => resolve({ data: {} }))
    );
    await signUp(user);
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.SIGNUP,
      data: {},
    });
  });

  it("Sign up - should throw an error", async () => {
    axios.get.mockReturnValue(
      new Promise((resolve, reject) => resolve(throwError("error")))
    );
    await signUp();
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.SIGNUP,
      data: {},
    });
  });

  it("Load user - should create a user", async () => {
    axios.post.mockReturnValue(
      new Promise((resolve, reject) => resolve({ data: {} }))
    );
    await loadUser();
    expect(axios.post.mock.calls[0][0]).toEqual(
      "http://192.168.0.34:3000/auth/"
    );
  });

  it("Load user - should dispatch the action", async () => {
    const user = { name: "aleix" };
    axios.post.mockReturnValue(
      new Promise((resolve, reject) => resolve({ data: {} }))
    );
    await loadUser(user);
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOAD_USER,
      data: {},
    });
  });

  it("Load user - should throw an error", async () => {
    axios.get.mockReturnValue(
      new Promise((resolve, reject) => resolve(throwError("error")))
    );
    await loadUser();
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOAD_USER,
      data: {},
    });
  });

  it("Change password - should change the user password ", async () => {
    axios.post.mockReturnValue(
      new Promise((resolve, reject) => resolve({ data: {} }))
    );
    await changePassword();
    expect(axios.post.mock.calls[0][0]).toEqual(
      "http://192.168.0.34:3000/auth/"
    );
  });

  it("Change password - should dispatch the action", async () => {
    const user = { name: "aleix" };
    axios.post.mockReturnValue(
      new Promise((resolve, reject) => resolve({ data: {} }))
    );
    await changePassword(user);
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.CHANGE_PASSWORD,
      data: {},
    });
  });

  it("Change password - should throw an error", async () => {
    axios.get.mockReturnValue(
      new Promise((resolve, reject) => resolve(throwError("error")))
    );
    await changePassword();
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.CHANGE_PASSWORD,
      data: {},
    });
  });
});
