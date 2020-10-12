import { loadSpotsService } from "../services/loadSpotsService";

jest.dontMock("../actions/mapActions.js");
jest.mock("axios");
jest.mock("../../dispatcher.js");

describe("Load spots test", () => {
  it("should exist", () => {
    expect(loadSpotsService).toBeDefined;
  });

  it("should be called with params", () => {
    expect(loadSpotsService("user")).toBeCalledOnce;
  });
});
