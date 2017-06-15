import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { getItem } from './services/localstorage';
import defaultState from './Editor/defaultState';
import { dayTheme } from './css/themes';

const persistedState = {
  auth: getItem('auth') ? getItem('auth') : { authenticated: false, token: '' },
  editor: getItem('editor') ? Object.assign({}, defaultState, getItem('editor')) : defaultState,
  theme: getItem('theme') ? getItem('theme') : dayTheme,
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
