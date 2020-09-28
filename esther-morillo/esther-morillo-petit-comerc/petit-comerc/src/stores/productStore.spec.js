import productStore from './productStore';
import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

function reduceAction(action, data) {
    return {
        type: action,
        data
    }
}

describe('Product Store', () => {
    let action;
    let secondAction = "";
    let thirdAction;
    let myCallbackMockFunction;
    let _stores;

    beforeEach(() => {
        myCallbackMockFunction = jest.fn();
        productStore.addChangeListener(myCallbackMockFunction);
        action = reduceAction(actionTypes.LOAD_STORE_LIST, [{id: 13, productName: "Camiseta 'Uep'"}])
        dispatcher.dispatch(action);
    });

    afterEach(() => {
        productStore.removeChangeListener(myCallbackMockFunction);
    });

    it('should create', () => {
        expect(productStore).toBeDefined();
        expect(myCallbackMockFunction).toHaveBeenCalled();
    });

    it('should register LOAD_STORE_LIST', () => {
        expect(productStore.getStores()).toEqual(action.data);
    });

    it('should register load product with invalid ID', () => {
        action = reduceAction(actionTypes.LOAD_STORE_LIST, [{ productName: "Camiseta 'Uep'"}])

        const idProduct = productStore.getProductStoreById(action.data.id);
        expect(idProduct).toBeDefined();
    });

    it('should search Store Products by ID', () => {
        const id = 1;
        expect(productStore.getProductStoreById(id)).toEqual(action.data.id);
    });

    it('should search Products by ID', () => {
        const id = 1;
        expect(productStore.getProductStoreById(id)).toEqual(action.data.id);
    });

    it('should call Product', () => {
        const products = [{
            id: '02',
            find: () => {}
        }];
        const productId = '02'
        expect(productStore.getProductById(products, productId)).toEqual(action.data.id);
    });

    it('should register LOAD_PRODUCT_LIST', () => {
        action = reduceAction(actionTypes.LOAD_PRODUCT_LIST, null)

        expect(productStore.getProduct()).toEqual(action.data);
    });  

    it('should call DELETE_STORE case', () => {
        action = reduceAction(actionTypes.TEST_PRODUCT, null);
        dispatcher.dispatch(action);
    });

    it('should handle default case for action types', () => {
        action = reduceAction(actionTypes.TEST_PRODUCT, null);
        dispatcher.dispatch(action);
    });  

    action = reduceAction(actionTypes.LOAD_STORE_LIST, [{
        _id: '1',
        name: 'store-1'
      },
      {
        _id: '2',
        name: 'store-2'
      }
    ]);
    let storeId = '2';
    dispatcher.dispatch(action);
    it("should getProductStoreOwner", () => {
      expect(productStore.getProductStoreOwner(storeId)[0]).toEqual(action.data[1]);
    });
    dispatcher.dispatch(secondAction);
    it("productStore should exist even when actionTypes is not given (default case of the switch)", () => {
      expect(productStore).toBeDefined();
    });
    thirdAction = reduceAction(actionTypes.DELETE_STORE, '1');
    _stores = [{
      _id: '2',
      name: 'store-1'
    }]
    dispatcher.dispatch(thirdAction);
});
