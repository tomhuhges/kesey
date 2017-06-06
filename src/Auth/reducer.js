import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './constants';

export default (state = { authenticated: false }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, action.payload);
    case LOGIN_SUCCESS:
      return Object.assign({}, state, action.payload);
    case LOGIN_FAILURE:
      return Object.assign({}, state, action.payload);
    case LOGOUT:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
