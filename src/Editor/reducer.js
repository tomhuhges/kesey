import defaultState from './defaultState';
import {
  GET_FOLDER_REQUEST,
  GET_FOLDER_SUCCESS,
  GET_FOLDER_FAILURE,
  UPDATE_CURRENT_FOLDER,
  GET_FILE_REQUEST,
  GET_FILE_SUCCESS,
  GET_FILE_FAILURE,
  UPDATE_CURRENT_FILE,
  CREATE_FILE_REQUEST,
  CREATE_FILE_SUCCESS,
  CREATE_FILE_FAILURE,
  TYPING,
  TYPING_STOPPED,
  AUTOSAVE_FILE_REQUEST,
  AUTOSAVE_FILE_SUCCESS,
  AUTOSAVE_FILE_FAILURE,
  TOGGLE_MENU,
} from './constants';

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_FOLDER_REQUEST:
      return Object.assign({}, state, action.payload);
    case GET_FOLDER_SUCCESS:
      return Object.assign({}, state, action.payload);
    case GET_FOLDER_FAILURE:
      return Object.assign({}, state, action.payload);
    case UPDATE_CURRENT_FOLDER:
      return Object.assign({}, state, action.payload);
    case GET_FILE_REQUEST:
      return Object.assign({}, state, action.payload);
    case GET_FILE_SUCCESS:
      return Object.assign({}, state, action.payload);
    case GET_FILE_FAILURE:
      return Object.assign({}, state, action.payload);
    case UPDATE_CURRENT_FILE:
      return Object.assign({}, state, action.payload);
    case CREATE_FILE_REQUEST:
      return Object.assign({}, state, action.payload);
    case CREATE_FILE_SUCCESS:
      return Object.assign({}, state, action.payload);
    case CREATE_FILE_FAILURE:
      return Object.assign({}, state, action.payload);
    case TYPING:
      return Object.assign({}, state, action.payload);
    case TYPING_STOPPED:
      return Object.assign({}, state, action.payload);
    case AUTOSAVE_FILE_REQUEST:
      return Object.assign({}, state, action.payload);
    case AUTOSAVE_FILE_SUCCESS:
      return Object.assign({}, state, action.payload);
    case AUTOSAVE_FILE_FAILURE:
      return Object.assign({}, state, action.payload);
    case TOGGLE_MENU:
      return Object.assign({}, state, { menuOpen: !state.menuOpen });
    default:
      return state;
  }
};
