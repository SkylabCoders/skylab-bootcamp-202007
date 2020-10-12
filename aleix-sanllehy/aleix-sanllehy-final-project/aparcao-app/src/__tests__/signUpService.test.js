import { signUpService } from "../services/signUpService";

jest.dontMock("../actions/carsActions.js");
jest.mock("axios");
jest.mock("../../dispatcher.js");

describe("Sign up service test", () => {
  it("should exist", () => {
    expect(signUpService).toBeDefined;
  });

  it("should be called with params", () => {
    const name = "aleix";
    const email = "aleix@mail.com";
    const password = "1234";
    const _password = "1234";
    expect(signUpService(name, email, password, _password)).toBeCalledOnce;
  });

  it("should send and error message if passwords don't match", () => {
    const name = "aleix";
    const email = "aleix@mail.com";
    const password = "1234";
    const _password = "abcd";
    expect(signUpService(name, email, password, _password)).toBeCalledOnce;
  });

  it("should send and error message if passwords are not sent", () => {
    const name = "aleix";
    const email = "aleix@mail.com";
    const password = undefined;
    const _password = undefined;
    expect(signUpService(name, email, password, _password)).toBeCalledOnce;
  });
});
