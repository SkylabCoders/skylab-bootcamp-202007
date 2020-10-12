import axios from "axios";

import { loadSpots } from "../actions/spotActions";

jest.dontMock("../actions/spotActions.js");
jest.mock("../dispatcher.js");
jest.mock("axios");

describe("Spot Action test", () => {
  afterEach(() => {
    axios.mockClear();
  });
  it("should load Spots", async () => {
    axios.post.mockReturnValue(
      new Promise((resolve) =>
        resolve({ data: { message: { message: "myMessage" } } })
      )
    );
    await loadSpots();
    expect(axios.post.mock.calls[0][0]).toEqual(
      "http://192.168.0.11:4200/api/spots"
    );
  });
});
