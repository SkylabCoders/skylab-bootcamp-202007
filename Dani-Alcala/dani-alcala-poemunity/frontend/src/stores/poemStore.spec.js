import poemStore from "./poemStore";
import actionTypes from "../actions/actionTypes";
import dispatcher from "../appDispatcher";

function reduceAction(action, data) {
  return {
    type: action,
    data
  };
}

describe("poemStore", () => {
  let action;
  let secondAction = "";
  let thirdAction;
  let fourthAction;
  let fifthAction;
  let sixthAction;
  let seventhAction;
  let seventhActionRandom;
  let eigthAction;
  let myCallbackMockFunction;

  beforeEach(() => {
    myCallbackMockFunction = jest.fn();
    poemStore.addChangeListener(myCallbackMockFunction);
  });

  afterEach(() => {
    poemStore.removeChangeListener(myCallbackMockFunction);
  });

  action = reduceAction(actionTypes.LOAD_POEMS, [{
      _id: '1',
      title: 'SEGURO QUE ESTA HISTORIA TE SUENA',
      author: 'Karmelo Iribarren',
      genre: 'amor',
      likes: ['1', '4'],
      date: '',
      poem: `Al fondo de la barra
        ...`
    },
    {
      _id: '2',
      title: 'DE OLA EN OLA',
      author: 'Antonio García Teijeiro',
      genre: 'infantiles',
      likes: ['6'],
      date: '',
      poem: `De ola en ola,
    ...`
    },
  ]);

  const user = {
    name: "Karmelo Iribarren",
    sub: '6'
  }

  dispatcher.dispatch(action);

  it("should get poems if criteria does not exist", () => {
    expect(poemStore.getPoems()).toEqual(action.data);
  });

  it("should get poems if criteria === amor", () => {
    expect(poemStore.getPoems("amor")[0]).toEqual(action.data[0]);
  });

  it("should get poems if criteria === infantiles", () => {
    expect(poemStore.getPoems("infantiles")[0]).toEqual(action.data[1]);
  });

  it("should get poems for user === Karmelo Iribarren", () => {
    expect(poemStore.getPoemsByUser(user)[0]).toEqual(action.data[0]);
  });

  it("should get favourite poems for user === Karmelo Iribarren", () => {
    expect(poemStore.getFavouritePoemsByUser(user)[0]).toEqual(action.data[1]);
  });

  dispatcher.dispatch(secondAction);

  it("poemStore should exist even when actionTypes is not given (default case of the switch)", () => {
    expect(poemStore).toBeDefined();
  });

  thirdAction = reduceAction(actionTypes.LOAD_POEM, [{
    poemId: '1',
    title: 'SEGURO QUE ESTA HISTORIA TE SUENA',
    author: 'Karmelo Iribarren',
    genre: 'amor',
    likes: ['1', '4'],
    date: '',
    poem: `Al fondo de la barra
        ...`
  }]);

  dispatcher.dispatch(thirdAction);
  
  it("should create", () => {
    expect(poemStore).toBeDefined();
  });

  it("should get poem without id", () => {
    expect(poemStore.getPoem()).toEqual(thirdAction.data);
  });

  it("should get poem with id", () => {
    expect(poemStore.getPoem('2')).toEqual(action.data[1]);
  });


  it('should create a new poem', () => {
    const title = 'Poema 20';

    fourthAction = reduceAction(actionTypes.CREATE_POEM, {
      title
    });
    dispatcher.dispatch(fourthAction);

    const isPoemSaved = poemStore
      .getPoems()
      .some((poem) => poem.title === title);

    expect(isPoemSaved).toEqual(true);
  });

  it('should delete a poem given and id', () => {
    const _id = '1';
    fifthAction = reduceAction(actionTypes.DELETE_POEM, {
      _id
    });
    dispatcher.dispatch(fifthAction);

    const isPoemDeleted = poemStore
      .getPoems()
      .some((poem) => poem._id === _id);

    expect(isPoemDeleted).toEqual(false);
  });

  it('should like one poem', () => {

    sixthAction = reduceAction(actionTypes.LIKE_POEM, [{
      _id: '1',
      title: 'SEGURO QUE ESTA HISTORIA TE SUENA',
      author: 'Karmelo Iribarren',
      picture: "1",
      genre: 'amor',
      date: '2020-9-11 19:3:42',
      likes: ['1', '3', '6']
    }]);

    dispatcher.dispatch(sixthAction);
    const isPoemLiked = poemStore
      .getPoems()
      .some((poem) => poem.likes === action.data.likes);

    expect(isPoemLiked).toEqual(true);
  });

  seventhAction = reduceAction(actionTypes.SORT_POEMS, [{
      title: 'SEGURO QUE ESTA HISTORIA TE SUENA',
      author: 'Karmelo Iribarren',
      picture: "1",
      genre: 'amor',
      date: '2020-9-11 19:3:42',
      likes: ['1', '3', '6']
    },
    {
      title: 'DE OLA EN OLA',
      author: 'Antonio García Teijeiro',
      picture: "2",
      genre: 'infantiles',
      date: '2020-8-11 19:3:42',
      likes: ['1', '5']
    },
    {
      title: 'whatever',
      author: 'something',
      picture: "3",
      genre: 'infantiles',
      date: '2020-5-5 19:3:42',
      likes: ['1', '5', '7', '12']
    },
    {
      title: 'whatever',
      author: 'Antonio García Teijeiro',
      picture: "2",
      genre: 'infantiles',
      date: '2019-9-11 19:3:42',
      likes: []
    },
  ]);

  seventhActionRandom = reduceAction(actionTypes.SORT_POEMS, [{
    title: 'SEGURO QUE ESTA HISTORIA TE SUENA',
    author: 'Karmelo Iribarren',
    picture: "1",
    genre: 'amor',
    date: '2020-9-11 19:3:42',
    likes: ['1', '3', '6']
  }, ]);

  let poemsToSort = [{
      title: 'SEGURO QUE ESTA HISTORIA TE SUENA',
      author: 'Karmelo Iribarren',
      picture: "1",
      genre: 'amor',
      date: '2020-9-11 19:3:42',
      likes: ['1', '3', '6']
    },
    {
      title: 'DE OLA EN OLA',
      author: 'Antonio García Teijeiro',
      picture: "2",
      genre: 'infantiles',
      date: '2020-8-11 19:3:42',
      likes: ['1', '5']
    },
    {
      title: 'whatever',
      author: 'something',
      picture: "3",
      genre: 'infantiles',
      date: '2020-5-5 19:3:42',
      likes: ['1', '5', '7', '12']
    },
    {
      title: 'whatever',
      author: 'Antonio García Teijeiro',
      picture: "2",
      genre: 'infantiles',
      date: '2019-9-11 19:3:42',
      likes: []
    },
  ];

  let poemsToSortRandom = [{
    title: 'SEGURO QUE ESTA HISTORIA TE SUENA',
    author: 'Karmelo Iribarren',
    picture: "1",
    genre: 'amor',
    date: '2020-9-11 19:3:42',
    likes: ['1', '3', '6']
  }, ];

  dispatcher.dispatch(seventhAction);
  dispatcher.dispatch(seventhActionRandom);

  it("should sort by likes", () => {
    expect(poemStore.sortPoems("likes", seventhAction.data)[0]).toEqual(poemsToSort[2]);
  });

  it("should sort by title", () => {
    expect(poemStore.sortPoems("titulo", seventhAction.data)[0]).toEqual(poemsToSort[1]);
  });

  it("should sort by title - case with same title", () => {
    expect(poemStore.sortPoems("titulo", seventhAction.data)[2]).toEqual(poemsToSort[2]);
  });

  it("should sort by date", () => {
    expect(poemStore.sortPoems("fecha", seventhAction.data)[0]).toEqual(poemsToSort[0]);
  });

  it("should sort by random", () => {
    expect(poemStore.sortPoems("aleatorio", seventhActionRandom.data)[0]).toEqual(poemsToSortRandom[0]);
  });

  eigthAction = reduceAction(actionTypes.SORT_POEMS, [{
    userId: 1,
    author: 'Karmelo Iribarren',
    picture: "1",
    likes: ['1', '3', '6']
  }, ]);

  let poemPoints = 3;
  let likePoints = 1;
  let result = [{
    author: 'Karmelo Iribarren',
    picture: "1",
    points: 6
  }];

  dispatcher.dispatch(eigthAction);

  it("should rank", () => {
    expect(poemStore.getRanking(eigthAction.data, poemPoints, likePoints)).toEqual(result);
  });
});