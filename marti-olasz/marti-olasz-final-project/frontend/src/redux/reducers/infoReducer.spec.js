import types from '../actionTypes';
import reducer from './infoReducer';

describe('Info reducer', () => {
  const text = 'we are here';
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle loading', () => {
    const action = {
      type: types.LOADING,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ loading: text });
  });

  it('should handle error', () => {
    const action = {
      type: types.ERROR,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ error: text });
  });

  it('should handle upload image', () => {
    const action = {
      type: types.UPLOAD_IMAGE,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ image: text });
  });

  it('should handle clear image', () => {
    const action = {
      type: types.CLEAR_IMAGE
    };
    expect(reducer({}, action)).toEqual({ image: {} });
  });
});
