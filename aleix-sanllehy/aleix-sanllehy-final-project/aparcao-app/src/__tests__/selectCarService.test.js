import { selectCarService } from "../services/selectCarService";

jest.dontMock("../actions/carsActions.js");
jest.mock("axios");
jest.mock("../../dispatcher.js");

describe("Select car service test", () => {
  it("should exist", () => {
    expect(selectCarService).toBeDefined;
  });

  it("should be called with params", () => {
    expect(selectCarService("user", "selectedModel")).toBeCalledOnce;
  });
});
