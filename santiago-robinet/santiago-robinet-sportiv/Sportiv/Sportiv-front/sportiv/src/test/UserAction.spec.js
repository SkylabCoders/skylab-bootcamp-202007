import { createUser, loadUser } from "../actions/userActions";
import dispatcher from "../dispatcher";
import axios from "axios";
import actionTypes from "../actions/actionTypes";

jest.dontMock("../actions/userActions");
jest.mock("../dispatcher");
jest.mock("axios");

describe("User Actions", () => {
  let userAuth;
  const authid = "215h2ss3355a2";
  afterEach(() => {
    dispatcher.dispatch.mockClear();
  });

  it("should call user api route", async () => {
    userAuth = { email: "something@mail.com", sub: "2313kjkjka12" };
    axios.post.mockReturnValue(
      new Promise((resolve) => resolve({ userName: "ElPepe" }))
    );
    await createUser("firstName", "lastName", "userName", userAuth);
    expect(axios.post.mock.calls[0][0]).toEqual("/api/user");
  });

  it("should call user with data ", async () => {
    userAuth = { email: "something@mail.com", sub: "2313kjkjka12" };
    axios.post.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
    await createUser("firstName", "lastName", "userName", userAuth);
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.CREATE_USER,
      data: {},
    });
  });

  it("should call user api route", async () => {
    axios.get.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
    await loadUser(authid);
    expect(axios.get.mock.calls[0][0]).toEqual("/api/user/215h2ss3355a2");
  });

  it("should load user ", async () => {
    axios.get.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
    await loadUser(authid);
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOAD_USER,
      data: {},
    });
  });
});
