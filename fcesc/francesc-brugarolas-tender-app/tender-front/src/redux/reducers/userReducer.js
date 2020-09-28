import ACTION_TYPES from './../actions/ACTION_TYPES';
import REDUCERS_INITIAL_STATE from './REDUCERS_INITIAL_STATE';

export default function userReducer(state = REDUCERS_INITIAL_STATE.user, action = ACTION_TYPES.DEFAULT) {
  switch (action.type) {
    case ACTION_TYPES.USER.UPDATE_USER:
      return { ...state, userToUpdate: action.payload };
    case ACTION_TYPES.USER.DELETE_USER:
      return { ...state, userToUpdate: undefined, userToDelete: action.payload };
    case ACTION_TYPES.USER.SAVE_CURRENT_USER:
      return { ...state, currentUserType: action.payload.type, uid: action.payload.uid };
    case ACTION_TYPES.USER.REMOVE_CURRENT_USER:
      return { ...state, currentUser: undefined, uid: undefined };
    case ACTION_TYPES.USER.EXIST_CURRENT_USER:
      return { ...state, currentUserType: action.payload.type, uid: action.payload.uid };
    default:
      return state;
  }
}