import { loginService } from "../services/loginService";

jest.dontMock("../actions/authActions.js");
jest.mock("axios");
jest.mock("../../dispatcher.js");

describe("Login service test", () => {
  it("should exist", () => {
    expect(loginService).toBeDefined;
  });

  it("should be called with params", () => {
    expect(loginService("user")).toBeCalledOnce;
  });
});
