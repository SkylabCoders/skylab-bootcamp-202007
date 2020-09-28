import teaStore from './teaStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../Dispatcher';

describe('teaStore', () => {
  let action;
  let callbackMockFunction;
  const nameVariety = 'matcha';
  const namePrincipal = 'green tea';
  const tea = { _id: 13, name: nameVariety };
  const anotherTea = { _id: 15, name: namePrincipal };

  beforeEach(() => {
    callbackMockFunction = jest.fn();
    teaStore.addChangeListener(callbackMockFunction);
  });
  afterEach(() => {
    teaStore.removeChangeListener(callbackMockFunction);
  });
  it('should create', () => {
    expect(teaStore).toBeDefined();
  });
  it('should register LOAD_TEA_VARIETY', () => {
    action = {
      type: actionTypes.LOAD_TEA_VARIETY,
      data: [nameVariety]
    };
    dispatcher.dispatch(action);
    expect(teaStore.getVarietiesTeas()).toEqual(action.data);
  });
  it('should register LOAD_TEA_VARIETY', () => {
    action = {
      type: actionTypes.LOAD_TEA_SEARCH,
      data: [tea]
    };
    dispatcher.dispatch(action);
    expect(teaStore.getSearchResults()).toEqual(action.data);
  });
  it('should register LOAD_TEA_PRINCIPAL', () => {
    action = {
      type: actionTypes.LOAD_TEA_PRINCIPAL,
      data: [namePrincipal]
    };
    dispatcher.dispatch(action);
    expect(teaStore.getPrincipalTeas()).toEqual(action.data);
  });
  it('should return tea by name', () => {
    action = {
      type: actionTypes.LOAD_TEA_VARIETY,
      data: [tea]
    };
    dispatcher.dispatch(action);
    expect(teaStore.getTeaVarietieByName(tea.name)).toEqual(tea);
  });
  it('should return undefined with wrong actiontype', () => {
    action = {
      type: 'Load-pachachos',
      data: []
    };
    dispatcher.dispatch(action);
    expect(teaStore).toBe.truthy;
  });
  it('should return tea by name', () => {
    action = {
      type: actionTypes.LOAD_TEA_PRINCIPAL,
      data: [tea]
    };
    dispatcher.dispatch(action);
    expect(teaStore.getPrincipalTeasById(tea._id)).toEqual(tea);
  });
  it('should return tea by id', () => {
    action = {
      type: actionTypes.LOAD_TEA_VARIETY,
      data: [tea]
    };
    dispatcher.dispatch(action);
    expect(teaStore.getTeaVarietieId(tea._id)).toEqual(tea);
  });
  it('should return tea by id', () => {
    action = {
      type: actionTypes.LOAD_TEA_SEARCH,
      data: [tea]
    };
    dispatcher.dispatch(action);
    expect(teaStore.getResultById(tea._id)).toEqual(tea);
  });
  it('should return new tea by id', () => {
    action = {
      type: actionTypes.CREATE_TEA_VARIETY,
      data: tea
    };
    dispatcher.dispatch(action);
    expect(teaStore.getResultById(tea._id)).toEqual(tea);
  });
  it('should return tea by id', () => {
    action = {
      type: actionTypes.LOAD_TEA_VARIETY,
      data: [tea, anotherTea]
    };
    dispatcher.dispatch(action);
    tea.name = namePrincipal;
    action = {
      type: actionTypes.UPDATE_TEA_VARIETY,
      data: tea
    };
    dispatcher.dispatch(action);
    expect(teaStore.getTeaVarietieId(tea._id).name).toEqual(namePrincipal);
  });
  it('should return tea by id', () => {
    action = {
      type: actionTypes.LOAD_TEA_SEARCH,
      data: [tea]
    };
    dispatcher.dispatch(action);
    tea.name = namePrincipal;
    action = {
      type: actionTypes.DELETE_TEA_VARIETY,
      data: tea
    };
    dispatcher.dispatch(action);
    expect(teaStore.getResultById(tea._id)).tobeUndefined;
  });
});
