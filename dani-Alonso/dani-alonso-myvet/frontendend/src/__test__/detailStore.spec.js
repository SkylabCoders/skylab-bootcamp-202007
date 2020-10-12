import detailStore from "../stores/detailStore";
import actionTypes from "../actions/actionTypes";
import dispatcher from "../../dispatcher";

describe("detailstore", () => {
  let action;

  let mockCallbackFunction;

  beforeEach(() => {
    mockCallbackFunction = jest.fn();
    detailStore.addChangeListener(mockCallbackFunction);
  });
  afterEach(() => {
    detailStore.removeChangeListener(mockCallbackFunction);
  });

  it("should exist", () => {
    expect(detailStore).toBeDefined();
  });

  it("should load details", () => {
    action = {
      type: actionTypes.LOAD_DETAIL_VETS,
      data: {
        vetname: "ACE",
      },
    };
    dispatcher.dispatch(action);
    expect(detailStore.getVetDetails()).toEqual(action.data);
  });

  it("should create question", () => {
    action = {
      type: actionTypes.CREATE_QUESTION,
      data: {
        question: "my dog can't see",
      },
    };
    dispatcher.dispatch(action);
    expect(detailStore.getVetQuestions()).toEqual(action.data);
  });
  it("should load vet question", () => {
    action = {
      type: actionTypes.LOAD_VET_QUESTION,
      data: {
        question: "my dog can't see",
      },
    };
    dispatcher.dispatch(action);
    expect(detailStore.getShowVetQuestions()).toEqual(action.data);
  });

  it("should getVetById", () => {
    action = {
      type: actionTypes.LOAD_DETAIL_VETS,
      data: [
        {
          id: 1,
        },
      ],
    };
    dispatcher.dispatch(action);
    expect(detailStore.getVetById(1)).toEqual({ id: 1 });
  });

  it("should use default", () => {
    action = {
      type: actionTypes.USE_DEFAULT,
      data: {
        default: "default",
      },
    };
    dispatcher.dispatch(action);
    expect(detailStore).toBeTruthy();
  });
});
