import dispatcher from "../../dispatcher";
import axios from "axios";
import actionTypes from "../actions/actionTypes";
import { createQuestion } from "../actions/questionActions";

jest.dontMock("../actions/questionActions");
jest.mock("../../dispatcher");
jest.mock("axios");

describe("question actions", () => {
  afterEach(() => {
    dispatcher.dispatch.mockClear();
  });

  it("should create a question", async () => {
    axios.get.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
    await createQuestion();
    expect(axios.get.mock.calls[0][0]).toEqual(
      "http://192.168.8.100:4200/api/question"
    );
  });

  fit("should call dispatch with data", async () => {
    const user = { name: "Dani" };
    axios.post.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
    await createQuestion(user);
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.CREATE_QUESTION,
      data: {},
    });
  });

  it("should throw error", async () => {
    axios.get.mockReturnValue(
      new Promise((resolve) => resolve(throwError("erroooor")))
    );
    await createQuestion();
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.CREATE_QUESTION,
      data: {},
    });
  });
});
