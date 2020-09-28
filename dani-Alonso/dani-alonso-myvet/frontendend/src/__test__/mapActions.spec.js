import dispatcher from "../../dispatcher";
import axios from "axios";
import actionTypes from "../actions/actionTypes";
import { loadVets } from "../actions/mapActions";

jest.dontMock("../actions/mapActions");
jest.mock("../../dispatcher");
jest.mock("axios");

describe("map actions", () => {
  afterEach(() => {
    dispatcher.dispatch.mockClear();
  });

  it("should call vet api route GET method", async () => {
    axios.get.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
    await loadVets();
    expect(axios.get.mock.calls[0][0]).toEqual(
      "http://192.168.8.100:4200/api/vet"
    );
  });

  it("should call dispatch with data", async () => {
    axios.get.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
    await loadVets();
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOAD_VETS,
      data: {},
    });
  });

  xit("should throw error", async () => {
    axios.get.mockReturnValue(
      new Promise((resolve) => resolve(throwError("erroooor")))
    );
    await loadVets();
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOAD_VETS,
      data: {},
    });
  });
});
