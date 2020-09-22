import PRODUCTS_MOCK from './../../mockdata/PRODUCTS_MOCK';

const REDUCERS_INITIAL_STATE: { products: { name: string, price: number }[], cart: { name: string, price: number, quantity: number }|void[] } = {
  products: PRODUCTS_MOCK,
  cart: []
}

export default REDUCERS_INITIAL_STATE;