import { createStore } from 'redux';

import reducer from './mainReducer';

const store = createStore(reducer);

describe('Main reducer test', () => {
  it('should algo', () => {
    expect(store.getState().bandReducer).toEqual({});
  });
});
