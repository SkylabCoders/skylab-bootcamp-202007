import lessonsStore from "../stores/LessonsStore";
import actionTypes from "../actions/actionTypes";
import dispatcher from "../dispatcher";

describe("User Store", () => {
  let action;
  let mockCallbackFunction;

  beforeEach(() => {
    mockCallbackFunction = jest.fn();
    lessonsStore.addChangeListener(mockCallbackFunction);
  });
  afterEach(() => {
    lessonsStore.removeChangeListener(mockCallbackFunction);
  });

  it("should exist", () => {
    expect(lessonsStore).toBeDefined();
  });

  it(" should load a list of lessons ", () => {
    action = {
      type: actionTypes.LOAD_LESSONS,
      data: [
        { title: "Learn Kayak" },
        { title: "Learn Kayak" },
        { title: "Learn Kayak" },
      ],
    };
    dispatcher.dispatch(action);

    expect(lessonsStore.getLessons()).toEqual(action.data);
  });

  it(" should load a list of lessons ", () => {
    action = {
      type: actionTypes.CREATE_LESSON,
      data: { title: "Learn Kayak" },
    };
    dispatcher.dispatch(action);

    expect(lessonsStore).toBeTruthy();
  });
});
