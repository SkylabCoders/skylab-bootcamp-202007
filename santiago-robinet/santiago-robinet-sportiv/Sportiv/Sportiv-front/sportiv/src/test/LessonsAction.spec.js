import dispatcher from "../dispatcher";
import axios from "axios";
import { loadLessons } from "../actions/LessonAction";

jest.dontMock("../actions/userActions");
jest.mock("../dispatcher");
jest.mock("axios");

describe("Lessons Actions", () => {
  afterEach(() => {
    dispatcher.dispatch.mockClear();
  });

  it("should call lessons api route", async () => {
    axios.get.mockReturnValue(
      new Promise((resolve) => resolve({ title: "Learn Roller" }))
    );
    await loadLessons();
    console.log(axios.post.mock.calls[0]);
    expect(axios.get.mock.calls[0][0]).toEqual("/api/lessons");
  });
});
