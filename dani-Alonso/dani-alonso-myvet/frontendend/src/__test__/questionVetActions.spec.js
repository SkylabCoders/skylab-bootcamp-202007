import dispatcher from "../../dispatcher";
import axios from "axios";
import actionTypes from "../actions/actionTypes";
import { loadVetsQuestionList } from "../actions/questionVetActions";

jest.dontMock("../actions/questionVetActions");
jest.mock("../../dispatcher");
jest.mock("axios");

describe("question vet actions", () => {
  afterEach(() => {
    dispatcher.dispatch.mockClear();
  });

  it("should load list of questions", async () => {
    axios.get.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
    await loadVetsQuestionList();
    expect(axios.get.mock.calls[0][0]).toEqual(
      "http://192.168.8.100:4200/api/questionVet"
    );
  });

  it("should call dispatch with data", async () => {
    axios.get.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
    await loadVetsQuestionList();
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOAD_VET_QUESTION,
      data: {},
    });
  });

  it("should throw error", async () => {
    axios.get.mockReturnValue(
      new Promise((resolve) => resolve(new Error("erroooor")))
    );
    await loadVetsQuestionList();
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOAD_VET_QUESTION,
      data: {},
    });
  });
});
