import actionTypes from '../actions/actionTypes';
import dispatcher from '../Dispatcher';
import shopStore from './shopStore';

describe('shopStore', () => {
  let action;
  let callbackMockFunction;
  const nameShop = 'usagi';
  const shop = { name: 'usagi', _id: '13' };
  const otherShop = { name: 'notUsagi', _id: '14' };

  beforeEach(() => {
    callbackMockFunction = jest.fn();
    shopStore.addChangeListener(callbackMockFunction);
  });
  afterEach(() => {
    shopStore.removeChangeListener(callbackMockFunction);
  });
  it('should create', () => {
    expect(shopStore).toBeDefined();
  });
  it('should return shopList', () => {
    action = {
      type: actionTypes.LOAD_SHOP,
      data: [nameShop]
    };
    dispatcher.dispatch(action);
    expect(shopStore.getShopList()).toEqual(action.data);
  });
  it('should return _shopsSearch', () => {
    action = {
      type: actionTypes.LOAD_SHOP_SEARCH,
      data: [nameShop]
    };
    dispatcher.dispatch(action);
    expect(shopStore.getSearchResults()).toEqual(action.data);
  });
  it('should return shop by _id', () => {
    action = {
      type: actionTypes.LOAD_SHOP,
      data: [{ _id: nameShop }]
    };
    dispatcher.dispatch(action);
    expect(shopStore.getShopById(nameShop)._id).toEqual(nameShop);
  });
  it('should return shop by _id', () => {
    action = {
      type: actionTypes.LOAD_SHOP_SEARCH,
      data: [{ _id: nameShop }]
    };
    dispatcher.dispatch(action);
    expect(shopStore.getResultById(nameShop)._id).toEqual(nameShop);
  });
  it('should return shop by name', () => {
    action = {
      type: actionTypes.LOAD_SHOP,
      data: [{ name: nameShop }]
    };
    dispatcher.dispatch(action);
    expect(shopStore.getShopByName(nameShop).name).toEqual(nameShop);
  });

  it('should return undefined with wrong actiontype', () => {
    action = {
      type: 'Load-pachachos',
      data: []
    };
    dispatcher.dispatch(action);
    expect(shopStore).toBeTruthy();
  });
  it('should return shop by _id  by CREATE_SHOP action', () => {
    action = {
      type: actionTypes.CREATE_SHOP,
      data: { _id: nameShop }
    };
    dispatcher.dispatch(action);
    expect(shopStore.getShopById(nameShop)._id).toEqual(nameShop);
  });
  it('should return shop by _id  by DELETE_SHOP action', () => {
    action = {
      type: actionTypes.LOAD_SHOP_SEARCH,
      data: [shop]
    };
    dispatcher.dispatch(action);
    action = {
      type: actionTypes.DELETE_SHOP,
      data: shop
    };
    dispatcher.dispatch(action);
    expect(shopStore.getShopById(shop._id)).tobeUndefined;
  });
  it('should return shop with new info by _id  by UPDATE_SHOP action', () => {
    dispatcher.dispatch(action);
    action = {
      type: actionTypes.LOAD_SHOP,
      data: [shop, otherShop]
    };
    dispatcher.dispatch(action);
    const newName = 'pudding';
    shop.name = newName;
    action = {
      type: actionTypes.UPDATE_SHOP,
      data: shop
    };
    dispatcher.dispatch(action);
    expect(shopStore.getShopById(shop._id).name).toEqual(newName);
  });
});
