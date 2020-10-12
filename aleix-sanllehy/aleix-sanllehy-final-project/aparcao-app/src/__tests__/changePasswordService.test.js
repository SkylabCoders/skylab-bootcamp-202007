import { changePasswordService } from "../services/changePasswordService";
import { changePassword } from "../actions/authActions";

jest.dontMock("../actions/authActions.js");
jest.mock("axios");
jest.mock("../../dispatcher.js");

describe("Change password service test", () => {
  it("should exist", () => {
    expect(changePasswordService).toBeDefined;
  });

  it("should be called with params", () => {
    const password = "1234";
    const newPassword = "abcd";
    const _newPassword = "abcd";

    expect(changePasswordService("user", password, newPassword, _newPassword))
      .toBeCalledOnce;
  });

  it("should send and error message if passwords are not sent", () => {
    const password = undefined;
    const newPassword = undefined;
    const _newPassword = undefined;
    expect(changePasswordService("user", password, newPassword, _newPassword))
      .toBeCalledOnce;
  });

  it("should send and error message if new password and confirm do not match", () => {
    const newPassword = "1234";
    const _newPassword = "abcd";
    expect(changePasswordService("user", "password", newPassword, _newPassword))
      .toBeCalledOnce;
  });
});
