import { createSpotService } from "../services/createSpotService";

jest.dontMock("../actions/mapActions.js");
jest.mock("axios");
jest.mock("../../dispatcher.js");

describe("Create spot test", () => {
  it("should exist", () => {
    expect(createSpotService).toBeDefined;
  });

  it("should be called with params", () => {
    expect(createSpotService("location, user")).toBeCalledOnce;
  });
});
