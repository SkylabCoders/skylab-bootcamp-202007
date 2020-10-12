import types from '../actionTypes';
import reducer from './bandReducer';

describe('Band reducer', () => {
  const text = 'we are here';
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle getBand', () => {
    const action = {
      type: types.GET_BAND,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ band: text });
  });

  it('should handle showDisc', () => {
    const action = {
      type: types.SHOW_DISC,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ disc: text });
  });

  it('should handle searchBand', () => {
    const action = {
      type: types.SEARCH_BAND,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ search: text });
  });

  it('should handle followBand', () => {
    const action = {
      type: types.FOLLOW_BAND,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ bandFollowers: text });
  });

  it('should handle sendBandEditInfo', () => {
    const action = {
      type: types.SEND_BAND_EDIT_INFO,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ band: text });
  });

  it('should handle bandEdit', () => {
    const action = {
      type: types.BAND_EDIT,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ editInfo: text });
  });

  it('should handle createDisc', () => {
    const action = {
      type: types.CREATE_DISC,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ band: text });
  });

  it('should handle deleteDisc', () => {
    const action = {
      type: types.DELETE_DISC,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ band: text });
  });

  it('should handle createConcert', () => {
    const action = {
      type: types.CREATE_CONCERT,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ band: text });
  });

  it('should handle removeConcert', () => {
    const action = {
      type: types.DELETE_CONCERT,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ band: text });
  });

  it('should handle showPhoto', () => {
    const action = {
      type: types.SHOW_PHOTO,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ showPhoto: text });
  });

  it('should handle createPhoto', () => {
    const action = {
      type: types.CREATE_PHOTO,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ band: text });
  });

  it('should handle createPhoto', () => {
    const action = {
      type: types.DELETE_PHOTO,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ band: text });
  });
});
