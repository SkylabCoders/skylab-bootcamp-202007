import types from '../actionTypes';
import reducer from './authReducer';

describe('Auth reducer', () => {
  const text = 'we are here';
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle saveUser', () => {
    const action = {
      type: types.SAVE_USER,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ userIdentifier: text });
  });

  it('should handle removeUser', () => {
    const action = {
      type: types.REMOVE_USER
    };
    expect(reducer({}, action)).toEqual({ userIdentifier: null });
  });

  it('should handle getUser', () => {
    const action = {
      type: types.GET_USER,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ user: text });
  });

  it('should handle addFollower', () => {
    const action = {
      type: types.ADD_FOLLOW,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ user: text });
  });

  it('should handle removeFollow', () => {
    const action = {
      type: types.REMOVE_FOLLOW,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ user: text });
  });

  it('should handle sendEditInfo', () => {
    const action = {
      type: types.SEND_USER_EDIT_INFO,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ user: text });
  });

  it('should handle edit', () => {
    const action = {
      type: types.USER_EDIT,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ editInfo: text });
  });

  it('should handle editName', () => {
    const action = {
      type: types.USER_EDIT_NAME,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ editInfo: { user: text } });
  });

  it('should handle editBio', () => {
    const action = {
      type: types.USER_EDIT_BIO,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ editInfo: { bio: text } });
  });

  it('should handle newBand', () => {
    const action = {
      type: types.NEW_BAND,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ user: text });
  });
});
