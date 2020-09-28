import dispatcher from "../../dispatcher";
import axios from "axios";
import actionTypes from "../actions/actionTypes";
import { detailVets } from "../actions/detailActions";

jest.dontMock("../actions/detailActions");
jest.mock("../../dispatcher");
jest.mock("axios");

describe("detail actions", () => {
  afterEach(() => {
    dispatcher.dispatch.mockClear();
  });

  it("should call vet api route GET method", async () => {
    axios.get.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
    await detailVets();
    expect(axios.get.mock.calls[0][0]).toEqual(
      "http://192.168.8.100:4200/api/vet"
    );
  });

  it("should call dispatch with data", async () => {
    axios.get.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
    await detailVets();
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOAD_DETAIL_VETS,
      data: {},
    });
  });

  xit("should throw error", async () => {
    axios.get.mockReturnValue(
      new Promise((resolve) => resolve(throwError("erroooor")))
    );
    await detailVets();
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOAD_DETAIL_VETS,
      data: {},
    });
  });
});
