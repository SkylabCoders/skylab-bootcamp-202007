import { findNearest, isPointWithinRadius } from "geolib";
import { destroySpotService } from "../services/destroySpotService";
import { loadSpotsService } from "../services/loadSpotsService";

jest.dontMock("../actions/mapActions.js");
jest.mock("axios");
jest.mock("../../dispatcher.js");

describe("Destroy spot test", () => {
  it("should exist", () => {
    expect(destroySpotService).toBeDefined;
  });

  it("should be called with params", () => {
    expect(destroySpotService("location", "spots", "user")).toBeCalledOnce;
  });
});
