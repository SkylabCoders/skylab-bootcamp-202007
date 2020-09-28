import dispatcher from "../../dispatcher";
import axios from "axios";
import actionTypes from "../actions/actionTypes";
import { createUser, loginUser } from "../actions/authActions";

jest.dontMock("../actions/authActions");
jest.mock("../../dispatcher");
jest.mock("axios");

describe("auth actions", () => {
  afterEach(() => {
    dispatcher.dispatch.mockClear();
  });

  it("should create user", async () => {
    axios.post.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
    await createUser();
    expect(axios.post.mock.calls[0][0]).toEqual(
      "http://192.168.8.100:4200/api/auth/register"
    );
  });

  it("should call dispatch with data", async () => {
    const user = { name: "Dani" };
    axios.post.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
    await createUser(user);
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.CREATE_USER,
      data: {},
    });
  });

  it("should login user", async () => {
    axios.post.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
    await loginUser();
    expect(axios.post.mock.calls[0][0]).toEqual(
      "http://192.168.8.100:4200/api/auth/register"
    );
  });

  it("should call dispatch with data", async () => {
    const user = { name: "Dani" };
    axios.post.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
    await loginUser(user);
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOGIN_USER,
      data: {},
    });
  });

  xit("should throw error login", async () => {
    axios.get.mockReturnValue(
      new Promise((resolve) => resolve(throwError("erroooor")))
    );
    await loginUser();
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOGIN_USER,
      data: {},
    });
  });

  xit("should throw error register", async (newUserParams) => {
    axios.get.mockReturnValue(
      new Promise((resolve) => resolve(throwError("erroooor")))
    );
    await createUser(newUserParams);
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.CREATE_USER,
      data: {},
    });
  });
});
