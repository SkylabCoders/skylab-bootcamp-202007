import { aparcaoService } from "../services/aparcaoService";
import { aparcao } from "../actions/mapActions";

jest.dontMock("../actions/mapActions.js");
jest.mock("axios");
jest.mock("../../dispatcher.js");

describe("Aparcao service test", () => {
  it("should exist", () => {
    expect(aparcaoService).toBeDefined;
  });

  it("should be called with params", () => {
    expect(aparcaoService("location", "user")).toBeCalledOnce;
  });
});
