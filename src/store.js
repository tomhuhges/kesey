import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import defaultState from './Editor/defaultState';
import { dayTheme } from './css/themes';

const persistedState = {
  auth: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : { authenticated: false },
  editor: localStorage.getItem('editor') ? Object.assign({}, defaultState, JSON.parse(localStorage.getItem('editor'))) : defaultState,
  theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : dayTheme,
};

const store = createStore(
  reducer,
  persistedState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
