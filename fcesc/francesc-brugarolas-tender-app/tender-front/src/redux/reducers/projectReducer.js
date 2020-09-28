import ACTION_TYPES from './../actions/ACTION_TYPES';
import REDUCERS_INITIAL_STATE from './REDUCERS_INITIAL_STATE';

export default function projectReducer(state = REDUCERS_INITIAL_STATE.project, action = ACTION_TYPES.DEFAULT) {
  switch (action.type) {
    case ACTION_TYPES.PROJECT.CREATE_PROJECT:
      return { ...state, itemBeingCreated: action.payload };
    case ACTION_TYPES.PROJECT.UPDATE_PROJECT:
      return { ...state, current: action.payload };
    case ACTION_TYPES.PROJECT.DELETE_PROJECT:
      return state;
    case ACTION_TYPES.PROJECT.CALCULATE_PROJECT:
      return { ...state, calculated: action.payload };
    case ACTION_TYPES.PROJECT.LOAD_PROJECT_BYSLUG:
      return { ...state, current: action.payload };
    case ACTION_TYPES.PROJECT.LOAD_PROJECT_FLOW:
      return { ...state, flow: action.payload };
    case ACTION_TYPES.PROJECT.LOAD_PROJECT_INFO:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}