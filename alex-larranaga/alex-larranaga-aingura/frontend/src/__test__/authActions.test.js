import dispatcher from "../../Dispatcher";
import axios from "axios";

import { createNewUser, loginUser } from "../actions/authActions";

jest.dontMock("../actions/authActions");
jest.mock("../../Dispatcher");
jest.mock("axios");

describe("Auth Action Tests", () => {
  afterEach(() => {
    dispatcher.dispatch.mockClear();
  });
  it("should return user exist message", async () => {
    axios.post.mockReturnValue(
      new Promise((resolve) => resolve({ data: { message: { message: "A" } } }))
    );
    await createNewUser();
    expect(axios.post.mock.calls[0][0]).toEqual(
      "http://192.168.0.35:4200/login/register"
    );
  });

  it("should return user exist message", async () => {
    axios.post.mockReturnValue(
      new Promise((resolve) => resolve({ data: { message: { data: "A" } } }))
    );
    await createNewUser();
    expect(axios.post.mock.calls[0][0]).toEqual(
      "http://192.168.0.35:4200/login/register"
    );
  });

  it("should login user", async () => {
    axios.post.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
    await loginUser();
    expect(axios.post.mock.calls[0][0]).toEqual(
      "http://192.168.0.35:4200/login/register"
    );
  });
});
