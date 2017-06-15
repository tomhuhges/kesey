import Dropbox from 'dropbox';
import { setItem } from '../services/localstorage';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './constants';

export const loginRequest = (token) => {
  const payload = { token };
  setItem('auth', payload);
  return {
    type: LOGIN_REQUEST,
    payload,
  };
};

export const loginSuccess = (user) => {
  const payload = {
    authenticated: true,
    user,
  };
  setItem('auth', payload);
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const loginFailure = (error, errorDesc) => ({
  type: LOGIN_FAILURE,
  payload: {
    authenticated: false,
    error,
    errorDesc,
  },
});

export const login = token => (
  (dispatch) => {
    dispatch(loginRequest(token));
    const dbx = new Dropbox({ accessToken: token });
    dbx.usersGetCurrentAccount()
      .then(user => dispatch(loginSuccess(user)))
      .catch(err => dispatch(loginFailure(err)));
  }
);

export const logout = () => {
  const payload = {
    authenticated: false,
    token: '',
  };
  localStorage.setItem('auth', JSON.stringify(payload));
  return { type: LOGOUT, payload };
};
