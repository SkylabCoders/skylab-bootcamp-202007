import axios from "axios";

import {
  loadFeed,
  loadAinguraById,
  createAingura,
  validateGeoLocation,
  validateReachAingura,
} from "../actions/feedActions";

jest.dontMock("../actions/feedActions");
jest.mock("../../Dispatcher");
jest.mock("axios");

describe("Feed action test", () => {
  beforeEach(() => {});
  afterEach(() => {
    axios.mockClear();
  });
  it("should upload feed from db", async () => {
    axios.post.mockReturnValue(
      new Promise((resolve) => resolve({ data: { message: { message: "A" } } }))
    );
    await loadFeed();
    expect(axios.post.mock.calls[0][0]).toEqual(
      "http://192.168.0.35:4200/api/updatefeed"
    );
  });

  it("should thorw an error if data could not have been retrieved", async () => {
    axios.post.mockReturnValue(new Promise((reject) => reject(undefined)));
    await loadFeed();
    expect(axios.post.mock.calls[0][0]).toEqual(
      "http://192.168.0.35:4200/api/updatefeed"
    );
  });
  it("should create a new aingura", async () => {
    axios.post.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
    await createAingura();
    expect(axios.post.mock.calls[0][0]).toEqual(
      "http://192.168.0.35:4200/api/updatefeed"
    );
  });

  it("should call to geovalidation endpoint", async () => {
    axios.post.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
    await validateGeoLocation();
    expect(axios.post.mock.calls[0][0]).toEqual(
      "http://192.168.0.35:4200/api/updatefeed"
    );
  });

  it("should call to a aingura endpoint", async () => {
    axios.post.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
    await validateReachAingura();
    expect(axios.post.mock.calls[0][0]).toEqual(
      "http://192.168.0.35:4200/api/updatefeed"
    );
  });

  it("should call for a aingura by its id", async () => {
    axios.post.mockReturnValue(
      new Promise((resolve) => resolve({ data: { name: "someData" } }))
    );
    const id = 1;
    await loadAinguraById(id);
    expect(axios.post.mock.calls[0][0]).toEqual(
      "http://192.168.0.35:4200/api/updatefeed"
    );
  });
});
