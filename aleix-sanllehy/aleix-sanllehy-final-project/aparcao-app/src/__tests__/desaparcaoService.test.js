import { desaparcaoService } from "../services/desaparcaoService";
import { desaparcao } from "../actions/mapActions";

jest.dontMock("../actions/mapActions.js");
jest.mock("axios");
jest.mock("../../dispatcher.js");

describe("Desaparcao service test", () => {
  it("should exist", () => {
    expect(desaparcaoService).toBeDefined;
  });

  it("should be called with params", () => {
    expect(desaparcaoService("location", "user")).toBeCalledOnce;
  });
});
